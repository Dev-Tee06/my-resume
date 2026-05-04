import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaComments,
  FaLightbulb,
  FaSearchDollar,
  FaTools,
} from "react-icons/fa";
import tess from "../../assets/tess.jpg";

const valuePoints = [
  {
    icon: <FaSearchDollar />,
    title: "Who I help",
    text: "Service businesses, personal brands, startups, and founders who need a clearer digital presence that converts attention into action.",
  },
  {
    icon: <FaTools />,
    title: "Problems I solve",
    text: "Weak positioning, confusing websites, poor user journeys, low trust, and digital systems that do not support growth.",
  },
  {
    icon: <FaChartLine />,
    title: "Outcomes I deliver",
    text: "Sharper messaging, stronger user experience, better lead flow, and websites that work as business assets.",
  },
];

const reasons = [
  {
    icon: <FaLightbulb />,
    title: "Problem-solving mindset",
    text: "I look for the real blocker before touching the design.",
  },
  {
    icon: <FaChartLine />,
    title: "Business-focused thinking",
    text: "Every section has a job: clarify, build trust, or move users forward.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Clean execution",
    text: "Fast, responsive interfaces with clear hierarchy and smooth interactions.",
  },
  {
    icon: <FaComments />,
    title: "Reliable communication",
    text: "You get clear updates, practical thinking, and decisions that make sense.",
  },
];

const processPreview = [
  "Understand the business and audience",
  "Find the gaps slowing growth",
  "Design the strategy and user journey",
  "Build, refine, and improve",
];

export const Home = () => {
  return (
    <main id="home" className="relative overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),transparent_35%,rgba(30,64,255,0.14)_75%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-2xl text-center lg:text-left"
            >
              <span
                className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "#bfdbfe",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                Available for Work | UI/UX Focused
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.02]">
                Hi, I&apos;m <span className="gradient-text">Testimony.</span>
              </h1>

              <p className="text-2xl md:text-4xl font-semibold text-gray-100 mb-6 leading-tight">
                I help businesses turn their online presence into a growth engine,
                not just a website.
              </p>

              <p className="text-gray-400 text-base md:text-lg max-w-xl mb-9 leading-relaxed mx-auto lg:mx-0">
                I design and build digital brand systems that clarify your offer,
                improve the user experience, and guide visitors toward meaningful
                business action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_35px_rgba(30,64,255,0.36)]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  View Work <FaArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-[2px]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#e2e8f0",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  Contact
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full max-w-md lg:max-w-none"
            >
              <div className="glass-card rounded-[2rem] p-4 md:p-5">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5]">
                  <img
                    src={tess}
                    alt="Testimony"
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5 hidden md:block glass-card rounded-2xl p-5">
                    <p className="text-sm text-cyan-200 mb-1">Digital Growth & Brand Strategist</p>
                    <p className="text-xl font-semibold text-white leading-tight">
                      Building systems that help brands become clearer, faster, and easier to trust.
                    </p>
                  </div>
                </div>
                <div className="md:hidden mt-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                  <p className="text-sm text-cyan-200 mb-1">Digital Growth & Brand Strategist</p>
                  <p className="text-lg font-semibold text-white leading-tight">
                    Building systems that help brands become clearer, faster, and easier to trust.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {valuePoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6"
              >
                <span className="text-cyan-300 text-xl">{item.icon}</span>
                <h2 className="text-lg font-semibold text-white mt-4 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-cyan-200 text-sm font-semibold mb-3">Why work with me</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Strategy-led thinking, clean execution, and a focus on outcomes.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
              >
                <span className="text-cyan-300 text-xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="glass-card rounded-3xl p-7 md:p-10">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
              <div>
                <p className="text-cyan-200 text-sm font-semibold mb-3">Process preview</p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  A clear path from confusion to a working growth system.
                </h2>
                <p className="text-gray-400 leading-relaxed max-w-xl">
                  The work is structured so every decision has a reason and every
                  deliverable supports the business goal.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {processPreview.map((step, index) => (
                  <div key={step} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <p className="text-cyan-300 text-sm font-bold mb-3">0{index + 1}</p>
                    <p className="text-white font-semibold leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 pb-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Let&apos;s build something that works.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            If your digital presence needs more clarity, trust, and conversion power,
            the next move is a focused conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_35px_rgba(30,64,255,0.36)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Start the Conversation <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};
