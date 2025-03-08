import { motion } from "framer-motion";
import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="px-10 my-8 md:my-12" id="experience">
      <h2 className="text-white text-3xl md:text-5xl font-bold py-4 mb-8 md:mb-12">
        Experience
      </h2>

      <motion.div
        className="space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div key={index} variants={childVariants} className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div className="text-sm md:w-1/6 md:h-1/4 mb-2 md:mb-0 p-4 backdrop-blur-3xl bg-purple-300/20 rounded-lg ">
                {experience.yearRange}
              </div>
              <div className="gap-0 w-[4px] rounded-full bg-white"></div>

              <div className="md:w-3/4 ">
                <div className="max-w-3xl backdrop-blur-3xl px-4 py-8 bg-purple-300/10 rounded-lg">
                  <h2 className="text-xl mb-2">{experience.title}</h2>
                  <p className="mb-4 text-sm italic">{experience.location}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {experience.description.map((desc, index) => (
                      <li key={index} className="text-sm">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
