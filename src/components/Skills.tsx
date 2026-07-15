"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GlassCard } from "./ui/GlassCard";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">02.</span>
          Kỹ năng & Công cụ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Data Analysis */}
          <GlassCard className="group">
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
              Data Analysis
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Thu thập, làm sạch và xử lý dữ liệu, xây dựng dashboard trực quan.
            </p>
          </GlassCard>

          {/* Card 2: Công cụ hỗ trợ */}
          <GlassCard className="group">
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
              Công cụ hỗ trợ
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Power BI", "Stata", "Python (Cơ bản)", "Excel", "Word", "Canva"].map((skill, sIndex) => (
                <span
                  key={sIndex}
                  className="px-4 py-2 rounded-full glass text-sm text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </section>
  );
};
