const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const GITHUB_PUBLIC_CONTRIB_ENDPOINT = "https://github.com/users";

const QUERY = `
  query($username: String!, $from: DateTime, $to: DateTime) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export async function fetchGithubData(
  username: string,
): Promise<Contribution[]> {
  const token = process.env.GITHUB_TOKEN;
  const now = new Date();
  const from = new Date(now);
  from.setFullYear(now.getFullYear() - 1);

  if (!token) {
    return fetchGithubPublicData(username, from, now);
  }

  const response = await fetch(GITHUB_GRAPHQL_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        username,
        from: from.toISOString(),
        to: now.toISOString(),
      },
    }),
    next: { revalidate: 60 }, // Cache for 60 seconds for fresher data
  });

  const json = await response.json();

  if (json.errors) {
    console.error("GitHub API Errors:", json.errors);
    return fetchGithubPublicData(username, from, now);
  }

  const weeks =
    json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];

  // Flatten weeks into days
  const days: { date: string; count: number }[] = weeks.flatMap(
    (week: {
      contributionDays: { date: string; contributionCount: number }[];
    }) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
      })),
  );

  // Normalize and color bucket
  return days.map((day) => ({
    ...day,
    level: getIntensityLevel(day.count),
  }));
}

async function fetchGithubPublicData(
  username: string,
  from: Date,
  to: Date,
): Promise<Contribution[]> {
  const endpoint = GITHUB_PUBLIC_CONTRIB_ENDPOINT
    .concat(`/${username}/contributions`)
    .concat(`?from=${from.toISOString().slice(0, 10)}`)
    .concat(`&to=${to.toISOString().slice(0, 10)}`);

  const response = await fetch(endpoint, {
    next: { revalidate: 3600 },
    headers: {
      "User-Agent": "portfolio",
    },
  });

  if (!response.ok) {
    return [];
  }

  const svg = await response.text();
  const rects = [...svg.matchAll(/<rect[^>]*>/g)];

  return rects
    .map((rectMatch) => rectMatch[0])
    .map((rect) => {
      const date = rect.match(/data-date="([^"]+)"/)?.[1];
      const count = Number(rect.match(/data-count="(\d+)"/)?.[1] ?? 0);
      if (!date) return null;

      return {
        date,
        count,
        level: getIntensityLevel(count),
      };
    })
    .filter((item): item is Contribution => item !== null);
}

function getIntensityLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 11) return 3;
  return 4;
}
