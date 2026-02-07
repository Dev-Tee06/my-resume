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

// Full project data (all cards)
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

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 30, scale: 0.95 },
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-black text-gray-100 overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-400/30 blur-[140px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-bl from-blue-700 via-cyan-600 to-blue-500/30 blur-[140px] rounded-full"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-cyan-400 bg-gradient-to-r from-blue-500 to-cyan-400/20 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore my work with a focus on clean, modern, and interactive
            design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                whileHover={{
                  scale: 1.05,
                  rotateX: 3,
                  rotateY: 3,
                  boxShadow: "0 15px 25px rgba(0,180,255,0.25)",
                }}
                className="group perspective bg-gradient-to-br from-blue-900/20 via-cyan-800/20 to-blue-700/20 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]"
              >
                <motion.div
                  whileHover={{ rotateY: 10, rotateX: 5 }}
                  className="relative overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white border border-white/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-2 inline-block text-xs text-cyan-400 font-semibold">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
