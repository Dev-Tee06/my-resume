import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import food from "../../assets/food.png";
import store from "../../assets/store.png";
import agency from "../../assets/agency.png";
import xpress from "../../assets/xpress.png";
import farm from "../../assets/farm.png";

const tech = ["React", "Tailwind CSS", "Framer Motion"];

const projects = [
  {
    id: 1,
    title: "TasteNest",
    description:
      "A modern food delivery platform focused on speed, usability, and responsive design.",
    image: food,
    github: "https://github.com/Dev-Tee06/taste-nest",
    live: "https://taste-nest-tau.vercel.app/",
  },
  {
    id: 2,
    title: "TEXIFY",
    description:
      "Creative digital agency website with smooth animations and strong branding.",
    image: agency,
    github: "https://github.com/Dev-Tee06/digital-agency",
    live: "https://texify-pearl.vercel.app",
  },
  {
    id: 3,
    title: "TESS STORE",
    description:
      "A fully responsive e-commerce frontend with cart and checkout flow.",
    image: store,
    github: "https://github.com/Dev-Tee06/my-shop",
    live: "https://tess-shop.vercel.app",
  },
  {
    id: 4,
    title: "Xpress",
    description:
      "Campus-focused delivery platform connecting businesses, customers, and riders.",
    image: xpress,
    github: "https://github.com/Dev-Tee06/Xpress",
    live: "https://xpress-five.vercel.app",
  },
  {
    id: 5,
    title: "Farm-IQ",
    description:
      "Farm-IQ is a smart agriculture platform that uses data and technology to help farmers make better decisions, boost productivity, and farm sustainably.",
    image: farm,
    github: "https://github.com/Dev-Tee06/Farm-IQ",
    live: "https://farm-iq-nine.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/20 blur-[120px] rounded-full" />

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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A collection of products and platforms I’ve built with focus on
            performance, usability, and clean design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-white/10"
                    >
                      {item}
                    </span>
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
