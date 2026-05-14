"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { experiences } from "@/data/experience";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <FadeIn>
          <span className="eyebrow">Experience</span>
          <h2 className="heading-xl mb-8">Professional journey</h2>
        </FadeIn>

        <div className="relative pl-10 space-y-8 max-w-4xl">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <FadeIn key={exp.title} delay={index * 0.1}>
              <div className="relative">
                <div className="timeline-dot" />
                <div className="card card-pad-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <span className="icon-box !w-10 !h-10 !rounded-lg flex-shrink-0 mt-0.5">
                        <Briefcase size={18} />
                      </span>
                      <div>
                        <h3 className="heading-md">{exp.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)] mt-0.5 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center rounded-full bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-zinc-700/50 self-start sm:self-auto">
                      {exp.period}
                    </span>
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
  );
}
