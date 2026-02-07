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
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

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

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-24 bg-black text-gray-100 overflow-hidden"
    >
      {/* Background Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-cyan-400/40 blur-[140px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-bl from-purple-500 to-pink-400/30 blur-[140px] rounded-full"
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
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-cyan-400 bg-gradient-to-r from-blue-500 to-cyan-400/10 rounded-full">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s Build Something{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Have a project in mind or want to collaborate? Drop a message and
            I’ll get back to you.
          </p>
        </div>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-tr from-blue-900/30 to-cyan-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-lg hover:shadow-cyan-400/20 transition"
        >
          {/* Name */}
          <div className="relative">
            <label className="block text-sm text-gray-400 mb-2">
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
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm text-gray-400 mb-2">
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
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Tell me about your project..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Status Message */}
          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✅ Message sent successfully. I’ll be in touch!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          {/* Button */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-full font-semibold transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Quick Contact */}
          <div className="mt-6 flex justify-center gap-6">
            <motion.a
              href="mailto:youremail@example.com"
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-sm text-white bg-white/5 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              <FaEnvelope /> Email
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-sm text-white bg-white/5 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              <FaPhoneAlt /> Call
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-sm text-white bg-white/5 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-sm text-white bg-white/5 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              <FaGithub /> GitHub
            </motion.a>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};
