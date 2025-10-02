import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-10xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="font-mono text-xl font-bold text-white cursor-pointer"
          >
            <span className="text-blue-500 font-bold text-2xl">DEV-TEE</span>
          </ScrollLink>

          {/* Mobile Menu Toggle */}
          <div
            className="w-7 h-7 flex items-center justify-center relative cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <span className="text-3xl text-white">&times;</span>
            ) : (
              <span className="text-3xl text-white">&#9776;</span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white font-semibold text-lg hover:text-cyan-500 cursor-pointer py-2 hover:border-b-5 hover:border-cyan-500 transition-all duration-300"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white font-semibold text-lg hover:text-cyan-500 cursor-pointer py-2 hover:border-b-5 hover:border-cyan-500 transition-all duration-300"
            >
              About
            </ScrollLink>

            <ScrollLink
              to="skill"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white font-semibold text-lg hover:text-cyan-500 cursor-pointer py-2 hover:border-b-5 hover:border-cyan-500 transition-all duration-300"
            >
              Skills
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white font-semibold text-lg hover:text-cyan-500 cursor-pointer py-2 hover:border-b-5 hover:border-cyan-500 transition-all duration-300"
            >
              Projects
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[50px] cursor-pointer py-2 px-4 duration-300"
            >
              Get In Touch
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
