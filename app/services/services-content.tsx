"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { services, servicesBenefits, processSteps } from "@/data/services";
import { faqs } from "@/data/content";
import { CTASection } from "@/sections/cta-section";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export function ServicesContent() {
  return (
    <main className="pt-28 md:pt-36">
      {/* Hero */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Services</span>
            <h1 className="heading-display mb-4 max-w-3xl">
              Digital systems built around growth.
            </h1>
            <p className="text-body max-w-2xl">
              DEV-TEE turns strategy, UX, engineering, SEO, and automation into
              one premium operating system for your brand.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
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

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <FadeIn>
              <span className="eyebrow">Why DEV-TEE</span>
              <h2 className="heading-xl mb-4">
                Every project includes these foundations.
              </h2>
              <p className="text-body">
                These aren&apos;t add-ons — they&apos;re built into every engagement by
                default.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <ul className="space-y-4">
                {servicesBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-[var(--color-text-secondary)]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(99,102,241,0.1)] text-[var(--color-accent-blue)] flex-shrink-0">
                      <CheckCircle size={14} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Process</span>
            <h2 className="heading-xl mb-4 max-w-3xl">
              From discovery to launch — a clear, repeatable process.
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="card card-pad h-full">
                  <strong className="text-[var(--color-accent-blue)] text-2xl font-bold">
                    {step.step}
                  </strong>
                  <h3 className="heading-md mt-3 mb-2">{step.title}</h3>
                  <p className="text-body-sm">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-3xl">
          <FadeIn>
            <span className="eyebrow">FAQ</span>
            <h2 className="heading-xl mb-8">
              Common questions, clear answers.
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to start your project?"
        description="Share your goals and let's build a system that drives real results."
        buttonText="Contact DEV-TEE"
      />
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn>
      <div className="card overflow-hidden">
        <button
          type="button"
          className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <h3 className="heading-md !text-base font-semibold pr-4">{question}</h3>
          <ChevronDown
            size={18}
            className={`text-[var(--color-text-muted)] flex-shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-40 pb-5 px-5" : "max-h-0"
          }`}
        >
          <p className="text-body-sm">{answer}</p>
        </div>
      </div>
    </FadeIn>
  );
}
