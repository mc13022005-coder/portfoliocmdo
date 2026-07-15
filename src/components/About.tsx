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
          Về bản thân
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Xin chào! Mình là Đỗ Cao Minh, sinh viên năm 3 chuyên ngành Phân tích dữ liệu kinh tế và chính sách công tại Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội (UEB).
            </p>
            <p>
              Hành trình học tập và làm việc của mình được thúc đẩy bởi niềm đam mê kết nối giữa phân tích dữ liệu chuyên sâu và các quyết định thực tế. Với thế mạnh sử dụng các công cụ phân tích dữ liệu như Power BI, Excel và Stata, mình tập trung vào việc chuyển hóa các tập dữ liệu phức tạp thành những thông tin giá trị (insights). Mình luôn hướng tới sự chủ động, tính trách nhiệm cao và cam kết hoàn thành công việc đúng hạn.
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
