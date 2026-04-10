import type { SkillItem } from "@/config/types";

export const skillsSectionConfig = {
  title: "Design Engineering Stack",
};

export const skillsConfig: SkillItem[] = [
  { id: "nextjs", name: "Next.js", icon: "nextjs", order: 1, enabled: true },
  { id: "react", name: "React", icon: "react", order: 2, enabled: true },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    order: 3,
    enabled: true,
  },
  {
    id: "ai-sdk",
    name: "AI SDK integrations",
    icon: "ai-sdk",
    order: 4,
    enabled: true,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "tailwind",
    order: 5,
    enabled: true,
  },
  { id: "shadcn", name: "shadcn/ui", icon: "shadcn", order: 6, enabled: true },
  {
    id: "better-auth",
    name: "Design systems",
    icon: "better-auth",
    order: 7,
    enabled: true,
  },
  { id: "prisma", name: "Prisma", icon: "prisma", order: 8, enabled: false },
  { id: "trpc", name: "tRPC", icon: "trpc", order: 9, enabled: false },
  { id: "chat-gpt", name: "Claude", icon: "claude", order: 10, enabled: true },
  { id: "tanstack", name: "TanStack", icon: "tanstack", order: 11, enabled: true },
  { id: "cursor", name: "Cursor", icon: "cursor", order: 12, enabled: true },
];
