import type { Project } from "@/config/types";

export const projectsSectionConfig = {
  title: "Open-Source Impact",
  liveButtonLabel: "View Product",
  liveTooltip: "Open project",
};

export const projectsConfig: Project[] = [
  {
    id: "tern-framework",
    title: "Tern — AI-native framework for product teams",
    description:
      "A modern framework from Hookflo to ship AI-powered products faster, with design-system quality and production-ready developer ergonomics.",
    content:
      "## Problem\nTeams building AI products spend too much time stitching together architecture, patterns, and interface decisions.\n\n## Solution\nI contributed to Tern as a framework-first foundation with strong defaults, clean developer workflows, and product-grade UI standards.\n\n## Outcome\nTern gives builders a faster path from idea to shipped product while preserving quality, consistency, and maintainability.",
    image: "/gridly.png",
    githubUrl: "https://github.com/Hookflo/tern",
    imageAlt: "Gridly - SaaS Starter Kit",
    liveUrl: "https://tern.hookflo.com/",
    tags: ["Framework", "Open Source", "Developer Experience", "Design Engineering"],
    metrics: [
      { icon: "chart", label: "Faster AI product scaffolding" },
      { icon: "users", label: "Community-first open-source build" },
    ],
    order: 1,
    enabled: true,
  },
  {
    id: "tern-cli",
    title: "Tern CLI — ship-ready scaffolding in minutes",
    description:
      "Command-line tooling focused on reducing setup friction and helping teams launch dependable product foundations.",
    content:
      "## Problem\nGetting started with modern architecture is still noisy and repetitive for most teams.\n\n## Solution\nTern CLI codifies setup best practices into a fast, guided workflow for generating high-quality project foundations.\n\n## Outcome\nTeams can move from blank repository to production-ready baseline significantly faster with fewer setup mistakes.",
    image: "/zeno.png",
    imageAlt: "Zeno SaaS Boilerplate",
    liveUrl: "https://tern.hookflo.com/",
    githubUrl: "https://github.com/Hookflo/tern",
    tags: ["CLI", "Automation", "Open Source", "Developer Tooling"],
    metrics: [
      { icon: "users", label: "Improved onboarding for builders" },
      { icon: "chart", label: "Reduced setup friction" },
    ],
    order: 2,
    enabled: true,
  },
  {
    id: "portfolio-design-system",
    title: "Design Engineering Portfolio System",
    description:
      "My personal design-engineered portfolio system focused on storytelling, speed, and open-source visibility.",
    content:
      "## Problem\nMost portfolio sites fail to communicate impact quickly and don't balance design craft with engineering depth.\n\n## Solution\nI rebuilt my portfolio with clearer narrative structure, stronger project hierarchy, and reusable sections for open-source proof points.\n\n## Outcome\nThe site now highlights impact work first, aligns with my design-engineer positioning, and stays easy to iterate as new projects ship.",
    image: "/root.png",
    imageAlt: "Root - Math Drill Engine",
    liveUrl: "https://prateekjn.me/",
    tags: ["Performance", "Accessibility", "Frontend"],
    metrics: [
      { icon: "users", label: "Improved usability baseline" },
      { icon: "chart", label: "Smoother perceived performance" },
    ],
    order: 3,
    enabled: true,
  },
];
