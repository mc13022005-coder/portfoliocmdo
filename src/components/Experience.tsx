"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, TrendingUp } from "lucide-react";

export const Experience = () => {
  const ssi = portfolioData.experience.find(exp => exp.company.includes("SSI"));

  if (!ssi) return null;

  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="text-blue-500 font-mono text-xl">04.</span>
            Professional Journey
          </h2>

          <div className="relative glass p-8 md:p-12 rounded-3xl overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 text-blue-400 font-mono mb-4">
                   <Briefcase size={20} />
                   <span>Experience</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{ssi.company}</h3>
                <p className="text-xl text-gray-300 mb-2">{ssi.role}</p>
                <p className="text-gray-500 font-mono text-sm">{ssi.period}</p>
              </div>

              <div className="lg:col-span-8 space-y-8">
                <p className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-blue-500 pl-6">
                  &quot;{ssi.description}&quot;
                </p>

                <div className="space-y-6">
                  <h4 className="flex items-center gap-3 text-white font-bold text-lg">
                    <TrendingUp size={20} className="text-blue-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-4">
                    {ssi.achievements.map((achievement, index) => (
                      <li key={index} className="flex gap-4 text-gray-400 leading-relaxed">
                        <span className="text-blue-500 mt-1.5 text-xs">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
