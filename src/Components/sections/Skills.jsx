import { motion } from "framer-motion";
import css from "../../assets/css.png";
import framer from "../../assets/framer.jpeg";
import git from "../../assets/git.png";
import html from "../../assets/html.png";
import Js from "../../assets/Js.jpeg";
import react from "../../assets/react.png";
import tailwindcss from "../../assets/tailwindcss.png";
import Rest from "../../assets/Rest.png";

const skills = [
  {
    id: 1,
    image: html,
    title: "Html5",
  },
  {
    id: 2,
    image: css,
    title: "Css",
  },
  {
    id: 3,
    image: Js,
    title: "Javascript",
  },
  {
    id: 4,
    image: react,
    title: "React",
  },
  {
    id: 5,
    image: tailwindcss,
    title: "Tailwindcss",
  },
  {
    id: 6,
    image: framer,
    title: "Framer",
  },
  {
    id: 7,
    image: git,
    title: "Git",
  },
  {
    id: 8,
    image: Rest,
    title: "Rest Api",
  },
];

function Skills() {
  return (
    <div id="skill" className="py-12">
      <h2 className="font-bold text-3xl mt-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        My Skills
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 px-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <motion.img
              src={skill.image}
              alt={skill.title}
              whileTap={{ scale: 0.9, borderColor: "#06b6d4" }}
              className="w-[150px] h-[150px] rounded-full border-4 border-white/10 hover:border-cyan-500 active:border-cyan-500 focus:border-cyan-500 transition-all duration-300"
            />

            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "rgba(59,130,246,0.2)",
              }}
              className="mt-5 text-2xl text-center bg-blue-500/10 text-blue-500 border border-white/10 hover:border-cyan-500 active:border-cyan-500 focus:border-cyan-500 transition-colors duration-300 py-1 px-3 rounded-full hover:bg-blue-500/20 active:bg-blue-500/20 focus:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-pointer"
            >
              {skill.title}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
