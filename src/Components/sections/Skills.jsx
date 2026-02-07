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

const skills = [
  { id: 1, image: html, title: "HTML5", level: 95, type: "Frontend" },
  { id: 2, image: css, title: "CSS3", level: 90, type: "Frontend" },
  { id: 3, image: Js, title: "JavaScript", level: 95, type: "Frontend" },
  { id: 4, image: react, title: "React", level: 90, type: "Frontend" },
  {
    id: 5,
    image: tailwindcss,
    title: "Tailwind CSS",
    level: 85,
    type: "Frontend",
  },
  { id: 6, image: framer, title: "Framer Motion", level: 75, type: "Tools" },
  { id: 7, image: git, title: "Git & GitHub", level: 85, type: "Tools" },
  { id: 8, image: Rest, title: "REST APIs", level: 80, type: "APIs" },
];

function Skills() {
  const [filter, setFilter] = useState("All"); // Optional filter by type

  const filteredSkills =
    filter === "All" ? skills : skills.filter((skill) => skill.type === filter);

  const types = ["All", "Frontend", "Tools", "APIs"];

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-black text-gray-100"
    >
      {/* Background glows */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-tr from-blue-500 to-cyan-400/20 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-cyan-400 to-blue-500/20 blur-[120px] rounded-full"
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
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-cyan-400 bg-cyan-400/10 rounded-full">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Tools & Technologies I{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A modern frontend stack focused on performance, scalability, and
            delightful user experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {types.map((type, i) => (
            <motion.button
              key={i}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                filter === type
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="relative z-10 w-20 h-20 rounded-xl bg-black/30 flex items-center justify-center mb-6"
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-12 h-12 object-contain"
                />
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-gray-200">
                {skill.title}
              </h3>

              {/* Skill Bar */}
              <div className="relative z-10 w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>

              {/* Proficiency */}
              <p className="relative z-10 mt-2 text-sm text-gray-400">
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
