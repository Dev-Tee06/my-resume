import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItemClass =
    "relative text-gray-400 font-medium text-sm cursor-pointer transition-all duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-blue-600 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav
      className="fixed top-0 w-full z-40 border-b"
      style={{
        background: "rgba(5, 5, 16, 0.7)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="cursor-pointer text-lg font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="gradient-text text-xl font-bold">
              DEV-TEE
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-white z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={navItemClass}>
              Home
            </Link>

            <Link to="/about" className={navItemClass}>
              About
            </Link>

            <Link to="/services" className={navItemClass}>
              Services
            </Link>

            <Link to="/projects" className={navItemClass}>
              Projects
            </Link>

            <Link
              to="/contact"
              className="ml-2 px-6 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,64,255,0.4)] hover:-translate-y-[1px]"
              style={{
                background: "var(--gradient-primary)",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
