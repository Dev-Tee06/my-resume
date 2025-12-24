import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Glow */}
      <div className="absolute left-1/2 -top-20 w-80 h-40 -translate-x-1/2 bg-cyan-400/20 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              DEV-TEE
            </span>
          </h3>
          <p className="text-sm text-gray-400 mt-2 max-w-sm">
            Frontend Developer crafting modern, fast, and scalable digital
            experiences.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/Dev-Tee06",
            },
            {
              icon: <FaLinkedin />,
              link: "https://linkedin.com/in/testimony-tosin-01206925b",
            },
            {
              icon: <FaInstagram />,
              link: "https://instagram.com/dev_tee06",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">DEV-TEE</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
