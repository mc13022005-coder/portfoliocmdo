"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">01.</span>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hello! I am Đỗ Cao Minh, a Development Economics student at the University of Economics and Business (UEB). My academic journey is fueled by a passion for bridging the gap between rigorous data analysis and impactful public policy.
            </p>
            <p>
              With a strong foundation in economic theories and hands-on experience in data analytics tools like Power BI and Excel, I focus on translating complex datasets into actionable insights that address development challenges and drive sustainable growth. I believe that data is not just numbersit is a powerful tool to shape better decisions and build a better society.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative glass p-2 rounded-2xl">
               <img 
                 src="/IMG_5607.jpg" 
                 alt="Đỗ Cao Minh - Chân Dung" 
                 className="aspect-square rounded-xl bg-gray-800 object-cover w-full overflow-hidden"
               />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
