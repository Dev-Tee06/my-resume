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

/* ✅ YOUR PROJECTS (UNCHANGED) */
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
      "This is a platform that seeks to empower and educvate the minds of the Young one's there by equipping them with the right mentality for Life.",
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
    <section className="py-24 bg-[#05070f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        {/* FILTERS */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === cat
                  ? "bg-cyan-400 text-black"
                  : "bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_25px_cyan] transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f1a] p-6 rounded-xl max-w-lg w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-44 object-cover rounded-lg mb-4 border border-white/10"
              />

              <h3 className="text-xl font-bold">{selectedProject.title}</h3>

              <p className="text-gray-400 mt-2">
                {selectedProject.description}
              </p>

              <div className="flex gap-4 mt-4">
                <a href={selectedProject.github}>
                  <FaGithub />
                </a>
                <a href={selectedProject.live}>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
