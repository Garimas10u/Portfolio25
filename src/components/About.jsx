import React from "react";
import { ABOUT_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="px-6 py-8">
      <h2 className="text-white text-3xl md:text-5xl font-bold py-4  mb-8">
        About
      </h2>
      <div className=" mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl mb-4 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
