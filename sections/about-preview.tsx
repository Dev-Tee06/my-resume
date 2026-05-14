"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { philosophy } from "@/data/content";

export function AboutPreview() {
  return (
    <section className="section" id="about-preview">
      <div className="container">
        <FadeIn>
          <span className="eyebrow">About DEV-TEE</span>
          <h2 className="heading-xl mb-4 max-w-3xl">
            A strategic systems thinker, not just a website builder.
          </h2>
          <p className="text-body max-w-2xl mb-10">
            DEV-TEE combines full-stack engineering with product thinking, UX
            strategy, and brand positioning to build digital systems that solve
            real business problems.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {philosophy.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <article className="card card-pad h-full">
                  <span className="icon-box">
                    <Icon size={20} />
                  </span>
                  <h3 className="heading-md mt-5 mb-2">{item.title}</h3>
                  <p className="text-body-sm">{item.text}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
