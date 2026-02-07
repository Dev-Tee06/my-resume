import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< H E L L O   I   A M   T E S T I M O N Y >";

  // Glitchy letters helper
  const randomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>!@#$%^&*";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Always preserve spaces and letters typed
      let display = fullText
        .split("")
        .map((char, i) => (i < index ? char : ""))
        .join("");

      // Add small glitch at the end only if typing not finished
      if (index < fullText.length) {
        const glitch = Math.random() < 0.2 ? randomChar() : " ";
        display += glitch;
      }

      setText(display);
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        // ensure final text displays correctly with spacing
        setText(fullText);
        setTimeout(() => onComplete(), 1500);
      }
    }, 150); // slower typing speed
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Floating Neon Particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 blur-sm opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["-20px", "20px"],
            x: ["-15px", "15px"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glitchy Gradient Text */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className="mb-6 text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.9)]"
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={`inline-block ${
              char !== " " && Math.random() < 0.15
                ? "text-blue-200 scale-110 translate-y-[-2px]"
                : ""
            }`}
          >
            {char}
          </span>
        ))}
        <span className="ml-1 animate-blink">|</span>
      </motion.div>

      {/* Loading Bar */}
      <div className="w-[240px] h-2 bg-gray-900 rounded overflow-hidden relative shadow-inner">
        <motion.div
          className="h-full rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.9)]"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </div>

      {/* Optional Caption */}
      <motion.p
        className="mt-4 text-gray-400 text-sm md:text-base italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading creative vibes...
      </motion.p>
    </div>
  );
};
