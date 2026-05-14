import { HeroSection } from "@/sections/hero";
import { SkillsSection } from "@/sections/skills-section";
import { AboutPreview } from "@/sections/about-preview";
import { FeaturedProjects } from "@/sections/featured-projects";
import { ContactSection } from "@/sections/contact-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <AboutPreview />
      <FeaturedProjects />
      <ContactSection />
    </main>
  );
}
