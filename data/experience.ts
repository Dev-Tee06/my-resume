import type { Experience, Education, Certification } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Full-Stack Developer & Digital Strategist",
    company: "DEV-TEE (Freelance)",
    period: "2023 — Present",
    description:
      "Building premium digital systems for businesses — combining full-stack engineering with UX strategy, SEO optimization, and brand positioning.",
    highlights: [
      "Delivered 10+ production websites across e-commerce, agency, and SaaS verticals",
      "Implemented automated inquiry systems with Nodemailer reducing response time by 80%",
      "Achieved 95+ Lighthouse scores consistently across all client projects",
      "Built scalable component architectures with React, Next.js, and TypeScript",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Self-Directed Projects",
    period: "2022 — 2023",
    description:
      "Developed a portfolio of production-quality projects to sharpen frontend skills and explore modern frameworks.",
    highlights: [
      "Built responsive e-commerce, delivery, and content platforms",
      "Mastered React ecosystem including state management, routing, and API integration",
      "Adopted Tailwind CSS and utility-first architecture for rapid UI development",
      "Deployed all projects to Vercel with CI/CD pipelines",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Lagos",
    period: "2020 — 2024",
    description:
      "Core coursework in algorithms, data structures, software engineering, and database systems.",
  },
];

export const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle",
    year: "2024",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
  },
];
