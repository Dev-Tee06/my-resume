"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center">
            <div className="spinner" />
            <p className="logo gradient-text mt-5 text-sm tracking-widest opacity-70">
              DEV-TEE
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
