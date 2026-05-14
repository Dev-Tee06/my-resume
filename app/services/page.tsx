import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, e-commerce, portfolio sites, SEO optimization, UI/UX improvements, and performance optimization by DEV-TEE.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
