// Home.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import tess from "../../assets/tess.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Home = () => {
  const skills = [
    "Frontend Developer",
    "React Enthusiast",
    "UI/UX Lover",
    "Tech Creator",
    "Problem Solver",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  // Rotate skills every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-black text-gray-100"
    >
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/30 to-cyan-400/30 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/30 to-blue-500/20 rounded-full blur-[120px]"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: ["-20px", "20px"], x: ["-15px", "15px"] }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Animated Role */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-8xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-pulse drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
        >
          {skills[currentSkill]}
        </motion.h1>

        {/* Intro */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Testimony
          </span>
        </motion.h2>

        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative mx-auto w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full group mb-6"
        >
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/60 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition duration-500" />
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={tess}
              alt="Testimony"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              draggable="false"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          I’m a creative frontend developer building high-performance, visually
          engaging digital experiences using modern web technologies like{" "}
          <span className="text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-cyan-400 font-semibold">Tailwind CSS</span>, and{" "}
          <span className="text-blue-500 font-semibold">Framer Motion</span>. I
          focus on clean, scalable code, seamless UX, and polished UI.
        </motion.p>

        {/* Floating Skill Badges */}
        <motion.div className="flex justify-center flex-wrap gap-3 mb-8">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-6 mb-10 text-2xl"
        >
          <a
            href="https://github.com/Dev-Tee06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/testimony-tosin-01206925b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center gap-5 flex-wrap mb-16"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold tracking-wide transition hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:-translate-y-1"
          >
            View Projects
          </a>

          <a
            href="https://wa.link/yzi073"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500/40 text-blue-400 px-8 py-3 rounded-full font-semibold tracking-wide transition hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};
