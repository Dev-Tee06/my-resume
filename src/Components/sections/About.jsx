import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const frontendSkills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "CSS",
    "REST APIs",
    "Framer Motion",
    "Git & GitHub",
  ];

  const experiences = [
    {
      role: "Frontend Developer — Sabi Programmers",
      year: "2023–2024",
      details: "Built responsive, user-friendly web applications.",
    },
    {
      role: "Frontend Intern — Sabi Programmers",
      year: "2023",
      details: "Assisted in building reusable UI components.",
    },
    {
      role: "Frontend Developer — TasteNest",
      year: "2024",
      details:
        "Developed a responsive food-ordering platform with strong mobile optimization.",
    },
    {
      role: "Frontend Developer — TEXIFY",
      year: "2025",
      details:
        "Delivered modern, high-performance websites for multiple clients.",
    },
    {
      role: "Frontend Developer — TESS Stores",
      year: "2025–Present",
      details: "Built an interactive e-commerce platform with smooth UX flows.",
    },
    {
      role: "Frontend Developer — Xpress",
      year: "2025–Present",
      details:
        "Created a delivery platform with real-time tracking and rider management.",
    },
  ];

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 right-0 w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-400/20 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-cyan-400 bg-cyan-400/10 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Crafting Clean & Scalable{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Frontend Experiences
            </span>
          </h2>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-14"
        >
          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            I’m a frontend developer passionate about building elegant,
            responsive, and performance-driven interfaces that turn ideas into
            impactful digital products.
          </p>

          {/* Skills */}
          <h3 className="text-xl font-semibold mb-4">Technical Stack</h3>
          <div className="flex flex-wrap gap-3">
            {frontendSkills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-white/10 hover:border-cyan-400 transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Soft skills */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">
              Professional Strengths
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-400">
              <li>✔ Clear communication</li>
              <li>✔ Team collaboration</li>
              <li>✔ Problem solving</li>
              <li>✔ Attention to detail</li>
              <li>✔ Time management</li>
              <li>✔ Adaptability</li>
            </ul>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-14"
        >
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <strong>Computer Engineering</strong> — Federal University Oye
              Ekiti (2023–2027)
            </li>
            <li>Web Development Graduate — Sabi Programmers (2023)</li>
            <li>Software Development Internship — Incubator Hub (2024)</li>
          </ul>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-8">Work Experience</h3>

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-16 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 origin-top"
          />

          <div className="space-y-10 pl-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute -left-8 top-1 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                <h4 className="font-semibold text-gray-200">
                  {exp.role}{" "}
                  <span className="text-sm text-gray-400">({exp.year})</span>
                </h4>
                <p className="text-gray-400 text-sm mt-1">{exp.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
