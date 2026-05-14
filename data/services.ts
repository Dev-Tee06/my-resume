import {
  Code,
  ShoppingCart,
  Search,
  Megaphone,
  MailOpen,
  Layout,
  Gauge,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    icon: Code,
    title: "Business Websites",
    description:
      "Fast, responsive, conversion-ready digital platforms built to communicate your brand and drive results.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description:
      "Product flows built for clarity, speed, and sales with seamless checkout experiences.",
  },
  {
    icon: Layout,
    title: "Portfolio Websites",
    description:
      "Premium portfolio experiences that showcase your work with polish and strategic positioning.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Search-ready structure, metadata, performance foundations, and content strategy for visibility.",
  },
  {
    icon: Megaphone,
    title: "UI/UX Improvements",
    description:
      "Interface refinements that improve usability, trust signals, and conversion performance.",
  },
  {
    icon: MailOpen,
    title: "Website Redesign",
    description:
      "Strategic redesigns that solve the real constraint — whether it's speed, trust, or positioning.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Speed improvements, code optimization, and infrastructure tuning for better user experience.",
  },
];

export const servicesBenefits = [
  "Mobile-first responsive design",
  "SEO-optimized from day one",
  "Fast loading speeds",
  "Conversion-focused layouts",
  "Clean, maintainable code",
  "Ongoing support available",
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand the business problem, audience, goals, and constraints.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Define the technical approach, user journey, and success metrics.",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the solution with iterative feedback and quality checkpoints.",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "Deploy, measure performance, and refine based on real data.",
  },
];
