import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
    "Javascript",
    "CSS",
    "API",
    "Framer-Motion",
    "Git Hub",
  ];

  const experiences = [
    {
      role: "Frontend Developer at Sabi Programmers",
      year: "2023–2024",
      details: "- Built responsive, user-friendly applications",
    },
    {
      role: "Intern at Sabi Programmers",
      year: "2023",
      details: "- Assisted in building front-end components",
    },
    {
      role: "Frontend Developer at TasteNest",
      year: "2024",
      details:
        "- Developed a responsive food ordering website ensuring mobile optimization",
    },
    {
      role: "Frontend Developer at TEE Digital Agency",
      year: "2025",
      details: "- Built and maintained modern, responsive websites for clients",
    },
    {
      role: "Frontend Developer at TESS Stores",
      year: "2025–Present",
      details:
        "- Created an e-commerce platform with interactive product displays and smooth shopping experience",
    },
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
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          About Me
        </motion.h2>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.97, borderColor: "#06b6d4" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl p-8 border border-white/10 hover:border-cyan-500 active:border-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 active:-translate-y-1"
        >
          <p className="text-gray-300 mb-6">
            I'm a Frontend Developer passionate about crafting sleek, responsive
            and user-friendly web applications that bring ideas to life.
          </p>

          {/* Skills */}
          <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: "rgba(59,130,246,0.2)",
                }}
                className="bg-blue-500/10 text-blue-500 border border-white/10 hover:border-cyan-500 active:border-cyan-500 focus:border-cyan-500 transition-colors duration-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 active:bg-blue-500/20 focus:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Non-technical skills */}
          <div className="mt-5">
            <h2 className="font-bold text-xl">My Non-Technical Skills</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-5">
              <li>Effective Communication skills.</li>
              <li>Good Collaboration and Team work.</li>
              <li>Problem Solving and Critical Thinking.</li>
              <li>Attention to Details.</li>
              <li>Time Management and Organisation.</li>
            </ul>
          </div>
        </motion.div>

        {/* Education + Work */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.97, borderColor: "#06b6d4" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-white/10 hover:border-cyan-500 active:border-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 active:-translate-y-1 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                <strong>Student, Computer Engineering</strong> — Federal
                University Oye Ekiti (2023–2027)
              </li>
              <li>
                Graduate of Web Development Class at Sabi Programmers (2023)
              </li>
              <li>Internship Software Development at Incubator Hub (2024).</li>
              <li>
                Relevant Coursework: Data Structures, Web Development, Community
                Management
              </li>
            </ul>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.97, borderColor: "#06b6d4" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-white/10 hover:border-cyan-500 active:border-cyan-500 focus:border-cyan-500 transition-all duration-300 relative"
            ref={timelineRef}
          >
            <h3 className="text-xl font-bold mb-6">Work Experience</h3>

            {/* Animated timeline line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-4 top-12 w-0.5 bg-blue-500 origin-top"
            />

            <div className="space-y-8 pl-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileTap={{ scale: 0.97 }}
                  className="relative"
                >
                  {/* Circle marker */}
                  <span className="absolute -left-6 top-1 w-4 h-4 bg-blue-500 rounded-full border border-white" />

                  <h4 className="font-semibold text-gray-200">
                    {exp.role}{" "}
                    <span className="text-sm text-gray-400">({exp.year})</span>
                  </h4>
                  <p className="text-gray-400 text-sm">{exp.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
