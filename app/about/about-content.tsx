"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { philosophy, framework, corePrinciples, strategicAudit } from "@/data/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutContent() {
  return (
    <main className="pt-28 md:pt-36">
      {/* Hero */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">About DEV-TEE</span>
            <h1 className="heading-display mb-6 max-w-4xl">
              Full-stack development shaped by{" "}
              <span className="gradient-text">
                strategy, systems, and measurable growth.
              </span>
            </h1>
            <p className="text-body max-w-2xl">
              DEV-TEE combines technical engineering with branding strategy, UX
              thinking, and a product-focused mindset to create digital systems
              that solve real business problems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction cards */}
      <section className="section">
        <div className="container">
          <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <StaggerItem>
              <article className="card card-pad-lg h-full">
                <span className="eyebrow">Personal introduction</span>
                <h2 className="heading-lg mb-3">
                  A strategic systems thinker, not just a website builder.
                </h2>
                <p className="text-body">
                  The work starts with the offer, audience, user journey, and
                  business outcome. Code comes after the problem is clear.
                </p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="card card-pad-lg h-full">
                <span className="eyebrow">Development mindset</span>
                <h2 className="heading-lg mb-3">
                  Engineering should create business value.
                </h2>
                <p className="text-body">
                  Strategy comes before tools. Simplicity and scalability matter
                  because the best systems are easy to use, improve, and measure.
                </p>
              </article>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Strategic philosophy</span>
            <h2 className="heading-xl mb-4 max-w-3xl">
              Solve business problems, not just technical problems.
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-8">
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

      {/* Framework */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Problem-solving framework</span>
            <h2 className="heading-xl mb-4 max-w-3xl">
              A premium process from discovery to improvement.
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {framework.map((step, index) => (
              <StaggerItem key={step.title}>
                <article className="card card-pad h-full">
                  <strong className="text-[var(--color-accent-blue)] text-lg font-bold">
                    0{index + 1}
                  </strong>
                  <h3 className="heading-md mt-3 mb-3">{step.title}</h3>
                  <ul className="text-body-sm space-y-1 list-none">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-accent-blue)] flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Core principles</span>
            <h2 className="heading-xl mb-4 max-w-3xl">
              The operating rules behind the work.
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-8">
            {corePrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <StaggerItem key={principle.title}>
                  <article className="card card-pad h-full">
                    <span className="icon-box">
                      <Icon size={20} />
                    </span>
                    <h3 className="heading-md mt-5 mb-2">{principle.title}</h3>
                    <p className="text-body-sm">{principle.text}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Strategic Audit */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="card card-pad-lg">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <span className="eyebrow">Strategic thinking</span>
                  <h2 className="heading-xl mb-3">
                    Instead of only rebuilding a website, DEV-TEE diagnoses the
                    system.
                  </h2>
                  <p className="text-body">
                    A redesign is not automatically the answer. The real
                    constraint may be visibility, speed, trust, positioning, or
                    conversion flow.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {strategicAudit.map((item) => (
                    <div className="card card-pad text-center" key={item}>
                      <strong className="text-sm">{item}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="card card-pad-lg text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,102,241,0.06)] to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h2 className="heading-xl mb-4">
                  Ready to work with a strategic developer?
                </h2>
                <p className="text-body max-w-xl mx-auto mb-8">
                  Let&apos;s discuss your project and find the clearest path to
                  measurable results.
                </p>
                <Link className="btn btn-primary" href="/contact">
                  Start a Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
