import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React JS", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          My <span className="text-navy-700">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-navy-700 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-navy-800 rounded-xl shadow-md border border-gray-100 dark:border-navy-700 transition-all duration-300"
            >
              <skill.icon
                size={48}
                style={{ color: skill.color }}
                className="mb-3"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;