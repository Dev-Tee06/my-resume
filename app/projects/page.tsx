import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "DEV-TEE case-study portfolio with problem, strategy, solution, results, and live demo previews.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
