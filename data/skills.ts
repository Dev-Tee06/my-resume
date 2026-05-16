import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Next.js API Routes" },
      { name: "Nodemailer" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub" },
      { name: "Vercel" },
      { name: "VS Code" },
    ],
  },
  {
    category: "Strategy",
    skills: [
      { name: "SEO Optimization" },
      { name: "UX Strategy" },
      { name: "Performance Tuning" },
      { name: "Conversion Design" },
    ],
  },
];

export const highlightSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "APIs",
  "Databases",
];
