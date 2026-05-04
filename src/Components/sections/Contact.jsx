import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const SERVICE_ID = "service_z2pur2d";
  const TEMPLATE_ID = "template_ogc5c4m";
  const PUBLIC_KEY = "m2f6nSxL7AnhjTHg9";

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500/50 focus:shadow-[0_0_24px_rgba(30,64,255,0.14)]";

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-28 overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,64,255,0.1),transparent_40%,rgba(6,182,212,0.08))]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              Contact
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Ready to turn your online presence into a{" "}
              <span className="gradient-text">growth system?</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Send a short note about what you want to build, improve, or fix.
              I&apos;ll respond with the clearest next step.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:babayodetestimony0318@gmail.com"
                className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <FaEnvelope className="text-cyan-300 text-2xl mb-4" />
                <p className="text-white font-semibold mb-1">Email</p>
                <p className="text-sm text-gray-400 break-words">
                  babayodetestimony0318@gmail.com
                </p>
              </a>
              <a
                href="https://wa.link/yzi073"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <FaWhatsapp className="text-cyan-300 text-2xl mb-4" />
                <p className="text-white font-semibold mb-1">WhatsApp</p>
                <p className="text-sm text-gray-400">Start a direct project chat</p>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="block text-sm text-gray-300 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Your name"
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="you@example.com"
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2 font-medium">
                Project Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                value={formData.message}
                placeholder="What business problem are you trying to solve?"
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "success" && (
              <p className="text-emerald-400 text-sm font-medium">
                Message sent successfully. I&apos;ll be in touch.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm font-medium">
                Something went wrong. Please use email or WhatsApp.
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:shadow-[0_0_35px_rgba(30,64,255,0.35)] disabled:opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            >
              <FaPaperPlane />
              {status === "loading" ? "Sending..." : "Start a Project"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
