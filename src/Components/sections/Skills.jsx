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
  { id: 1, image: html, title: "HTML5" },
  { id: 2, image: css, title: "CSS3" },
  { id: 3, image: Js, title: "JavaScript" },
  { id: 4, image: react, title: "React" },
  { id: 5, image: tailwindcss, title: "Tailwind CSS" },
  { id: 6, image: framer, title: "Framer Motion" },
  { id: 7, image: git, title: "Git & GitHub" },
  { id: 8, image: Rest, title: "REST APIs" },
];

function Skills() {
  return (
    <section id="skill" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />

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

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-cyan-400"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
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

              <p className="relative z-10 mt-2 text-sm text-gray-400">
                Professional Experience
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
