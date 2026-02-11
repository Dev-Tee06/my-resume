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
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[85%] max-w-sm h-screen z-50 
                       bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black 
                       border-l border-white/10 
                       shadow-2xl 
                       p-8 flex flex-col"
          >
            {/* Gradient Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-white text-2xl hover:text-cyan-400 transition"
            >
              <FaTimes />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col gap-5 mt-12">
              {menuItems.map((item, i) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block w-full px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300
                        ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/30"
                            : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto"
            ></motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
