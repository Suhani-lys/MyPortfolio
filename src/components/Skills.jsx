import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJs, FaPython, FaReact, FaNodeJs, FaDatabase,
  FaGit, FaGithub, FaDocker, FaFigma, FaFire, FaTerminal
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { FaBrain, FaLinux, FaPuzzlePiece, FaLightbulb, FaClock, FaUserFriends, FaSyncAlt } from 'react-icons/fa';
import { TbHierarchy } from 'react-icons/tb';
import { Code2, Settings } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 90 },
    { name: 'Python', icon: <FaPython className="text-blue-500" />, level: 85 },
    { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 80 },
    { name: 'Express.js', icon: <FaNodeJs className="text-white" />, level: 80 },
    { name: 'MongoDB', icon: <FaDatabase className="text-green-500" />, level: 75 },
    { name: 'SQL', icon: <FaDatabase className="text-blue-400" />, level: 75 },
    { name: 'Data Structures & Algorithms', icon: <TbHierarchy className="text-red-400" />, level: 85 },
    { name: 'Machine Learning', icon: <FaBrain className="text-pink-400" />, level: 75 },
  ];

  const tools = [
    { name: 'VS Code', icon: <VscVscode className="text-blue-500" size={32} /> },
    { name: 'Git', icon: <FaGit className="text-orange-500" size={32} /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" size={32} /> },
    { name: 'Postman', icon: <FaTerminal className="text-orange-400" size={32} /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" size={32} /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-400" size={32} /> },
    { name: 'MongoDB Compass', icon: <FaDatabase className="text-green-500" size={32} /> },
    { name: 'Jupyter Notebook', icon: <FaPython className="text-orange-500" size={32} /> },
    { name: 'Linux', icon: <FaLinux className="text-white" size={32} /> },
    { name: 'Streamlit', icon: <FaPython className="text-red-500" size={32} /> },
    { name: 'Firebase', icon: <FaFire className="text-yellow-500" size={32} /> },
    { name: 'Render', icon: <FaTerminal className="text-white" size={32} /> },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <FaPuzzlePiece /> },
    { name: 'Critical Thinking', icon: <FaLightbulb /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Team Collaboration', icon: <FaUserFriends /> },
    { name: 'Adaptability', icon: <FaSyncAlt /> },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">What I do best</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-[#ef4444]">My</span> Skills
            </h2>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              A blend of technical expertise, problem-solving abilities, and tools I use to build impactful solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex opacity-20 hover:opacity-100 transition-opacity duration-500"
          >
            <Code2 size={120} className="text-[#ef4444] drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" />
          </motion.div>
        </div>

        {/* Main Grid Content */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
          
          {/* Technical Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0a] border border-[#262626] rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="text-[#ef4444] font-mono">{'>_'}</span>
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-[#ef4444]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#262626] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className="h-full bg-[#ef4444] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0a] border border-[#262626] rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-8">
              <Settings className="text-[#ef4444]" size={16} />
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">Tools & Technologies</h3>
            </div>
            
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
              {tools.map((tool, index) => (
                <div key={index} className="bg-[#0f0f0f] border border-[#262626] rounded-xl flex flex-col items-center justify-center gap-3 p-4 hover:border-[#ef4444] transition-colors group">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <span className="text-xs text-gray-400 text-center font-medium group-hover:text-white transition-colors">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-[#0a0a0a] border border-[#262626] rounded-2xl p-6"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
            <div className="flex items-center gap-2 shrink-0">
              <FaUserFriends className="text-[#ef4444]" />
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">Soft Skills</h3>
            </div>
            
            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 relative">
                  <div className="text-[#ef4444] text-xl mb-1">{skill.icon}</div>
                  <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                  {index !== softSkills.length - 1 && (
                    <div className="hidden md:block absolute right-[-20%] top-1/2 w-px h-8 bg-[#262626] -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
