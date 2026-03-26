// Skills.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import css from "../../assets/css.png";
import framer from "../../assets/framer.jpeg";
import git from "../../assets/git.png";
import html from "../../assets/html.png";
import Js from "../../assets/Js.jpeg";
import react from "../../assets/react.png";
import tailwindcss from "../../assets/tailwindcss.png";
import Rest from "../../assets/Rest.png";
import Next from "../../assets/next.png";
import Firebase from "../../assets/firebase.png";

const skills = [
  { id: 1, image: html, title: "HTML5", level: 95, type: "Frontend" },
  { id: 2, image: css, title: "CSS3", level: 90, type: "Frontend" },
  { id: 3, image: Js, title: "JavaScript", level: 95, type: "Frontend" },
  { id: 4, image: react, title: "React", level: 90, type: "Frontend" },
  { id: 5, image: tailwindcss, title: "Tailwind CSS", level: 85, type: "Frontend" },
  { id: 6, image: framer, title: "Framer Motion", level: 75, type: "Tools" },
  { id: 7, image: git, title: "Git & GitHub", level: 85, type: "Tools" },
  { id: 8, image: Rest, title: "REST APIs", level: 80, type: "APIs" },
  { id: 9, image: Next, title: "Next.js", level: 80, type: "Frontend" },
  { id: 10, image: Firebase, title: "Firebase", level: 80, type: "Tools" },
];

function Skills() {
  const [filter, setFilter] = useState("All");

  const filteredSkills =
    filter === "All" ? skills : skills.filter((skill) => skill.type === filter);

  const types = ["All", "Frontend", "Tools", "APIs"];

  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Background glows */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18), rgba(139,92,246,0.08), transparent)" }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15), rgba(16,185,129,0.06), transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
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
            Expertise
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Tools & Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base">
            A modern frontend stack focused on performance, scalability, and
            delightful user experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {types.map((type, i) => (
            <motion.button
              key={i}
              onClick={() => setFilter(type)}
              className="px-5 py-2 rounded-full font-medium text-sm transition-all duration-300"
              style={{
                background:
                  filter === type
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)"
                    : "rgba(255,255,255,0.04)",
                color: filter === type ? "#fff" : "#9ca3af",
                border:
                  filter === type
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
                boxShadow:
                  filter === type
                    ? "0 4px 20px rgba(99,102,241,0.3)"
                    : "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass-card rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-400"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "var(--glass-glow)";
              }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04), rgba(6,182,212,0.04))",
                }}
              />

              {/* Icon container */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-10 h-10 object-contain"
                />
              </motion.div>

              {/* Title */}
              <h3
                className="relative z-10 text-base font-semibold text-gray-200 mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {skill.title}
              </h3>

              {/* Skill Bar */}
              <div
                className="relative z-10 w-full h-1.5 rounded-full overflow-hidden mb-2"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
                  }}
                />
              </div>

              {/* Proficiency */}
              <p className="relative z-10 text-xs text-gray-500">
                {skill.level}% proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
