import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About DEV-TEE: full-stack developer, strategic systems thinker, and product-focused engineering brand.",
};

export default function AboutPage() {
  return <AboutContent />;
}
