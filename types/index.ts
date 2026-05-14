import type { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  image: string;
  github: string;
  live: string;
  category: string;
  problem: string;
  strategy: string;
  solution: string;
  result: string;
  stack: string[];
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface PhilosophyItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface FrameworkStep {
  title: string;
  points: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  href: string;
  label: string;
}
