import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItemClass =
    "relative text-gray-300 font-medium text-base cursor-pointer transition-colors duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer text-lg font-semibold tracking-wide text-white"
          >
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-xl font-bold">
              DEV-TEE
            </span>
          </ScrollLink>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-3xl text-white z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <ScrollLink
              to="home"
              smooth
              duration={500}
              offset={-70}
              className={navItemClass}
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth
              duration={500}
              offset={-70}
              className={navItemClass}
            >
              About
            </ScrollLink>

            <ScrollLink
              to="skill"
              smooth
              duration={500}
              offset={-70}
              className={navItemClass}
            >
              Skills
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-70}
              className={navItemClass}
            >
              Projects
            </ScrollLink>

            {/* CTA */}
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-70}
              className="ml-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 transition"
            >
              Get in Touch
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
