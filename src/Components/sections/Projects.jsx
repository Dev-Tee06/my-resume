import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

import food from "../../assets/food.png";
import store from "../../assets/store.png";
import agency from "../../assets/agency.png";

const tech = ["React", "TailwindCss", "Framer Motion"];

const projects = [
  {
    id: 1,
    title: "TasteNest Website",
    description:
      "A modern food delivery website built with React and TailwindCSS.",
    image: food,
    github: "https://github.com/yourusername/tastenest",
    live: "https://tastenest.vercel.app",
  },
  {
    id: 2,
    title: "TEE-Digital Agency",
    description: "Landing page for a creative agency with animations.",
    image: agency,
    github: "https://github.com/yourusername/tee-agency",
    live: "https://tee-agency.vercel.app",
  },
  {
    id: 3,
    title: "TESS E-commerce Store",
    description:
      "Fully responsive e-commerce frontend with cart & checkout flow.",
    image: store,
    github: "https://github.com/yourusername/tess-store",
    live: "https://tess-store.vercel.app",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleOverlay = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          My Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.97 }}
              className="bg-white dark:bg-blue-500/10 border border-white/10 hover:border-cyan-500 active:border-cyan-500 focus:border-cyan-500 transition-all duration-300 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image with hover/tap overlay */}
              <div
                className="relative group"
                onClick={() => toggleOverlay(project.id)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                {/* Overlay (shows on hover OR tap) */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    activeProject === project.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white text-gray-800 px-3 py-1 rounded hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-300 text-sm font-medium transition-colors duration-200"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-700 text-sm font-medium transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {tech.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{
                        scale: 0.95,
                        backgroundColor: "rgba(59,130,246,0.2)",
                      }}
                      className="bg-blue-500/10 text-blue-500 border border-white/10 hover:border-cyan-500 active:border-cyan-500 focus:border-cyan-500 transition-colors duration-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 active:bg-blue-500/20 focus:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-pointer"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
