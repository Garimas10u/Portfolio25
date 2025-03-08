import { PROJECTS } from "../constants/index";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="px-6 py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-white tracking-tight">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
          key={index}
          className="relative rounded-lg overflow-hidden h-[40vh] transition transform"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-md flex flex-col justify-center items-center text-purple-400 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
              <p className="text-sm text-center text-white px-2 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white/20 border border-white/40 backdrop-blur-lg text-white rounded-full transition hover:bg-purple-900/30 hover:scale-105"
              >
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


