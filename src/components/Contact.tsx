"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-blue-500 font-mono text-lg mb-4 block">05. Tiếp theo là gì?</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-8">Liên hệ</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Mình luôn cởi mở với các cơ hội hợp tác mới và hộp thư của mình luôn sẵn sàng đón nhận tin nhắn từ bạn.
          Dù bạn có câu hỏi, muốn trao đổi công việc hay chỉ đơn giản là muốn làm quen, mình sẽ cố gắng phản hồi sớm nhất có thể!
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="glass p-6 rounded-2xl flex flex-col items-center gap-2">
            <Mail className="text-blue-500" size={24} />
            <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">Email</span>
            <a href="mailto:mc13022005@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm break-all">
              mc13022005@gmail.com
            </a>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center gap-2">
            <Phone className="text-blue-500" size={24} />
            <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">Điện thoại</span>
            <a href="tel:0982767328" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
              0982767328
            </a>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center gap-2">
            <MapPin className="text-blue-500" size={24} />
            <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">Địa chỉ</span>
            <span className="text-gray-300 text-sm">
              Cầu Diễn, Phúc Diễn, Hà Nội
            </span>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-8">
           <a 
            href="mailto:mc13022005@gmail.com" 
            className="flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
           >
            <Send size={24} />
            Gửi email cho mình
           </a>

           <div className="flex gap-8 mt-8">
              <a 
                href="https://github.com/mc13022005-coder" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                title="GitHub"
              >
                <Github size={32} />
              </a>
              <a 
                href="https://github.com/mc13022005-coder" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="mailto:mc13022005@gmail.com" 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                title="Email"
              >
                <Mail size={32} />
              </a>
           </div>
        </div>
      </motion.div>
    </section>
  );
};
