"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <FadeIn direction="up" duration={0.8}>
              <span className="eyebrow mb-6">Full-Stack Developer & Digital Strategist</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.15} duration={0.8}>
              <h1 className="heading-display mb-6">
                DEV-TEE builds{" "}
                <span className="gradient-text">digital systems</span> for
                measurable growth.
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8}>
              <p className="text-body max-w-2xl mb-10">
                Premium full-stack development, UX strategy, SEO, automation, and
                brand positioning — for businesses that need more than a website.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.45} duration={0.8}>
              <div className="flex flex-wrap gap-4">
                <Link className="btn btn-primary" href="/projects">
                  View Projects <ArrowRight size={16} />
                </Link>
                <a
                  href="https://www.linkedin.com/in/testimony-tosin-01206925b"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] hover:border-[rgba(99,102,241,0.3)] px-6 py-[11px] text-white transition-all duration-300 font-semibold text-sm"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <FadeIn direction="left" delay={0.2} duration={0.8}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <Image
                  src="/assets/tess.jpg"
                  alt="DEV-TEE Profile"
                  width={420}
                  height={420}
                  className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl object-cover shadow-2xl border border-zinc-800 transition-transform duration-500 group-hover:-translate-y-2"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
