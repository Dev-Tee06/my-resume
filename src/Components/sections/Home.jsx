// Home.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import tess from "../../assets/tess.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  const skills = [
    "Frontend Developer",
    "React Enthusiast",
    "UI/UX Lover",
    "Tech Creator",
    "Problem Solver",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25), rgba(139,92,246,0.15), transparent)" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.2), rgba(16,185,129,0.1), transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent)" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: ["-20px", "20px"], x: ["-10px", "10px"] }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "rgba(129,140,248,0.4)" : i % 3 === 1 ? "rgba(167,139,250,0.3)" : "rgba(34,211,238,0.3)",
            }}
          />
        ))}
      </div>

      {/* Main Content — Split Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side — Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#818cf8",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </motion.div>

          {/* Animated Role Title */}
          <motion.h1
            key={currentSkill}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 gradient-text animate-gradient"
            style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}
          >
            {skills[currentSkill]}
          </motion.h1>

          {/* Name */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e2e8f0" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text-accent">Testimony</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I build high-performance, visually engaging digital experiences using{" "}
            <span className="text-indigo-400 font-medium">React</span>,{" "}
            <span className="text-violet-400 font-medium">Tailwind CSS</span>, and{" "}
            <span className="text-cyan-400 font-medium">Framer Motion</span>.
            Clean code. Seamless UX. Polished UI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <a
              href="/projects"
              className="px-8 py-3 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_35px_rgba(99,102,241,0.4)]"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }}
            >
              View Projects
            </a>

            <a
              href="https://wa.link/yzi073"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]"
              style={{
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#818cf8",
                background: "rgba(99,102,241,0.05)",
              }}
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/Dev-Tee06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-lg text-gray-400 transition-all duration-300 hover:text-white hover:-translate-y-[2px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/testimony-tosin-01206925b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-lg text-gray-400 transition-all duration-300 hover:text-white hover:-translate-y-[2px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Right Side — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            {/* Glow ring */}
            <div
              className="absolute -inset-3 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-xl"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }}
            />

            {/* Avatar container */}
            <div
              className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden"
              style={{
                border: "3px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 50px rgba(99,102,241,0.2), inset 0 0 50px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={tess}
                alt="Testimony"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                draggable="false"
              />
            </div>

            {/* Floating skill badges around avatar */}
            {skills.slice(0, 3).map((skill, i) => (
              <motion.span
                key={i}
                className="absolute hidden lg:block px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(5,5,16,0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "#c7d2fe",
                  top: i === 0 ? "0%" : i === 1 ? "40%" : "80%",
                  right: i === 1 ? "-40%" : "auto",
                  left: i === 0 ? "-20%" : i === 2 ? "-25%" : "auto",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
