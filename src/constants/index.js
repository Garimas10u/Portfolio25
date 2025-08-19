import educore from "../assets/Educore.png";
import foodeasy from "../assets/Foodeasy.png";
import envirocast from "../assets/Envirocast.png";
import netflix from "../assets/netflix.png";
import pulsesync from "../assets/Pulsesync.png";
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongodb from '../assets/mongo2.png'
import express from '../assets/Expressjs.png'
import github from '../assets/github.png'
import git from '../assets/git1.png'
import cpp from '../assets/cpp.png'
import clang from '../assets/Clang.png'
import python from '../assets/python.png'
import firebase from '../assets/firebase.png'
import bootstrap from '../assets/bootstrap.png'
import amrita from "../assets/amrita.jpg";
import kunal from "../assets/kunal.jpg";
import nihal from "../assets/nihal.jpg";
import blogary from "../assets/blogary.png";
import samvichar from "../assets/samvichar.png";

export const LINKS = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  
  export const HERO_CONTENT = {
    introduction:
      "Hello! I am Garima Singh, an Information Technology student pursuing my Bachelor's degree. " ,
    description:
     "I specialize in DSA problem solving using C++. I also enjoy building websites with MERN stack. Looking forward to exploring more opportunites and foster new connections.",
    resumeLinkText: "Download Resume",
    resumeLink: "/resume.pdf",
  };
  
  export const ABOUT_CONTENT = {
    paragraphs: [
      "For the passion of programming, I solve DSA problems on platforms like GeeksforGeeks and LeetCode trying to write clean and efficient code. As a MERN developer, I specialize in creating user-friendly web applications that blend functionality with seamless user experiences. I am dedicated to acquiring and incorporating new skills into my skill set. I am passionate about learning new technologies and frameworks to stay ahead in the ever-evolving tech landscape.",
      "I keep seeking new opportunities and exploring industry trends to expand my horizons and collaborate with like-minded individuals. Let us connect to discuss projects, share ideas, or explore potential collaborations.",
    ],
  };
  export const TECH_STACK = [
    { name: "HTML", image: html },
    { name: "CSS", image: css},
    { name: "JavaScript", image: js},
    { name: "React", image: react},
    { name: "Bootstrap", image: bootstrap },
    { name: "Tailwind", image: tailwind },
    { name: "Node.js", image: node },
    { name: "Express.js", image: express },
    { name: "MongoDB", image: mongodb },
    { name: "C++", image: cpp },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
    { name: "Firebase", image: firebase },
    { name: "C", image: clang },
    { name: "Python", image: python },
  ];
  
  export const PROJECTS = [
    {
      name: "Blogary",
      description: "A Blog App built using the MERN stack that allows users to write and publish blogs. One can create and manage blog posts, as well as moderate comments by adding or removing them.",
      image: blogary,
      link: "https://blogary.vercel.app",
    },
    {
      name: "Educore",
      description: "An education institute website that provides course details, online enrollment, student resources, and a seamless learning experience.",
      image: educore,
      link: "https://662d570b52d90f14ae907748--educore10.netlify.app",
    },
    
    {
      name: "Envirocast",
      description: "Provides real-time environmental data, weather forecasts, and sustainability insights, helping users stay informed about climate conditions and eco-friendly practices.",
      image: envirocast,
      link: "https://envirocast-axjx.vercel.app",
    },
    {
      name: "Samvichar",
      description: "A Constitution Awareness App built using the MERN stack to educate users about the Indian Constitution. The app features interactive modules, informative articles, and quizzes to engage users.",
      image: samvichar,
      link: "https://sih-2024-zeta.vercel.app/",
    },

    {
      name: "MovieNet",
      description:
        "An AI-powered movie recommendation platform that provides personalized suggestions and features Firebase authentication for secure user access. ",
      image: netflix,
      link: "https://github.com/your-github/devdeck",
    },
    {
      name: "Foodeasy",
      description: "A food display and delivery app that lets users explore a variety of meals and order with ease. It ensures a smooth and efficient food ordering experience from selection to delivery.",
      image: foodeasy,
      link: "https://foodeasydelivery.netlify.app",
    },
    {
      name: "PulseSync",
      description: "connects people worldwide, enabling them to share content, engage, and communicate seamlessly. ",
      image: pulsesync,
      link: "https://pulsesync.netlify.app",
    },
  ];
  
  
  
  export const EXPERIENCES = [
    {
      yearRange: "Jan 2023 — Present",
      title: "Microsoft Mobile Innovation Labs (MMIL)",
      location: "JSSATE, Noida",
      description: [
        "Involved in the development of scalable frontend architecture for enterprise-level applications.Collaborating with cross-functional teams to deliver high-quality, user-centric solutions."
      ],
    },
    {
      yearRange: "Jan 2024 — Present",
      title: "Beta MLSA Ambassador",
      location: "Microsoft, India",
      description: [
        "As a Beta MLSA, you guide Alpha MLSAs, host workshops, and contribute to technical communities. You get access to exclusive Microsoft resources, networking opportunities, and mentorship from industry experts. You also work on impactful projects, enhance your leadership skills, and build a strong community.",
      ],
    },
    {
      yearRange: "Apr.2024 — Sept.2024",
      title: "Open Source Contributor",
      location: "GSSOC, GirlScript Summer of Code",
      description: [
        "As an Open Source Contributor in GSSoC, I actively collaborate on real-world projects, contribute code, and improve documentation. I engage with mentors, learn industry-standard practices, and enhance my development skills while supporting open-source initiatives. ",
      ],
    },
  ];
  
  export const TESTIMONIALS = [
    {
      name: "Amrita Bansal",
      title: "Frontend Engineer, Google",
      feedback:
        "Garima’s expertise in the MERN stack is outstanding. She has a keen eye for UI/UX, writes efficient code, and always ensures smooth performance in her applications. She is also a great team player and an enthusiastic learner.",
      image: nihal,
    },
    {
      name: "Kunal Mehta",
      title: "Developer, Blinkit",
      feedback:
        "Garima is a highly skilled MERN developer with an exceptional ability to turn ideas into fully functional applications. Her attention to detail, problem-solving skills, and passion for clean code make her an asset to any development team",
      image: kunal,
    },
    {
      name: "Nihal Parmar",
      title: "Lead Designer, Amazon",
      feedback:
        "Working with Garima has been a phenomenal experience. Her deep understanding of development allowed us to push the boundaries of what we could achieve. Her creative problem-solving abilities and commitment to quality are second to none.",
      image: amrita,
    },
  ];
  
  export const CONTACT_CONTENT = {
    headline: "LET'S WORK ON SOMETHING GREAT",
    description:
      "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
    email: "garimasingh10u@gmail.com",

    footerText: `© ${new Date().getFullYear()} Garima Singh. All rights reserved.`,
  };