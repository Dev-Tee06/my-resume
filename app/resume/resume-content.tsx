"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { skillCategories } from "@/data/skills";
import { experiences, education, certifications } from "@/data/experience";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function ResumeContent() {
  return (
    <main className="pt-28 md:pt-36">
      {/* Hero */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Resume</span>
            <h1 className="heading-display mb-4 max-w-3xl">
              Skills, experience, and credentials.
            </h1>
            <p className="text-body max-w-2xl">
              A snapshot of technical capabilities, professional experience, and
              the tools behind every build.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Skills</span>
            <h2 className="heading-xl mb-8">Technical proficiency</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <StaggerItem key={category.category}>
                <div className="card card-pad h-full">
                  <h3 className="heading-md mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="skill-tag">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Experience</span>
            <h2 className="heading-xl mb-8">Professional journey</h2>
          </FadeIn>

          <div className="relative pl-10 space-y-8">
            {/* Timeline line */}
            <div className="timeline-line" />

            {experiences.map((exp, index) => (
              <FadeIn key={exp.title} delay={index * 0.1}>
                <div className="relative">
                  <div className="timeline-dot" />
                  <div className="card card-pad-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="icon-box !w-10 !h-10 !rounded-lg flex-shrink-0 mt-0.5">
                        <Briefcase size={18} />
                      </span>
                      <div>
                        <h3 className="heading-md">{exp.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                          {exp.company} · {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-body-sm mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-body-sm"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--color-accent-blue)] mt-2.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Education */}
            <div>
              <FadeIn>
                <span className="eyebrow">Education</span>
                <h2 className="heading-xl mb-6">Academic background</h2>
              </FadeIn>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <FadeIn key={edu.degree} delay={index * 0.1}>
                    <div className="card card-pad">
                      <div className="flex items-start gap-3">
                        <span className="icon-box !w-10 !h-10 !rounded-lg flex-shrink-0 mt-0.5">
                          <GraduationCap size={18} />
                        </span>
                        <div>
                          <h3 className="heading-md !text-base">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                            {edu.institution} · {edu.period}
                          </p>
                          {edu.description && (
                            <p className="text-body-sm mt-2">
                              {edu.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <FadeIn>
                <span className="eyebrow">Certifications</span>
                <h2 className="heading-xl mb-6">Professional credentials</h2>
              </FadeIn>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <FadeIn key={cert.title} delay={index * 0.1}>
                    <div className="card card-pad">
                      <div className="flex items-start gap-3">
                        <span className="icon-box !w-10 !h-10 !rounded-lg flex-shrink-0 mt-0.5">
                          <Award size={18} />
                        </span>
                        <div>
                          <h3 className="heading-md !text-base">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                            {cert.issuer} · {cert.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
