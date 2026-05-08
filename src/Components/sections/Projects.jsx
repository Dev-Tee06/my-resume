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
import Eunice from "../../assets/Eunice.png";

const projects = [
  {
    id: 1,
    title: "TasteNest",
    image: food,
    github: "https://github.com/Dev-Tee06/taste-nest",
    live: "https://taste-nest-tau.vercel.app/",
    category: "Commerce",
    problem:
      "Food businesses need a smooth digital ordering experience that keeps users moving from browsing to checkout.",
    solution:
      "Built a responsive food delivery interface with polished product browsing and conversion-focused UI states.",
    outcome:
      "Improved the presentation of the ordering flow and created a stronger foundation for customer acquisition.",
  },
  {
    id: 2,
    title: "TEXIFY",
    image: agency,
    github: "https://github.com/Dev-Tee06/digital-agency",
    live: "https://texify-pearl.vercel.app",
    category: "Brand",
    problem:
      "The agency needed a site that communicated creative credibility and made the offer feel premium.",
    solution:
      "Delivered a modern agency website with strong hierarchy, smooth animations, and polished service presentation.",
    outcome:
      "Created a sharper digital presence that supports higher-value client conversations.",
  },
  {
    id: 3,
    title: "TESS STORE",
    image: store,
    github: "https://github.com/Dev-Tee06/my-shop",
    live: "https://tess-shop.vercel.app",
    category: "Commerce",
    problem:
      "Online shoppers need a fast, simple way to browse products and understand the purchase path.",
    solution:
      "Built a responsive e-commerce frontend with cart and checkout flow.",
    outcome:
      "Turned a product catalog into a more usable buying experience across screen sizes.",
  },
  {
    id: 4,
    title: "Xpress",
    image: xpress,
    github: "https://github.com/Dev-Tee06/Xpress",
    live: "https://xpress-five.vercel.app/",
    category: "Operations",
    problem:
      "Campus delivery needs coordination between businesses, customers, and riders without confusing the user.",
    solution:
      "Created a delivery platform interface with business, customer, and rider-facing flows.",
    outcome:
      "Reduced friction in the concept experience and made the delivery model easier to understand.",
  },
  {
    id: 5,
    title: "Farm-IQ",
    image: farm,
    github: "https://github.com/Dev-Tee06/Farm-IQ",
    live: "https://farm-iq-nine.vercel.app/",
    category: "Tools",
    problem:
      "Farmers need digital guidance that turns complex decisions into practical next steps.",
    solution:
      "Built a smart agriculture interface that presents farming insights through clean, responsive screens.",
    outcome:
      "Created a more accessible way for users to engage with agriculture technology.",
  },
  {
    id: 6,
    title: "Mindshift",
    image: mindshift,
    github: "https://github.com/Dev-Tee06/mindshift",
    live: "https://mindshift1-xi.vercel.app/",
    category: "Growth",
    problem:
      "Personal development content can feel vague unless the platform gives it clear structure and direction.",
    solution:
      "Built a growth-focused platform with a clean content experience and persuasive presentation.",
    outcome:
      "Helped the brand communicate transformation with more clarity and confidence.",
  },
  {
    id: 7,
    title: "Teenspray",
    image: teenspray,
    github: "https://github.com/Dev-Tee06/teens-pray",
    live: "https://teens-pray.vercel.app/",
    category: "Community",
    problem:
      "Teenagers need a simple, focused digital space that encourages consistency in prayer and devotion without feeling overwhelming.",
    solution:
      "Built a responsive platform with structured spiritual content, clear navigation, and an experience designed for easy daily use.",
    outcome:
      "Created a more organized digital touchpoint that supports youth engagement, consistency, and spiritual growth.",
  },
  {
    id: 8,
    title: "Eunice Portfolio",
    image: Eunice,
    github: "#",
    live: "https://the-eunice-portfolio.vercel.app/",
    category: "Portfolio",
    problem:
      "A personal brand needs a clean and professional online presence that presents skills, projects, and contact details clearly.",
    solution:
      "Built a responsive portfolio website with organized sections, smooth navigation, and a polished interface tailored for personal presentation.",
    outcome:
      "Delivered a stronger digital presence that makes it easier to showcase work, communicate value, and connect with opportunities.",
  },
  {
    id: 9,
    title: "Oracle Resume",
    image: oracle,
    github: "#",
    live: "https://oracle-resume.vercel.app/",
    category: "Resume",
    problem:
      "Job seekers need a focused resume website that makes their experience, skills, and professional value easy to understand.",
    solution:
      "Created a responsive resume platform with clear content structure, polished visuals, and direct access to key career information.",
    outcome:
      "Built a more professional online resume experience that supports applications, networking, and personal branding.",
  },
  {
    id: 10,
    title: "Unique Resume",
    image: unique,
    github: "#",
    live: "https://unique-portfolio1.vercel.app/",
    category: "Resume",
    problem:
      "A resume site should help visitors quickly understand a candidate's strengths without making the experience feel cluttered.",
    solution:
      "Designed a responsive resume website with simple navigation, organized profile sections, and a clean presentation style.",
    outcome:
      "Created a polished personal career page that improves visibility and makes professional details easier to share.",
  },
];

const categories = [
  "All",
  "Brand",
  "Commerce",
  "Community",
  "Growth",
  "Operations",
  "Resume",
  "Portfoilo",
  "Tools",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      className="py-28 overflow-hidden relative"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,182,212,0.07),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-200">
            Projects
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Case studies focused on{" "}
            <span className="gradient-text">business impact.</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Each project is framed by the problem it solves, the solution
            delivered, and the outcome it supports.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === category
                    ? "var(--gradient-primary)"
                    : "rgba(255,255,255,0.04)",
                color: activeCategory === category ? "#fff" : "#9ca3af",
                border:
                  activeCategory === category
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group glass-card rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />
                <span className="absolute left-4 bottom-4 rounded-full bg-cyan-300/10 border border-cyan-300/20 px-3 py-1 text-xs text-cyan-100">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-sm font-semibold text-cyan-200 mb-2">
                  Problem
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.problem}
                </p>
                <p className="text-sm font-semibold text-cyan-200 mb-2">
                  Solution
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.solution}
                </p>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-white mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              background: "rgba(5,7,13,0.88)",
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              onClick={(event) => event.stopPropagation()}
              className="glass-card rounded-3xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.94, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 18 }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 md:p-8">
                <p className="text-sm text-cyan-200 mb-2">
                  {selectedProject.category}
                </p>
                <h2 className="text-2xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h2>

                <div className="grid gap-4">
                  {["problem", "solution", "outcome"].map((key) => (
                    <div
                      key={key}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                    >
                      <h3 className="capitalize text-white font-semibold mb-2">
                        {key}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {selectedProject[key]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-7">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-[1px] border border-white/10 bg-white/[0.06]"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-[1px]"
                    style={{ background: "var(--gradient-primary)" }}
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
