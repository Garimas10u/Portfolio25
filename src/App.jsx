
import BlurBackground from "./components/BlurBackground.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import { TechStack } from "./components/Techstack.jsx";


function App() {
  
  return (
    <>
    <BlurBackground />
    <Navbar/>
    <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects/>
      <Testimonial />
      <Contact />
    </main>
    </> 
  )
}

export default App
