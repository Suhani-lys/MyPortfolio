import React from 'react';
import { motion } from 'framer-motion';
import { Send, Download, Mouse, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { MdEmail } from 'react-icons/md';
import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-32 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative w-full grid md:grid-cols-2 gap-12 items-center flex-grow py-12">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
            <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            <span className="text-[#ef4444]">Hello,</span> I'm <br />
            Suhani Bharti <br />
            <span className="text-[#ef4444]">Full Stack AI Developer</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed mt-4">
            A passionate Developer skilled in Data Structures & Algorithms, Machine Learning, and creating scalable web applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-[#ef4444] text-white rounded-md font-medium hover:bg-[#dc2626] transition-colors">
              <Send size={18} /> Let's Connect
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-transparent border border-[#262626] text-white rounded-md font-medium hover:border-[#ef4444] hover:text-[#ef4444] transition-colors">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex items-center justify-center mt-12 md:mt-0"
        >
          {/* Decorative background grid elements */}
          <div className="absolute top-10 right-10 grid grid-cols-4 gap-2 opacity-20">
             {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#ef4444] rounded-full"></div>)}
          </div>
          <div className="absolute bottom-10 left-10 grid grid-cols-4 gap-2 opacity-20">
             {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#ef4444] rounded-full"></div>)}
          </div>

          <div className="relative w-[450px] h-[450px] rounded-full border-2 border-[#ef4444] shadow-[0_0_80px_rgba(239,68,68,0.25)] flex items-center justify-center">
            <div className="w-[420px] h-[420px] rounded-full overflow-hidden bg-[#0a0a0a]">
              <img 
                src={profileImg} 
                alt="Suhani Bharti"
                className="w-full h-full object-cover object-top filter brightness-95"
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Social Links Row (Separated Cards) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pb-8 mt-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <a href="https://www.linkedin.com/in/suhani-bharti-3022b6342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl hover:border-[#ef4444]/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.05)] transition-all group">
              <div className="p-2 bg-transparent">
                <FaLinkedin className="text-gray-400 group-hover:text-[#ef4444] transition-colors" size={28} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">LinkedIn</p>
                <p className="text-xs text-gray-400">Connect with me</p>
              </div>
            </a>

            <a href="https://github.com/Suhani-lys" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl hover:border-[#ef4444]/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.05)] transition-all group">
              <div className="p-2 bg-transparent">
                <FaGithub className="text-gray-400 group-hover:text-[#ef4444] transition-colors" size={28} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">GitHub</p>
                <p className="text-xs text-gray-400">Check out my code</p>
              </div>
            </a>

            <a href="https://leetcode.com/u/suhanii_lys/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl hover:border-[#ef4444]/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.05)] transition-all group">
              <div className="p-2 bg-transparent">
                <Code2 className="text-gray-400 group-hover:text-[#ef4444] transition-colors" size={28} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">LeetCode</p>
                <p className="text-xs text-gray-400">View my problem solving</p>
              </div>
            </a>

            <a href="mailto:soha91177@gmail.com" className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl hover:border-[#ef4444]/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.05)] transition-all group">
              <div className="p-2 bg-transparent">
                <MdEmail className="text-gray-400 group-hover:text-[#ef4444] transition-colors" size={28} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Email</p>
                <p className="text-xs text-gray-400">Let's work together</p>
              </div>
            </a>

          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-2 text-gray-500">
          <Mouse size={24} className="animate-bounce" />
          <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}
