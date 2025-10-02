import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-xl">DEV-TEE </span>. All rights
          reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Dev-Tee06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/testimony-tosin-01206925b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://instagram.com/dev_tee06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
