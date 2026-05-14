"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

interface CTASectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  heading = "Let's build something strategic.",
  description = "Turn your digital presence into a measurable business system.",
  buttonText = "Start a Project",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="section" id="cta">
      <div className="container">
        <FadeIn>
          <div className="card card-pad-lg text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,102,241,0.06)] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="heading-xl mb-4">{heading}</h2>
              <p className="text-body max-w-xl mx-auto mb-8">{description}</p>
              <Link className="btn btn-primary" href={buttonHref}>
                {buttonText} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
