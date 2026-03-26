import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Dev-Tee06" },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/testimony-tosin-01206925b",
    },
    { icon: <FaInstagram />, link: "https://instagram.com/dev_tee06" },
  ];

  return (
    <footer
      className="relative mt-24 overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Gradient top border */}
      <div
        className="h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(139,92,246,0.3), rgba(6,182,212,0.3), transparent)",
        }}
      />

      {/* Floating Glow */}
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute left-1/2 -top-20 w-80 h-40 -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "rgba(99,102,241,0.12)" }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3
            className="text-2xl font-bold tracking-wide"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="gradient-text">DEV-TEE</span>
          </h3>
          <p className="text-sm text-gray-500 mt-2 max-w-sm leading-relaxed">
            Frontend Developer crafting modern, fast, and scalable digital
            experiences with a futuristic touch.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-white"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 8 + 6,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "rgba(129,140,248,0.25)" : "rgba(167,139,250,0.2)",
            }}
          />
        ))}
      </div>

      {/* Bottom Text */}
      <div
        className="py-5 text-center text-sm text-gray-600 relative z-10"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-400 font-medium">DEV-TEE</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
