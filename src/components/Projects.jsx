import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Aplikasi Cuaca",
      desc: "Aplikasi real-time cuaca menggunakan OpenWeatherMap API dengan tampilan minimalis.",
      image: "/images/project1.jpg", // taruh di public/images/project1.jpg
      github: "#",
      demo: "#",
    },
    {
      title: "Landing Page Kreatif",
      desc: "Halaman landing dengan animasi scroll parallax dan dark/light mode.",
      image: "/images/project2.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Admin",
      desc: "Dashboard analitik dengan grafik interaktif dan tabel data dinamis.",
      image: "/images/project3.jpg",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
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
          My <span className="text-navy-700">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-navy-700 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-navy-700 transition-all duration-300 flex flex-col"
            >
              {/* Gambar */}
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-navy-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Project+Image";
                  }}
                />
              </div>
              {/* Konten */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow mb-4">
                  {project.desc}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-navy-700 dark:hover:text-white transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-navy-700 dark:hover:text-white transition-colors"
                  >
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;