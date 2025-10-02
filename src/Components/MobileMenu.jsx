export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-4xl font-bold focus:outline-none"
        >
          ×
        </button>
      )}

      {[
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skill" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ].map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 ease-in-out ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
