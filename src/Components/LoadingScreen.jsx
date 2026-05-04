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
        setTimeout(() => onComplete(), 300);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #05070d 0%, #07142f 50%, #05070d 100%)" }}
    >
      {/* Gradient mesh orbs */}
      <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-cyan-400/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[100px]" />

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "#1e40ff" : i % 3 === 1 ? "#60a5fa" : "#22d3ee",
          }}
          animate={{
            y: ["-15px", "15px"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Typed Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-2xl md:text-4xl font-bold gradient-text"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {text}
        <span className="ml-1 animate-pulse text-cyan-300">|</span>
      </motion.div>

      {/* Loading bar container */}
      <div className="relative w-[220px] h-[3px] rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>

      {/* Pulsing ring around bar */}
      <motion.div
        className="absolute w-[240px] h-[24px] rounded-full border border-blue-500/20"
        style={{ top: "calc(50% + 28px)" }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.98, 1.02, 0.98] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />

      <motion.p
        className="mt-6 text-gray-500 text-xs md:text-sm"
        style={{ fontFamily: "'Inter', sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading creative vibes...
      </motion.p>
    </div>
  );
};
