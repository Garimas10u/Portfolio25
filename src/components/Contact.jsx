import React from "react";
import { CONTACT_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";
import { RiTwitterXFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

import { FiLink } from "react-icons/fi";

const Contact = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.2 },
    }),
  };

  return (
    <section
      className="flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-medium tracking-light mb-10">
        Contact
      </h2>

      <motion.h3
        className="text-4xl md:text-6xl leading-none"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>

      <motion.p
        className="text-lg md:text-xl mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        {CONTACT_CONTENT.description}
      </motion.p>

      <motion.a
        href={`mailto:${CONTACT_CONTENT.email}`}
        className="text-2xl flex  gap-2 md:text-3xl font-medium mt-8 text-pink-400 hover:underline"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        {CONTACT_CONTENT.email}
        <FiLink />
      </motion.a>

      <div className="flex space-x-6 mt-6">
        <a href="https://x.com/garimasingh10u">
          <RiTwitterXFill className=" h-8 w-8 hover:text-pink-400" />
        </a>
        <a href="https://github.com/Garimas10u">
          <RiGithubFill className=" h-8 w-8 hover:text-pink-400"/>
        </a>
        <a href="https://linkedin/.com/in/garimasingh10u">
          <RiLinkedinFill className=" h-8 w-8 hover:text-pink-400" />
        </a>
      </div>

      <div className="p-10 w-[60vw] mx-auto">
        <form action="https://getform.io/f/paqgymja" method="POST">
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-[rgb(22,9,28)] backdrop-blur-lg w-full px-4 text-gray-300 border border-white/20 rounded-md h-12 focus:outline-none focus:border-pink-600"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-[rgb(22,9,28)] backdrop-blur-lg w-full px-4 text-gray-300 border border-white/20 rounded-md h-12 focus:outline-none focus:border-pink-600"
              />
            </div>

            <div className="sm:col-span-2">
              <textarea
                name="message"
                placeholder="Your Message"
                className="bg-[rgb(22,9,28)] backdrop-blur-lg w-full p-4 text-gray-300 border border-white/20 rounded-md h-32 focus:outline-none focus:border-pink-600"
              />
            </div>

            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                className="text-xl w-full p-2 font-semibold text-white bg-purple-400/30 bakcdrop-blur-3xl rounded-md hover:bg-pink-400/80 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Send
              </motion.button>
            </div>
          </div>
        </form>
      </div>

      <motion.p
        className="text-sm mt-12 text-white"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
};

export default Contact;
