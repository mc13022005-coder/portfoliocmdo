"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-blue-400 font-mono mb-4"
        >
          Hello, my name is
        </motion.p>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          {portfolioData.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-medium text-gray-400 mb-8">
          {portfolioData.tagline}
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="text-gray-500" size={32} />
      </motion.div>
    </section>
  );
};
