import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
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
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] z-50 flex flex-col items-center justify-center backdrop-blur-md"
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl font-bold focus:outline-none hover:text-cyan-400 transition"
          >
            ×
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-6">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-semibold text-white hover:text-cyan-400 transition-all duration-300 bg-clip-text hover:bg-gradient-to-r from-blue-500 to-cyan-400"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Optional Footer / Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-16 flex gap-6 text-2xl text-white"
          >
            {/* Add any social icons here */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
