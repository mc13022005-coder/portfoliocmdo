"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GlassCard } from "./ui/GlassCard";
import { Github, ExternalLink, Folder } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">03.</span>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <GlassCard key={index} className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-blue-500" size={40} />
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      <Github size={24} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} className="text-xs font-mono text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
