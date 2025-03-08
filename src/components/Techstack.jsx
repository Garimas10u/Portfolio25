import { motion } from "framer-motion";
import { TECH_STACK } from "../constants/index.js";

export function TechStack() {
  return (
    <section className=" py-6 my-10">
      <h2 className="text-white text-3xl md:text-5xl font-bold py-4 text-center mb-8">
        My Tech Stack
      </h2>
      <div className="px-6 md:px-16 grid grid-cols-5 md:flex md:flex-wrap md:justify-center gap-10">
        {TECH_STACK.map(({ name, image }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 0.8 }}
            whileHover={{ scale: 1.1, ease:"easeOut", rotate:5}}
            className="flex flex-col items-center  w-[40px] md:w-[100px] transition-transform"
          >
            <img src={image} alt={name} className="w-full h-auto" />
            <p className="mt-2">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
