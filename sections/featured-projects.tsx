"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { featuredProjects } from "@/data/projects";
import type { Project } from "@/types";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section" id="featured-projects">
      <div className="container">
        <FadeIn>
          <span className="eyebrow">Featured Projects</span>
          <h2 className="heading-xl mb-4 max-w-3xl">
            Case studies framed by problem, strategy, and result.
          </h2>
          <p className="text-body max-w-2xl mb-10">
            Each project is presented as a strategic system — not just a
            screenshot.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-8 text-center">
          <Link className="btn btn-outline" href="/projects">
            View All Projects <ArrowRight size={16} />
          </Link>
        </FadeIn>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
