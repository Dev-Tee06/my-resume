"use client";

import { useState, useMemo } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilter } from "@/components/project-filter";
import { ProjectModal } from "@/components/project-modal";
import { projects, projectCategories } from "@/data/projects";
import type { Project } from "@/types";

export function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="pt-28 md:pt-36">
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Projects</span>
            <h1 className="heading-display mb-4 max-w-3xl">
              Case studies with business context.
            </h1>
            <p className="text-body max-w-2xl mb-10">
              Each project is presented as a strategic system: problem, strategy,
              solution, result, and live demo preview.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ProjectFilter
              categories={projectCategories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            key={activeCategory}
          >
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard
                  project={project}
                  onSelect={setSelectedProject}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-body">No projects found in this category.</p>
            </div>
          )}

          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      </section>
    </main>
  );
}
