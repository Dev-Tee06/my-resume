"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <FadeIn>
          <span className="eyebrow">Expertise</span>
          <h2 className="heading-xl mb-4 max-w-3xl">
            Technical proficiency and strategic skills.
          </h2>
          <p className="text-body max-w-2xl mb-10">
            A balanced stack chosen for speed, reliability, and delivering business value.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.category}>
              <div className={`card h-full flex flex-col group ${
                category.category === "Frontend" ? "p-6" : "p-6 pb-4 justify-center"
              }`}>
                <h3 className="heading-md !text-lg mb-3 group-hover:text-[var(--color-accent-blue)] transition-colors duration-300">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2 text-body-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[rgba(99,102,241,0.4)] group-hover:bg-[var(--color-accent-blue)] transition-colors duration-300 flex-shrink-0" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
