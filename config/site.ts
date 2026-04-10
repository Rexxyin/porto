import { socialsConfig } from "@/config/socials";
import type { PortfolioConfig } from "@/config/types";
import SoloLearnIcon from "@/public/sololearn-icon";
import BrandNextjs from "@/public/stacks/nextjs";
import X from "@/public/x-icon";
import { BookmarkCheckIcon } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
export const siteConfig: PortfolioConfig = {
  meta: {
    url: "https://prateekjn.me",
    title: "Prateek — Design Engineer & Open-Source Builder",
    titleTemplate: "%s | Prateek",
    shortTitle: "Prateek",
    description:
      "Prateek is a design engineer building high-craft web products and impactful open-source projects.",
    keywords: [
      "Design Engineer",
      "Open Source",
      "Frontend Engineer",
      "Product Design",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "User Experience",
      "Prateek",
      "Prateek Jain",
      "Portfolio",
    ],
    authors: [{ name: "Prateek", url: "https://prateekjn.me" }],
    creator: "Prateek",
    publisher: "Prateek",
    classification: "Portfolio",
    category: "technology",
    locale: "en_US",
    ogImage: {
      url: "/profile.avif",
      width: 1200,
      height: 630,
      alt: "Prateek — Design Engineer & Open-Source Builder",
    },
    twitterCreator: "@Prateek32177",
    icon: "/favicon.svg",
    appleIcon: "/apple-touch-icon.png",
    googleVerification: "google-site-verification-code",
    manifest: {
      name: "Prateek — Design Engineer & Open-Source Builder",
      short_name: "Prateek",
      description:
        "Prateek builds high-impact product experiences and open-source projects.",
      start_url: "/",
      display: "standalone",
      background_color: "#fafafa",
      theme_color: "#18181b",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "any",
          type: "image/x-icon",
        },
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    robots: {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: "https://prateekjn.me/sitemap.xml",
    },
    sitemap: [
      { url: "https://prateekjn.me", changeFrequency: "monthly", priority: 1 },
    ],
  },
  personal: {
    fullName: "Prateek Jain",
    firstName: "Prateek",
    avatar: {
      src: "/profile.avif",
      alt: "@Prateek32177",
      fallback: "PJ",
    },
    location: {
      label: "India",
      timezone: "UTC +5:30",
    },
    githubUsername: "Prateek32177",
  },
  sectionOrder: [
    "projects",
    "github",
    "skills",
    "about",
    "services",
    "workflow",
    "contact",
    "socials",
  ],
  sectionFlags: {
    socials: true,
    skills: true,
    about: true,
    testimonials: false,
    projects: true,
    bookmarks: false,
    certifications: false,
    experience: false,
    services: true,
    workflow: true,
    github: true,
    contact: true,
  },
  banner: {
    imageSrc: "/banner.png",
    imageAlt: "Banner",
    openSourceUrl: "https://github.com/Hookflo/tern",
    openSourceTooltip: "Explore Tern on GitHub",
    themeToggleLabel: "Toggle theme",
    themeShortcut: "D",
    themeTooltip: "Toggle theme",
    switchAudioSrc: "/switch.mp3",
  },
  about: {
    title: "About",
    body: "I’m Prateek, a design engineer focused on building high-impact products where UX clarity, interaction craft, and engineering quality move together. I work in public, contribute to open-source, and care deeply about interfaces that feel human while performing at production scale.",
    emphasizedPhrases: ["design engineer", "interfaces that feel human"],
  },
  services: {
    title: "What I build best",
    items: [
      "Design-engineered web products with strong information hierarchy and polished interactions.",
      "Open-source developer tools and starter kits that ship with real-world standards and docs.",
      "Landing pages and product surfaces focused on clarity, trust, and conversion.",
    ],
  },
  workflow: {
    title: "How I work",
    items: [
      {
        label: "Discover",
        description: "I align product goals, user intent, and interaction priorities before writing implementation code.",
      },
      {
        label: "Design + Build",
        description: "I ship UI systems and product logic together so quality and velocity stay aligned.",
      },
      {
        label: "Measure",
        description: "I frame outcomes with impact metrics and use feedback loops for the next iteration.",
      },
    ],
  },
  contact: {
    title: "Let’s build something standout",
    description:
      "If you want a design-engineered build that feels premium and performs, send your brief and timeline.",
    pricing: [
      {
        label: "Engagement model",
        value: "Project-based",
        note: "Ideal for focused builds, revamps, and launch-critical product surfaces.",
      },
      {
        label: "Scope fit",
        value: "Design + Frontend execution",
        note: "Best for teams that need outcomes, not handoff-only mockups.",
      },
      {
        label: "Response time",
        value: "Usually within 24–48 hours",
        note: "Include context, current stack, and success criteria for a faster response.",
      },
    ],
    channels: socialsConfig.filter((item) =>
      ["email", "x", "discord"].includes(item.id),
    ),
  },
  bookmarks: {
    title: "Learning",

    items: [
      {
        id: "1",
        url: "https://x.com/thedankoe/status/2014022520513634718",
        title: "The future of work when work is meaningless",
        domain: "x.com",
        icon: X,
      },
      {
        id: "2",
        url: "https://youtu.be/xwbI8VOsDTo?si=bSU7AkTOZJt-esFd",
        title: "Power Of Words | Mohammed Qathani",
        domain: "youtube.com",
        icon: FaYoutube,
      },
      {
        id: "3",
        url: "https://x.com/thedankoe/status/2010751592346030461",
        title: "How To Fix Your Life In 1 Day",

        domain: "x.com",
        icon: X,
      },
      {
        id: "4",
        url: "https://www.youtube.com/watch?v=fq0txiTIiFM&list=PPSV",
        title: "All of Computer Science in 10 Real Projects",
        domain: "youtube.com",
        icon: FaYoutube,
      },
      {
        id: "5",
        url: "https://x.com/digiii/status/2015009789546262984",
        title: "Nothing matters, head for the mountains  ",
        domain: "x.com",
        icon: X,
      },
      {
        id: "6",
        url: "https://x.com/dwarkesh_sp/status/2022357801276690455",
        title: "Dario's Interview ",
        domain: "x.com",
        icon: X,
      },
      {
        id: "7",
        url: "https://youtu.be/aStHTTPxlis?si=VoWpllxMa1Ihphro",
        title: "How Elon Work",
        domain: "youtube.com",
        icon: FaYoutube,
      },
      {
        id: "8",
        url: "https://arxiv.org/abs/1706.03762",
        title: "Attention Is All You Need",
        domain: "arxiv.org",
        icon: BookmarkCheckIcon,
      },
    ],
  },
  certifications: {
    title: "Learning Foundations",
    items: [
      {
        id: "certificate-1",
        url: "https://nextjs.org/learn/certificate?course=react-foundations&user=45793&certId=react-foundations-45793-1771918035299",
        title: "React Foundations",
        domain: "nextjs.org",
        date: "2025",
        icon: BrandNextjs,
      },
      {
        id: "certificate-2",
        url: "https://www.sololearn.com/certificates/CC-N1JK4PWH",
        title: "Web Development",
        domain: "sololearn.com",
        date: "2024",
        icon: SoloLearnIcon,
      },
      {
        id: "certificate-3",
        url: "https://nextjs.org/learn/certificate?course=dashboard-app&user=45793&certId=dashboard-app-45793-1771919744029",
        title: "App Router",
        domain: "nextjs.org",
        date: "2025",
        icon: BrandNextjs,
      },
      {
        id: "certificate-4",
        url: "https://www.sololearn.com/certificates/CC-FSTNML8K",
        title: "Introduction to CSS",
        domain: "sololearn.com",
        date: "2024",
        icon: SoloLearnIcon,
      },
      {
        id: "certificate-5",
        url: "https://www.sololearn.com/certificates/CC-ATHOEG0Y",
        title: "Introduction to C#",
        domain: "sololearn.com",
        date: "2024",
        icon: SoloLearnIcon,
      },
      {
        id: "certificate-6",
        url: "https://www.sololearn.com/certificates/CC-I0LF0CGS",
        title: "Javascript Intermediate",
        domain: "sololearn.com",
        date: "2024",
        icon: SoloLearnIcon,
      },
    ],
  },
};
