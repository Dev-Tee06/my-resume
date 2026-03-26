import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import food from "../../assets/food.png";
import store from "../../assets/store.png";
import agency from "../../assets/agency.png";
import xpress from "../../assets/xpress.png";
import farm from "../../assets/farm.png";
import mindshift from "../../assets/mindshift.png";
import teenspray from "../../assets/teenspray.png";
import oracle from "../../assets/oracle.png";
import unique from "../../assets/unique.png";
import mindheroes from "../../assets/mindheroes.png";

const projects = [
  {
    id: 1,
    title: "TasteNest",
    description:
      "A modern food delivery platform focused on speed, usability, and responsive design.",
    image: food,
    github: "https://github.com/Dev-Tee06/taste-nest",
    live: "https://taste-nest-tau.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "E-Commerce",
  },
  {
    id: 2,
    title: "TEXIFY",
    description:
      "Creative digital agency website with smooth animations and strong branding.",
    image: agency,
    github: "https://github.com/Dev-Tee06/digital-agency",
    live: "https://texify-pearl.vercel.app",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Agency",
  },
  {
    id: 3,
    title: "TESS STORE",
    description:
      "A fully responsive e-commerce frontend with cart and checkout flow.",
    image: store,
    github: "https://github.com/Dev-Tee06/my-shop",
    live: "https://tess-shop.vercel.app",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "E-Commerce",
  },
  {
    id: 4,
    title: "Xpress",
    description:
      "Campus-focused delivery platform connecting businesses, customers, and riders.",
    image: xpress,
    github: "https://github.com/Dev-Tee06/Xpress",
    live: "https://xpress-five.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
  },
  {
    id: 5,
    title: "Farm-IQ",
    description:
      "Smart agriculture platform that helps farmers make better decisions and farm sustainably.",
    image: farm,
    github: "https://github.com/Dev-Tee06/Farm-IQ",
    live: "https://farm-iq-nine.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Tools",
  },
  {
    id: 6,
    title: "Mindshift",
    description:
      "Platform designed to transform thinking, purpose, and lifestyle through practical wisdom.",
    image: mindshift,
    github: "https://github.com/Dev-Tee06/mindshift",
    live: "https://mindshift1-xi.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Growth",
  },
  {
    id: 7,
    title: "Teens-Pray",
    description:
      "Platform empowering teenagers to cultivate spiritual growth through structured prayer and devotionals.",
    image: teenspray,
    github: "https://github.com/Dev-Tee06/teens-pray",
    live: "https://teens-pray.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Religious",
  },
  {
    id: 8,
    title: "Unique's Portfolio",
    description:
      "Sleek interactive portfolio showcasing skills, past work, and personal brand.",
    image: unique,
    github: "https://github.com/Dev-Tee06/unique-resume",
    live: "https://unique-portfolio1.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Portfolio",
  },
  {
    id: 9,
    title: "Oracle's Mind Portfolio",
    description:
      "Portfolio website for Oracle's Mind highlighting creativity, experience, and testimonials.",
    image: oracle,
    github: "https://github.com/Dev-Tee06/oracle-resume",
    live: "https://oracle-resume.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Portfolio",
  },
  {
    id: 10,
    title: "Mindheroes",
    description:
      "This is a platform that seeks to empower and educate the minds of the Young one's there by equipping them with the right mentality for Life.",
    image: mindheroes,
    github: "https://github.com/Dev-Tee06/mind-hero",
    live: "https://mind-hero-sable.vercel.app/",
    tech: ["Next.js", "Tailwind Css", "Framer Motion", "Firebase"],
    category: "Growth",
  },
];

const categories = [
  "All",
  "Frontend",
  "Portfolio",
  "Tools",
  "Agency",
  "E-Commerce",
  "Religious",
  "Growth",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      className="py-28 overflow-hidden relative"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Background orbs */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent)" }}
      />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#818cf8",
            }}
          >
            Portfolio
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)"
                    : "rgba(255,255,255,0.04)",
                color: activeCategory === cat ? "#fff" : "#9ca3af",
                border:
                  activeCategory === cat
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
                boxShadow:
                  activeCategory === cat
                    ? "0 4px 20px rgba(99,102,241,0.25)"
                    : "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group glass-card rounded-2xl overflow-hidden transition-all duration-400"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(99,102,241,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "var(--glass-glow)";
              }}
            >
              {/* Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(5,5,16,0.95) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-semibold text-gray-100 text-lg mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                      style={{
                        background: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.15)",
                        color: "#a5b4fc",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              background: "rgba(5,5,16,0.85)",
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-3xl max-w-lg w-full overflow-hidden"
              style={{
                borderColor: "rgba(99,102,241,0.15)",
                boxShadow: "0 25px 80px rgba(99,102,241,0.15)",
              }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.15)",
                        color: "#a5b4fc",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-[1px]"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
