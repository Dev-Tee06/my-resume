import { TrendingUp, Layers, Zap, Compass, SearchCheck, Users } from "lucide-react";
import type { PhilosophyItem, FrameworkStep, FAQ } from "@/types";

export const philosophy: PhilosophyItem[] = [
  {
    icon: TrendingUp,
    title: "Strategy drives technology",
    text: "Every build starts with the business problem, audience, and outcome.",
  },
  {
    icon: Layers,
    title: "Systems create leverage",
    text: "Frontend, backend, infrastructure, and growth layers work together.",
  },
  {
    icon: Zap,
    title: "Iteration creates value",
    text: "Launch quickly, measure performance, and improve what matters.",
  },
];

export const framework: FrameworkStep[] = [
  {
    title: "Problem Discovery",
    points: ["User pain points", "Market research", "Analytics review"],
  },
  {
    title: "Define Outcomes",
    points: ["Conversion improvements", "SEO growth", "Performance optimization"],
  },
  {
    title: "Systems Thinking",
    points: ["Frontend", "Backend", "Infrastructure", "Business layer"],
  },
  {
    title: "Iterative Development",
    points: ["Build", "Test", "Measure", "Improve"],
  },
];

export const corePrinciples: PhilosophyItem[] = [
  {
    icon: Zap,
    title: "Simplicity Wins",
    text: "The strongest solution is usually the clearest path users can trust and teams can maintain.",
  },
  {
    icon: Users,
    title: "User-Centered Development",
    text: "Interfaces are shaped around the people using them, not the tools used to build them.",
  },
  {
    icon: TrendingUp,
    title: "Fast Iteration",
    text: "Ship the useful version, measure the result, and improve the highest-impact constraint.",
  },
  {
    icon: Compass,
    title: "Strategic Engineering",
    text: "Technical decisions are tied to positioning, conversion, performance, and growth goals.",
  },
  {
    icon: SearchCheck,
    title: "Data-Driven Decisions",
    text: "Analytics, SEO signals, speed metrics, and user behavior guide the next improvement.",
  },
];

export const strategicAudit = [
  "SEO issues",
  "Mobile speed",
  "User friction",
  "Conversion bottlenecks",
  "Trust indicators",
  "Brand positioning",
];

export const faqs: FAQ[] = [
  {
    question: "What does DEV-TEE build?",
    answer:
      "DEV-TEE builds strategic websites, e-commerce systems, SEO foundations, automation systems, and full-stack digital products.",
  },
  {
    question: "Who is DEV-TEE for?",
    answer:
      "DEV-TEE works best for founders, service brands, and businesses that need a premium digital system designed around measurable growth.",
  },
  {
    question: "What makes DEV-TEE different?",
    answer:
      "DEV-TEE combines engineering, UX thinking, brand strategy, conversion optimization, and systems architecture into one cohesive process.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope. A focused landing page takes 1–2 weeks. A full digital system with automation takes 4–8 weeks.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a handoff with documentation. Ongoing optimization and support plans are available for continued growth.",
  },
];
