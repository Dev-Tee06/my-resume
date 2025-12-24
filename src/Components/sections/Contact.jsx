import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "framer-motion";

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
      className="relative min-h-screen flex items-center justify-center py-24"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-full max-w-xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-cyan-400 bg-cyan-400/10 rounded-full">
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
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 shadow-lg"
        >
          {/* Name */}
          <div>
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
              className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition"
            />
          </div>

          {/* Email */}
          <div>
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
              className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition"
            />
          </div>

          {/* Message */}
          <div>
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
              className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition resize-none"
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
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-full font-semibold transition hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};
