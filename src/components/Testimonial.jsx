import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonial = () => {
    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: i * 0.5 }
        })
    };

    return (
        <section className="px-6 py-10 mb-6 mt-10 md:mb-12" id="testimonial">
            <h2 className="text-white text-3xl md:text-5xl font-bold py-4  mb-8">
                What do people Say ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TESTIMONIALS.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        variants={childVariants}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4"
                                loading="lazy"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                            </div>
                        </div>
                        <p className="leading-relaxed">{testimonial.feedback}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
