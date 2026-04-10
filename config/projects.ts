import type { Project } from "@/config/types";

export const projectsSectionConfig = {
  title: "Open-Source Impact",
  liveButtonLabel: "View Product",
  liveTooltip: "Open project",
};

export const projectsConfig: Project[] = [
  {
    id: "oss-design-system",
    title: "Open UI System — Design-to-code foundation",
    description:
      "Reusable design system and starter architecture built to ship premium interfaces faster with consistency.",
    content:
      "## Problem\nTeams lose quality and time when each product surface is designed and implemented differently.\n\n## Solution\nI created an open-source UI foundation with reusable components, theming tokens, interaction patterns, and implementation guides.\n\n## Outcome\nThis project improved delivery speed, reduced UI inconsistencies, and became a shared baseline for future product work.",
    image: "/gridly.png",
    githubUrl: "https://github.com/prateekjn",
    imageAlt: "Gridly - SaaS Starter Kit",
    liveUrl: "https://prateekjn.me",
    tags: ["Design Systems", "Next.js", "TypeScript", "Open Source"],
    metrics: [
      { icon: "chart", label: "Faster design-to-code cycles" },
      { icon: "users", label: "Used across multiple builds" },
    ],
    order: 1,
    enabled: true,
  },
  {
    id: "oss-product-template",
    title: "Product Launch Template — UX-first starter",
    description:
      "Open-source template for shipping polished product pages and dashboards with strong UX defaults.",
    content:
      "## Problem\nMany teams move quickly but launch interfaces that lack trust, hierarchy, and polish.\n\n## Solution\nI built a launch-ready template with opinionated UX patterns, responsive layout primitives, and scalable frontend architecture.\n\n## Outcome\nThe template helped teams move from idea to usable product surfaces faster while preserving brand quality.",
    image: "/zeno.png",
    imageAlt: "Zeno SaaS Boilerplate",
    liveUrl: "https://prateekjn.me",
    tags: ["UX", "Frontend Architecture", "Open Source"],
    metrics: [
      { icon: "users", label: "Adopted by builders and indie teams" },
      { icon: "chart", label: "Reduced launch friction" },
    ],
    order: 2,
    enabled: true,
  },
  {
    id: "oss-performance-kit",
    title: "Performance UI Kit — Fast by default",
    description:
      "A component and optimization kit focused on speed, accessibility, and premium interaction quality.",
    content:
      "## Problem\nDesign-heavy interfaces often feel sluggish when performance and accessibility are treated as afterthoughts.\n\n## Solution\nI built reusable patterns for animation, rendering efficiency, and accessibility that keep interfaces both expressive and fast.\n\n## Outcome\nThis toolkit helped preserve visual quality while improving usability and runtime performance across product pages.",
    image: "/root.png",
    imageAlt: "Root - Math Drill Engine",
    liveUrl: "https://prateekjn.me",
    tags: ["Performance", "Accessibility", "Frontend"],
    metrics: [
      { icon: "users", label: "Improved usability baseline" },
      { icon: "chart", label: "Smoother perceived performance" },
    ],
    order: 3,
    enabled: true,
  },
];
