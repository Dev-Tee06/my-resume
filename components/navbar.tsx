"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types";

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < 80 || currentY < lastY);
      setScrolled(currentY > 20);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`nav ${!visible && !menuOpen ? "nav-hidden" : ""}`}
        style={{
          borderBottomColor: scrolled
            ? "rgba(255,255,255,0.08)"
            : "transparent",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container nav-inner">
          <Link className="logo gradient-text" href="/" aria-label="DEV-TEE Home">
            DEV-TEE
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link className="btn btn-primary text-sm" href="/contact">
              Start Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="btn btn-ghost md:hidden"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-panel"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="logo gradient-text">DEV-TEE</span>
              <button
                className="btn btn-ghost"
                onClick={() => setMenuOpen(false)}
                type="button"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>
            {[...links, { href: "/contact", label: "Contact" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  pathname === link.href
                    ? "!border-[rgba(99,102,241,0.3)] !bg-[rgba(99,102,241,0.08)]"
                    : ""
                }
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
