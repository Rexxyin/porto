import type { ExperienceItem } from "@/config/types";

export const experienceSectionConfig = {
  title: "Experience",
};


export const experienceConfig: ExperienceItem[] = [
  {
    id: "design-engineer",
    role: "Independent Design Engineer",
    company: "Self-employed",
    period: "2023 — Present",
    summary:
      "Designing and shipping products end-to-end with rapid iteration and strong feedback loops.",
    highlights: [
      "Built reusable design systems and high-craft frontend architecture",
      "Delivered open-source products with measurable community adoption",
    ],
    order: 1,
    enabled: true,
  },
];
