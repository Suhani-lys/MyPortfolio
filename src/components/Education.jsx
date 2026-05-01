import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech Computer Science (AI)",
      institution: "GL Bajaj Institute of Technology and Management",
      period: "2023 - 2027",
      description: "Pursuing Bachelor's degree in CS with a specialization in Artificial Intelligence. Active participant in technical clubs and hackathons.",
      location: "Greater Noida, India"
    },
    {
      degree: "Katalyst India Scholarship & Development Program",
      institution: "Katalyst India",
      period: "2023 - Present",
      description: "Selected for a competitive scholarship program, completing 100+ technical training sessions and 50+ mentor-led sessions focused on engineering excellence.",
      location: "India"
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">My Background</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-[#ef4444]">Edu</span>cation
            </h2>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              My academic journey and qualifications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex opacity-20 hover:opacity-100 transition-opacity duration-500"
          >
            <GraduationCap size={120} className="text-[#ef4444] drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" />
          </motion.div>
        </div>

        {/* Education List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-[#262626] rounded-2xl p-8 flex flex-col hover:border-[#ef4444]/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] transition-all group"
            >
              <div className="flex items-center gap-2 text-[#ef4444] mb-4 text-sm font-semibold">
                <Calendar size={16} /> {edu.period}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ef4444] transition-colors leading-tight">
                {edu.degree}
              </h3>
              <h4 className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-[#ef4444] shrink-0" /> {edu.institution}
              </h4>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <MapPin size={14} /> {edu.location}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
