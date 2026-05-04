import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaCode,
  FaCompass,
  FaEnvelopeOpenText,
  FaSearch,
  FaSeedling,
  FaStream,
} from "react-icons/fa";

const capabilities = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "I build fast, responsive websites designed to guide users clearly and support business goals.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    text: "I improve visibility by helping pages become easier to find, understand, and rank.",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Email Automation",
    text: "I create follow-up systems that nurture leads and keep prospects engaged after the first visit.",
  },
  {
    icon: <FaBullhorn />,
    title: "Branding Strategy",
    text: "I clarify positioning, messaging, and presentation so the right audience understands the offer faster.",
  },
];

const philosophies = [
  {
    icon: <FaChartIcon />,
    title: "Marketing drives revenue",
    text: "Attention is useful only when it moves people closer to trust, action, and measurable business value.",
  },
  {
    icon: <FaBullhorn />,
    title: "Positioning creates clarity",
    text: "A strong brand helps the right people quickly understand what you do, who it is for, and why it matters.",
  },
  {
    icon: <FaCompass />,
    title: "Strategy provides direction",
    text: "Good execution needs a clear path, otherwise design becomes decoration instead of a business tool.",
  },
  {
    icon: <FaSeedling />,
    title: "Growth comes from systems",
    text: "Sustainable results are built through repeatable systems, clear journeys, and consistent improvement.",
  },
];

const differentiators = [
  "I don't just build, I think through the business problem first.",
  "I focus on results, not features that only look impressive.",
  "I simplify complex problems into clear user journeys.",
  "I build with purpose, so every section has a role.",
];

function FaChartIcon() {
  return <FaStream />;
}

export const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(30,64,255,0.08),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-200">
            About
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
            I build digital systems for brands that need{" "}
            <span className="gradient-text">clarity, trust, and growth.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            I&apos;m Testimony, a web developer evolving into a premium digital brand
            and growth strategist. I help businesses turn scattered ideas into
            clean, strategic digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-7 md:p-10 mb-16"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-cyan-200 text-sm font-semibold mb-4">Personal Story</p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                I started building because I saw how often good ideas lose
                momentum when the digital experience is unclear.
              </h2>
            </div>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                My journey started with websites, but the deeper I built, the more
                I realized that a website is only valuable when it helps people
                understand, trust, and take action.
              </p>
              <p>
                That shaped how I work today. I do not start with colors or code.
                I start with the business, the audience, the offer, and the problem
                the digital experience needs to solve.
              </p>
              <p>
                I help business owners, personal brands, startups, and service
                providers create online experiences that feel premium, communicate
                clearly, and support real growth.
              </p>
            </div>
          </div>
        </motion.div>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div className="max-w-2xl">
              <p className="text-cyan-200 text-sm font-semibold mb-3">Capabilities</p>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Outcome-focused ways I help
              </h2>
            </div>
            <p className="text-gray-400 max-w-md">
              Each capability supports a business outcome: visibility, clarity,
              conversion, retention, or trust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6"
              >
                <span className="text-2xl text-cyan-300">{capability.icon}</span>
                <h3 className="text-xl font-semibold text-white mt-5 mb-2">{capability.title}</h3>
                <p className="text-gray-400 leading-relaxed">{capability.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="text-cyan-200 text-sm font-semibold mb-3 text-center">Philosophy</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-9">
            The principles behind the work
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {philosophies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 border border-white/8 bg-white/[0.03]"
              >
                <span className="text-cyan-300 text-xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-3xl p-7 md:p-10">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-cyan-200 text-sm font-semibold mb-3">Why I&apos;m different</p>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                I treat every build like a business problem, not a checklist.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-blue-400/15 bg-blue-500/10 p-5"
                >
                  <p className="text-white font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
