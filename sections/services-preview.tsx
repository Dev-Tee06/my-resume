"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="section" id="services-preview">
      <div className="container">
        <FadeIn>
          <span className="eyebrow">Services</span>
          <h2 className="heading-xl mb-4 max-w-3xl">
            Focused services for digital systems that need to perform.
          </h2>
          <p className="text-body max-w-2xl mb-10">
            From full-stack development to SEO and automation — every service is
            designed to solve a specific business constraint.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <article className="card card-pad h-full">
                  <span className="icon-box">
                    <Icon size={20} />
                  </span>
                  <h3 className="heading-md mt-5 mb-2">{service.title}</h3>
                  <p className="text-body-sm">{service.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
