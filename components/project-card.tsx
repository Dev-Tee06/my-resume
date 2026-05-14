"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      className="card overflow-hidden cursor-pointer group"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={720}
          height={420}
          className="project-image transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <span className="eyebrow">{project.category}</span>
        <h3 className="heading-md mb-2">{project.title}</h3>
        <p className="text-body-sm">{project.problem}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech) => (
            <span key={tech} className="skill-tag !py-1 !px-3 !text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
