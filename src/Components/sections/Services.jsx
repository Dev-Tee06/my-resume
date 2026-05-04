import { motion } from "framer-motion";
import {
  FaBolt,
  FaBullhorn,
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaComments,
  FaEnvelopeOpenText,
  FaExclamationTriangle,
  FaLayerGroup,
  FaRocket,
  FaSearch,
  FaCompass,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "High-performance websites designed to solve business problems and increase conversions.",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Email Automation",
    text: "Automated systems that nurture leads and improve customer retention.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    text: "Improve visibility, rankings, and organic traffic growth.",
  },
  {
    icon: <FaBullhorn />,
    title: "Branding & Marketing Strategy",
    text: "Clarify positioning, messaging, and overall business direction.",
  },
];

const clientGets = [
  { icon: <FaBolt />, text: "Fast Delivery" },
  { icon: <FaComments />, text: "Clear Communication" },
  { icon: <FaChartLine />, text: "Strategic Thinking" },
  { icon: <FaCheckCircle />, text: "Conversion-Focused Execution" },
  { icon: <FaLayerGroup />, text: "Scalable Digital Systems" },
];

const process = [
  {
    step: "STEP 01",
    icon: <FaSearch />,
    title: "Understand",
    text: "Deep discovery of business, audience, and goals.",
  },
  {
    step: "STEP 02",
    icon: <FaExclamationTriangle />,
    title: "Diagnose",
    text: "Identify gaps, friction points, and growth blockers.",
  },
  {
    step: "STEP 03",
    icon: <FaCompass />,
    title: "Strategize",
    text: "Build a clear, structured system aligned with objectives.",
  },
  {
    step: "STEP 04",
    icon: <FaRocket />,
    title: "Execute",
    text: "Implement, optimize, and refine for measurable results.",
  },
];

const philosophy = [
  "Marketing must generate revenue",
  "Positioning must create clarity",
  "Execution must match strategy",
  "Growth must be system-driven",
];

export default function Services() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),transparent_42%,rgba(30,64,255,0.12))]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            Services
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Digital systems built to create{" "}
            <span className="gradient-text">business transformation.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            I help businesses move from scattered digital activity to focused,
            conversion-ready systems that support growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <span className="text-2xl text-cyan-300">{service.icon}</span>
              <h2 className="text-xl font-semibold text-white mt-5 mb-3">{service.title}</h2>
              <p className="text-gray-400 leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <p className="text-cyan-200 text-sm font-semibold mb-3">What clients get</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              A practical build partner, not just another website vendor.
            </h2>
            <div className="space-y-3">
              {clientGets.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-gray-200"
                >
                  <span className="text-cyan-300">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <p className="text-cyan-200 text-sm font-semibold mb-3">Process</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              From insight to execution
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 border border-white/8 bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-cyan-300 mb-1">{item.step}</p>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-cyan-200 text-sm font-semibold mb-3">Philosophy</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
              Built around revenue, clarity, execution, and systems.
            </h2>
            <div className="flex flex-wrap gap-3">
              {philosophy.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-400/15 bg-blue-500/10 px-4 py-2 text-sm text-blue-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex justify-center rounded-full px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_35px_rgba(30,64,255,0.36)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
