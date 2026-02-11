import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< HELLO I AM TESTIMONY />";

  const randomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>!@#$%^&*";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      let display = fullText.slice(0, index);

      if (index < fullText.length) {
        display += Math.random() < 0.15 ? randomChar() : "";
      }

      setText(display);
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setText(fullText);
        setTimeout(() => onComplete(), 300); // faster finish
      }
    }, 40); // MUCH faster typing

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Reduced Particles (Better Performance) */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 blur-sm opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["-10px", "10px"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Smaller Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-2xl md:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500"
      >
        {text}
        <span className="ml-1 animate-pulse">|</span>
      </motion.div>

      {/* Faster Loading Bar */}
      <div className="w-[200px] h-1.5 bg-gray-900 rounded overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        />
      </div>

      <motion.p
        className="mt-4 text-gray-500 text-xs md:text-sm italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading creative vibes...
      </motion.p>
    </div>
  );
};
