import tess from "../../assets/tess.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Role */}
        <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight text-white/15 mb-6">
          Frontend Developer
        </h1>

        {/* Intro */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Testimony
          </span>
        </h2>

        {/* Avatar */}
        <div className="relative mx-auto w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full group mb-8">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/60 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition duration-500" />

          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={tess}
              alt="Testimony"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              draggable="false"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I’m a creative frontend developer focused on building clean,
          high-performance user interfaces and engaging digital experiences
          using modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-5 flex-wrap">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold tracking-wide transition hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/40 text-blue-400 px-8 py-3 rounded-full font-semibold tracking-wide transition hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
