import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Dev-Tee06", label: "GitHub" },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/testimony-tosin-01206925b",
      label: "LinkedIn",
    },
    { icon: <FaInstagram />, link: "https://instagram.com/dev_tee06", label: "Instagram" },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-normal">
            <span className="gradient-text">DEV-TEE</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-sm leading-relaxed">
            Digital growth and brand strategy through high-performance websites,
            clearer positioning, and conversion-focused systems.
          </p>
        </div>

        <div className="flex gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.link}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-white border border-white/8 bg-white/[0.04]"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="py-5 text-center text-sm text-gray-600 relative z-10 border-t border-white/[0.04]">
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-400 font-medium">DEV-TEE</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
