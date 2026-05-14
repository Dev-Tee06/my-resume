"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/types";
import { useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [showDemo, setShowDemo] = useState(false);

  if (showDemo && project) {
    return (
      <motion.div
        className="demo-viewer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="demo-bar">
          <div>
            <strong className="text-sm text-white">{project.title}</strong>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
              Live demo viewer
            </p>
          </div>
          <button
            className="btn btn-ghost text-sm"
            type="button"
            onClick={() => setShowDemo(false)}
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>
        <iframe
          className="demo-frame"
          src={project.live}
          title={`${project.title} live demo`}
        />
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            className="btn btn-ghost fixed right-4 top-4 z-20"
            type="button"
            onClick={onClose}
            aria-label="Close case study"
          >
            <X size={18} />
          </button>

          <motion.div
            className="card modal"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={450}
              className="project-image !h-[260px]"
            />
            <div className="p-7">
              <button
                className="btn btn-ghost text-sm mb-4"
                type="button"
                onClick={onClose}
              >
                <ArrowLeft size={16} /> Back to projects
              </button>

              <h2 className="heading-lg mt-2">{project.title}</h2>

              <div className="flex flex-wrap gap-2 mt-4 mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {(["problem", "strategy", "solution", "result"] as const).map(
                  (key) => (
                    <div className="card card-pad" key={key}>
                      <span className="eyebrow mb-2">{key}</span>
                      <p className="text-body-sm">{project[key]}</p>
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  className="btn btn-primary text-sm"
                  type="button"
                  onClick={() => setShowDemo(true)}
                >
                  <ExternalLink size={16} /> Live Preview
                </button>
                <a
                  className="btn btn-outline text-sm"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in New Tab
                </a>
                <a
                  className="btn btn-ghost text-sm"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
