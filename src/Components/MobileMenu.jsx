import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
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
              background: "rgba(5, 7, 13, 0.78)",
              backdropFilter: "blur(14px)",
            }}
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 p-6 sm:p-8 flex flex-col relative will-change-transform"
            style={{
              background: "linear-gradient(180deg, rgba(5,7,13,0.96) 0%, rgba(7,20,47,0.96) 100%)",
              backdropFilter: "blur(32px)",
            }}
          >
            {/* Glow orbs */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 -left-10 w-40 h-40 bg-cyan-400/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Close Header */}
            <div className="flex items-center justify-between">
              <span className="gradient-text text-xl font-bold">DEV-TEE</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 text-xl hover:text-white transition duration-200 p-3 rounded-2xl border border-white/8 bg-white/[0.04]"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-4 mt-14">
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
                      className="block w-full px-6 py-5 rounded-2xl text-xl font-semibold transition-all duration-300"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        background: isActive
                          ? "var(--gradient-primary)"
                          : "rgba(255,255,255,0.03)",
                        color: isActive ? "#fff" : "#9ca3af",
                        boxShadow: isActive
                          ? "0 8px 30px rgba(30,64,255,0.25)"
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
