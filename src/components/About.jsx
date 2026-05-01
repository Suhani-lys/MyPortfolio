import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Shield } from 'lucide-react';

export default function About() {
  const features = [
    { title: 'AI & Machine Learning', description: 'Building intelligent systems that analyze patterns, understand data, and solve real‑world problems using machine learning.', icon: <BrainCircuit className="text-[#ef4444]" size={28} /> },
    { title: 'Full Stack Development', description: 'Scalable back‑ends with Node/Express and clean, interactive front‑ends.', icon: <Code2 className="text-[#ef4444]" size={28} /> },
    { title: 'Ethical Hacking', description: 'Exploring vulnerabilities and security testing with Nmap, Burp Suite, Wireshark.', icon: <Shield className="text-[#ef4444]" size={28} /> }
  ];

  return (
    <section id="about" className="py-12 bg-[#000000]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white"><span className="text-[#ef4444]">About </span>Me</h2>
          {/* Five‑line description */}
          <div className="text-gray-300 max-w-3xl mx-auto mt-4 text-xs leading-snug space-y-2">
            <p>I love turning ideas into functional, production‑ready systems.</p>
            <p>My focus is on intelligent, scalable applications that blend strong back‑ends with great UX.</p>
            <p>Solving DSA problems sharpens my algorithmic thinking and performance mindset.</p>
            <p>Ethical hacking fuels my passion for security, exploring how to protect and improve systems.</p>
            <p>Consistency, problem‑solving, and continuous learning drive me forward every day.</p>
          </div>
        </motion.div>
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-4 text-center hover:border-[#ef4444] hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition"
            >
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-xs leading-snug">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
