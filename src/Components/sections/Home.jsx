import tee from "../../assets/tee.jpg";
import tess from "../../assets/tess.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="text-center z-10 px-4 ">
        <h1 className="text-5xl md:text-7xl text-black mb-7  border-gray-800 border border-6  font-bold bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ">
          Frontend Developer
        </h1>
        <h1 className="text-3xl  md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hi, I'm Testimony{" "}
        </h1>
        <div className="relative mx-auto w-[300px] h-[300px] rounded-full group">
          {/* Border */}
          <div
            className="absolute inset-0 rounded-full border-4 border-blue-500/70
               group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
               transition-all duration-300 pointer-events-none"
          />

          {/* Inner wrapper */}
          <div className="w-full h-full rounded-full overflow-hidden pt-2">
            <img
              src={tess}
              alt="Testimony"
              className="w-full h-full object-cover block"
              draggable="false"
            />
          </div>
        </div>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a Creative Frontend Developer passionate about turning ideas into
          engaging digital experiences through clean code, intuitive design, and
          performance-driven development.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[60px] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border rounded-[60px] border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
