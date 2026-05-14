import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/Dev-Tee06", label: "GitHub", icon: Github },
  { href: "mailto:dev.tee01@gmail.com", label: "Email", icon: Mail },
  { href: "https://www.linkedin.com/in/testimony-tosin-01206925b", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="logo gradient-text mb-3">DEV-TEE</p>
            <p className="text-body-sm max-w-xs">
              Strategic digital engineering studio building premium websites,
              automation systems, and growth-focused digital products.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition-all duration-200 hover:border-[rgba(99,102,241,0.3)] hover:text-white hover:bg-[var(--color-surface-hover)]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} DEV-TEE. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
