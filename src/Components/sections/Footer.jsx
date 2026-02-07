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
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      {/* Floating Glow Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute left-1/2 -top-20 w-80 h-40 -translate-x-1/2 bg-cyan-400/20 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute right-10 bottom-10 w-60 h-32 bg-blue-500/20 blur-[100px] rounded-full"
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Description */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              DEV-TEE
            </span>
          </h3>
          <p className="text-sm text-gray-400 mt-2 max-w-sm">
            Frontend Developer crafting modern, fast, and scalable digital
            experiences with a futuristic touch.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Animated Particle Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 8 + 6,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Bottom Text */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">DEV-TEE</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
