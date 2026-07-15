"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-blue-500 font-mono text-lg mb-4 block">05. What&apos;s Next?</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          I&apos;m currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        
        <div className="flex flex-col items-center gap-8">
           <a 
            href="mailto:hello@example.com" 
            className="flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
           >
            <Send size={24} />
            Say Hello
           </a>

           <div className="flex gap-8 mt-8">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github size={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Mail size={32} />
              </a>
           </div>
        </div>
      </motion.div>
    </section>
  );
};
