import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "14px 18px",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-28 overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Background Orbs */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2), rgba(139,92,246,0.1), transparent)" }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), rgba(236,72,153,0.08), transparent)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full max-w-xl mx-auto px-6 z-10"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#818cf8",
            }}
          >
            Contact
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Have a project in mind or want to collaborate? Drop a message and
            I'll get back to you.
          </p>
        </div>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-8 space-y-6"
          style={{
            boxShadow: "0 0 50px rgba(99,102,241,0.06)",
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="John Doe"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(99,102,241,0.4)";
                e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="you@example.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(99,102,241,0.4)";
                e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Tell me about your project..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              style={{ ...inputStyle, resize: "none" }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(99,102,241,0.4)";
                e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Status */}
          {status === "success" && (
            <p className="text-emerald-400 text-sm font-medium">
              ✅ Message sent successfully. I'll be in touch!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm font-medium">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.35)] disabled:opacity-60"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
            }}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Quick Contact */}
          <div className="mt-8 grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3">
            {[
              { icon: <FaEnvelope />, label: "Email", href: "mailto:babayodetestimony0318@gmail.com" },
              { icon: <FaPhoneAlt />, label: "Call", href: "tel:+2347061158745" },
              { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/testimony-tosin-01206925b", external: true },
              { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Dev-Tee06", external: true },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3 }}
                className="flex items-center justify-center gap-2 text-sm text-gray-300 px-4 py-3 rounded-xl transition-all duration-300 w-full md:w-auto"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {item.icon} {item.label}
              </motion.a>
            ))}
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};
