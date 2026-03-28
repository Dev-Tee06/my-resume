// About.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const About = () => {
  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "CSS", level: 90 },
    { name: "Firebase", level: 80 },
    { name: "REST APIs", level: 80 },
    { name: "Framer Motion", level: 70 },
    { name: "Git & GitHub", level: 85 },
  ];

  const experiences = [
    {
      role: "Frontend Developer — Sabi Programmers",
      year: "2023–2024",
      details: "Built responsive, user-friendly web applications.",
    },
    {
      role: "Frontend Intern — Sabi Programmers",
      year: "2023",
      details: "Assisted in building reusable UI components.",
    },
    {
      role: "Frontend Developer — TasteNest",
      year: "2024",
      details:
        "Developed a responsive food-ordering platform with strong mobile optimization.",
    },
    {
      role: "Frontend Developer — TEXIFY",
      year: "2025",
      details:
        "Delivered modern, high-performance websites for multiple clients.",
    },
    {
      role: "Frontend Developer — Xpress",
      year: "2025–Present",
      details:
        "Created a delivery platform with real-time tracking and rider management.",
    },
    {
      role: "Frontend Developer - Farm-IQ",
      year: "2025",
      details:
        "Built and optimized responsive, user-friendly interfaces for Farm-IQ, translating product requirements into clean, high-performance frontend solutions.",
    },
  ];

  const strengths = [
    "Clear communication",
    "Team collaboration",
    "Problem solving",
    "Attention to detail",
    "Time management",
    "Adaptability",
    "Creativity & Innovation",
    "Critical thinking",
  ];

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Background gradient orbs */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, -10, 0], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.2), rgba(139,92,246,0.1), transparent)",
        }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -10, 10, 0], rotate: [0, -360, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15), rgba(16,185,129,0.08), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#818cf8",
            }}
          >
            About Me
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Crafting Clean & Scalable{" "}
            <span className="gradient-text">Frontend Experiences</span>
          </h2>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-10 mb-14"
        >
          <p className="text-gray-300 leading-relaxed mb-10 text-lg">
            I'm a frontend developer passionate about building elegant,
            responsive, and performance-driven interfaces that turn ideas into
            impactful digital products. I enjoy collaborating in teams, solving
            complex problems, and continuously learning new technologies.
          </p>

          {/* Technical Stack */}
          <h3
            className="text-xl font-semibold mb-6 text-gray-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Stack
          </h3>
          <div className="space-y-4 mb-12">
            {frontendSkills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-gray-300 text-sm font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div
                  className="w-full h-2 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: i * 0.05 }}
                    className="h-2 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Professional Strengths */}
          <h3
            className="text-xl font-semibold mb-5 text-gray-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Professional Strengths
          </h3>
          <div className="flex flex-wrap gap-3">
            {strengths.map((s, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-[1px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                ✦ {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-3xl p-8 md:p-10 mb-14"
        >
          <h3
            className="text-xl font-semibold mb-10 text-gray-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Work Experience
          </h3>

          {/* Animated vertical gradient line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-10 top-[88px] w-[2px] origin-top rounded-full"
            layoutId="timeline-line"
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #6366f1, #8b5cf6, #06b6d4, #10b981)",
              }}
            />
          </motion.div>

          <div className="space-y-10 pl-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-[42px] top-1.5 w-3.5 h-3.5 rounded-full border-2 group-hover:scale-125 transition-transform"
                  style={{
                    background: "var(--bg-deep)",
                    borderColor: "#818cf8",
                    boxShadow: "0 0 12px rgba(129,140,248,0.5)",
                  }}
                />

                <h4
                  className="font-semibold text-gray-200 group-hover:text-indigo-300 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {exp.role}{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    ({exp.year})
                  </span>
                </h4>
                <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                  {exp.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: <FaGithub />, href: "https://github.com/Dev-Tee06" },
            {
              icon: <FaLinkedin />,
              href: "https://linkedin.com/in/testimony-tosin-01206925b",
            },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-lg text-gray-400 transition-all duration-300 hover:text-white hover:-translate-y-[2px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
