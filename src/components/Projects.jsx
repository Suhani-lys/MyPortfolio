import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Grid, ClipboardList, AlertTriangle, Users, Brain, UserCheck, LineChart, EyeOff, ShieldCheck, CheckCircle2, Crosshair, Bug } from 'lucide-react';
import { FaUserShield, FaBrain, FaSkull, FaRoute } from 'react-icons/fa';
import crowdguardImg from '../assets/crowdguard.png';
import pathnexisImg from '../assets/pathnexis.png';
import mindspaceImg from '../assets/mindspace.png';
import jwtImg from '../assets/jwt.png';

export default function Projects() {
  const projects = [
    {
      title: "CROWDGUARD",
      subtitle: "Incident Reporting Platform",
      description: "Real-time incident reporting platform that empowers communities to report incidents and help build safer, more responsive cities.",
      features: [
        { name: "Report Incidents", icon: <ClipboardList size={14} /> },
        { name: "Real-time Alerts", icon: <AlertTriangle size={14} /> },
        { name: "Community Driven", icon: <Users size={14} /> }
      ],
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Suhani-lys/crowdguard",
      themeColor: "text-[#ef4444]",
      bgColor: "bg-red-500/10",
      borderColor: "border-[#ef4444]/30",
      heroIcon: <FaUserShield size={48} className="text-[#ef4444]" />,
      bgGradient: "from-[#ef4444]/20",
      image: crowdguardImg
    },
    {
      title: "PATHNEXIS",
      subtitle: "AI Career Guidance System",
      description: "AI-powered career guidance system that analyzes skills, interests, and goals to recommend personalized career paths.",
      features: [
        { name: "AI-Powered Analysis", icon: <Brain size={14} /> },
        { name: "Personalized Recommendations", icon: <UserCheck size={14} /> },
        { name: "Visualize Future", icon: <LineChart size={14} /> }
      ],
      tags: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
      github: "https://github.com/Suhani-lys/Pathnexis",
      themeColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      heroIcon: <FaRoute size={48} className="text-purple-500" />,
      bgGradient: "from-purple-500/20",
      image: pathnexisImg
    },
    {
      title: "MINDSPACE",
      subtitle: "Anonymous Mental Health Platform",
      description: "A safe space for users to express their feelings anonymously and get AI-powered emotional support.",
      features: [
        { name: "Anonymous Sharing", icon: <EyeOff size={14} /> },
        { name: "AI Emotion Analysis", icon: <Crosshair size={14} /> },
        { name: "Safe & Secure", icon: <ShieldCheck size={14} /> }
      ],
      tags: ["MERN Stack", "Python", "NLP", "MongoDB"],
      github: "https://github.com/Suhani-lys/Mindspace",
      themeColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      heroIcon: <FaBrain size={48} className="text-purple-500" />,
      bgGradient: "from-purple-500/20",
      image: mindspaceImg
    },
    {
      title: "JWT ATTACK TOOLKIT",
      subtitle: "Security Testing Tool",
      description: "A toolkit for testing and exploiting JWT vulnerabilities to help developers identify and fix authentication flaws.",
      features: [
        { name: "JWT Analysis", icon: <CheckCircle2 size={14} /> },
        { name: "Attack Simulation", icon: <Crosshair size={14} /> },
        { name: "Vulnerability Detection", icon: <Bug size={14} /> }
      ],
      tags: ["Python", "JWT", "Flask", "Burp Suite"],
      github: "https://github.com/Suhani-lys/JWT-Attack-Toolkit",
      themeColor: "text-[#ef4444]",
      bgColor: "bg-red-500/10",
      borderColor: "border-[#ef4444]/30",
      heroIcon: <FaSkull size={48} className="text-[#ef4444]" />,
      bgGradient: "from-[#ef4444]/20",
      image: jwtImg
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
            <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">My Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            <span className="text-[#ef4444]">Pro</span>jects
          </h2>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            A collection of projects that showcase my skills, problem-solving abilities, and passion for building impactful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-[#262626] rounded-2xl overflow-hidden flex flex-col h-full hover:border-[#ef4444]/50 transition-colors group"
            >
              {/* Hero Banner Area */}
              <div className={`h-48 w-full relative bg-gradient-to-b ${project.bgGradient} to-[#0a0a0a] flex items-center justify-center shrink-0 overflow-hidden border-b border-[#262626]`}>
                {project.image ? (
                  <>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 mix-blend-lighten" />
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80`}></div>
                  </>
                ) : (
                  <div className={`p-4 rounded-full bg-[#000000] border border-[#262626] shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10`}>
                    {project.heroIcon}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Custom split for titles to match design exactly */}
                {(() => {
                  let firstHalf = project.title;
                  let secondHalf = "";
                  if (project.title === "CROWDGUARD") { firstHalf = "CROWD"; secondHalf = "GUARD"; }
                  if (project.title === "PATHNEXIS") { firstHalf = "PATH"; secondHalf = "NEXIS"; }
                  if (project.title === "MINDSPACE") { firstHalf = "MIND"; secondHalf = "SPACE"; }
                  if (project.title === "JWT ATTACK TOOLKIT") { firstHalf = "JWT "; secondHalf = "ATTACK TOOLKIT"; }
                  
                  return (
                    <h3 className="text-2xl font-bold text-white tracking-wide mb-1 w-fit">
                      {firstHalf}<span className={project.themeColor}>{secondHalf}</span>
                    </h3>
                  );
                })()}

                <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-grow">{project.description}</p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6 border-b border-[#262626] pb-6">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-2">
                      <div className={`text-gray-400 group-hover:${project.themeColor} transition-colors`}>
                        {feature.icon}
                      </div>
                      <span className="text-[10px] text-gray-500 leading-tight">{feature.name}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-medium text-gray-300 border border-[#262626] bg-[#000000] px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm font-medium ${project.themeColor} mt-auto hover:opacity-80 transition-opacity`}
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <a href="https://github.com/Suhani-lys" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-transparent border border-[#ef4444] text-white rounded-md font-medium hover:bg-[#ef4444] transition-colors">
            <Grid size={18} /> View All Projects <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
