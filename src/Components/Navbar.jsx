import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItemClass =
    "relative text-gray-400 font-medium text-sm tracking-wide cursor-pointer transition-all duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

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
            className="cursor-pointer text-lg font-bold tracking-wide"
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
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={navItemClass}>
              Home
            </Link>

            <Link to="/about" className={navItemClass}>
              About
            </Link>

            <Link to="/skills" className={navItemClass}>
              Skills
            </Link>

            <Link to="/projects" className={navItemClass}>
              Projects
            </Link>

            <Link
              to="/contact"
              className="ml-2 px-6 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-[1px]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
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
