import React from 'react'
import { motion } from 'framer-motion'
import { HERO_CONTENT } from '../constants'
import GarimaProfile from '../assets/GarimaProfile.png'
import {TypeAnimation} from "react-type-animation";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" }
  }
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
}

const imageVariants = {
  hidden:{
    clipPath: "inset(0 50% 0 50%)",
  },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 1.2, ease: "easeOut" }
  }
}

const Hero = () => {
  return (
    <section>
      <div className='relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='w-full md:w-1/2 p-8'
        >
          <h1 className='text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-6 md:mb-10'>
            <span className='text-slate-200'> I am a </span> <br />
            <TypeAnimation className='text-purple-300'
            sequence={
                ["Web Developer", 1000, "Programmer", 1000, "Tech Enthusiast", 1000,]
            }
            wrapper="span"
            speed=
            {60}
            repeat=
            {Infinity} />
 
          </h1>
          <motion.p variants={textVariants} className='text-lg   md:text-xl lg:text-2xl mb:12 md:mb-4'>
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p variants={textVariants} className='text-lg md:text-xl lg:text-2xl'>
            {HERO_CONTENT.description}
          </motion.p>
          <motion.a
            href={HERO_CONTENT.resumeLink}
            download
            rel="noopener noreferrer"
            target="_blank"
            variants={textVariants}
            className='bg-purple-400/20 p-3 lg:p-3 mt-8 inline-block backdrop-blur-3xl rounded-lg hover:bg-gradient-to-r 
            from-purple-950 to-pink-500 text-white'
          >
            {HERO_CONTENT.resumeLinkText}
          </motion.a>
        </motion.div>
        
        <motion.div
          className='w-full md:w-1/2 md:pl-32'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={GarimaProfile} alt="Garima Singh" width={450} height={450}/>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
