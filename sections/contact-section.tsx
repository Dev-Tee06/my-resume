"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, MessageSquare, Clock, Shield, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left column */}
          <div>
            <FadeIn>
              <span className="eyebrow">Contact</span>
              <h2 className="heading-display !text-4xl md:!text-5xl lg:!text-6xl mb-4">
                Start with the business problem.
              </h2>
              <p className="text-body mb-8">
                Share the goal, service needed, and current challenge. The
                automation system sends a confirmation and notifies DEV-TEE
                instantly.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <a
                  className="card card-pad group"
                  href="mailto:dev.tee01@gmail.com"
                >
                  <span className="icon-box">
                    <Mail size={20} />
                  </span>
                  <h3 className="heading-md !text-base mt-4 mb-1">Email</h3>
                  <p className="text-body-sm !text-xs break-all">dev.tee01@gmail.com</p>
                </a>
                <a
                  className="card card-pad group"
                  href="https://wa.link/yzi073"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-box">
                    <MessageSquare size={20} />
                  </span>
                  <h3 className="heading-md !text-base mt-4 mb-1">
                    WhatsApp
                  </h3>
                </a>
                <a
                  className="card card-pad group"
                  href="https://www.linkedin.com/in/testimony-tosin-01206925b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-box !bg-blue-600/10 !text-blue-500 !border-blue-500/20">
                    <Linkedin size={20} />
                  </span>
                  <h3 className="heading-md !text-base mt-4 mb-1">
                    LinkedIn
                  </h3>
                  <p className="text-body-sm !text-xs truncate">Testimony Tosin</p>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 space-y-4">
                <h3 className="heading-md !text-base mb-4">
                  What to expect
                </h3>
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(99,102,241,0.08)] text-[var(--color-accent-blue)] flex-shrink-0 mt-0.5">
                    <Clock size={16} />
                  </span>
                  <div>
                    <strong className="text-sm">24-hour response time</strong>
                    <p className="text-body-sm !text-xs mt-0.5">
                      Every inquiry gets a thoughtful response within one
                      business day.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(99,102,241,0.08)] text-[var(--color-accent-blue)] flex-shrink-0 mt-0.5">
                    <Shield size={16} />
                  </span>
                  <div>
                    <strong className="text-sm">
                      Your data stays private
                    </strong>
                    <p className="text-body-sm !text-xs mt-0.5">
                      Information is only used to understand your project and
                      respond appropriately.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column — Form */}
          <FadeIn delay={0.2} direction="right">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
