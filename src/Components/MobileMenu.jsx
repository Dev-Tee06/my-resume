import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AnimatePresence mode="wait">
      {menuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40"
            style={{
              background: "rgba(5, 5, 16, 0.75)",
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 right-0 w-[85%] max-w-sm h-screen z-50 p-8 flex flex-col relative will-change-transform"
            style={{
              background: "linear-gradient(180deg, rgba(15, 10, 40, 0.95) 0%, rgba(5, 5, 16, 0.98) 100%)",
              backdropFilter: "blur(32px)",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Glow orbs */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 -left-10 w-40 h-40 bg-violet-500/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Close Header */}
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 text-xl hover:text-white transition duration-200 p-2"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-3 mt-12">
              {menuItems.map((item, i) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        background: isActive
                          ? "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)"
                          : "rgba(255,255,255,0.03)",
                        color: isActive ? "#fff" : "#9ca3af",
                        boxShadow: isActive
                          ? "0 8px 30px rgba(99,102,241,0.25)"
                          : "none",
                        borderLeft: isActive
                          ? "none"
                          : "2px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.target.style.background = "rgba(255,255,255,0.06)";
                          e.target.style.color = "#fff";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.background = "rgba(255,255,255,0.03)";
                          e.target.style.color = "#9ca3af";
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
