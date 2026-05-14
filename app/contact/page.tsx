import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DEV-TEE for premium web development, automation, SEO, UX, and strategic digital systems.",
};

export default function ContactPage() {
  return <ContactContent />;
}
