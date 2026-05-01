import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight, Award } from 'lucide-react';
import { FaBuilding, FaAws, FaShieldAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


export default function Certificates() {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      description: "Gained skills in data cleaning, analysis, visualization, and storytelling using tools like SQL, R, and Tableau.",
      icon: <FcGoogle size={40} />,
      issuer: "Google",
      date: "Jan 2024",
      link: "#"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      description: "Fundamentals of AWS Cloud, core services, security, pricing, and cloud architecture.",
      icon: <FaAws size={40} className="text-[#FF9900]" />,
      issuer: "Amazon Web Services",
      date: "Dec 2023",
      link: "#"
    },
    {
      title: "Cisco Networking Basics",
      description: "Understanding of networking concepts, IP addressing, routers, switches, and network security.",
      icon: <div className="text-xl font-bold text-[#049fd9]">CISCO</div>,
      issuer: "Cisco Networking Academy",
      date: "Oct 2023",
      link: "#"
    },
    {
      title: "Python (Basic) Certificate HackerRank",
      description: "Certified in Python fundamentals including data types, loops, functions, and OOP.",
      icon: <div className="text-2xl font-bold text-[#00EA64]">HR</div>,
      issuer: "HackerRank",
      date: "Aug 2023",
      link: "#"
    },
    {
      title: "IBM Data Science Professional Certificate",
      description: "Learned data science fundamentals, SQL, data analysis, machine learning, and data visualization.",
      icon: <div className="text-3xl font-bold text-[#0530ad] font-sans tracking-tighter">IBM</div>,
      issuer: "IBM",
      date: "Jul 2023",
      link: "#"
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      description: "Basics of cloud concepts, Azure services, workloads, security, and pricing models.",
      icon: <div className="text-2xl font-bold text-[#00a4ef]">MS</div>,
      issuer: "Microsoft",
      date: "Jun 2023",
      link: "#"
    },
    {
      title: "Machine Learning Foundations",
      description: "Introduction to ML algorithms, supervised & unsupervised learning, and model evaluation.",
      icon: <div className="text-4xl font-bold text-blue-500 font-serif">G</div>,
      issuer: "Great Learning",
      date: "May 2023",
      link: "#"
    },
    {
      title: "Complete Beginner Path - TryHackMe",
      description: "Completed hands-on labs on Linux, Network Fundamentals, and Cyber Security basics.",
      icon: <FaShieldAlt size={40} className="text-white" />,
      issuer: "TryHackMe",
      date: "Apr 2023",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative bg-[#000000]">
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
              <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">Achievements</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-[#ef4444]">Certi</span>fications
            </h2>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              Continuous learning and growth are at the core of my journey. <br className="hidden md:block" />
              Here are some of my professional certifications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex"
          >
            <Award size={100} className="text-[#ef4444] drop-shadow-[0_0_40px_rgba(239,68,68,0.6)] opacity-80" strokeWidth={1} />
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-[#262626] rounded-2xl p-6 flex flex-col hover:border-[#ef4444]/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#0f0f0f] border border-[#262626] rounded-xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                  {cert.icon}
                </div>
                <h3 className="text-sm font-bold text-white leading-tight pt-1">
                  {cert.title}
                </h3>
              </div>
              
              <p className="text-[13px] text-gray-400 mb-6 flex-grow leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#262626]">
                <div className="flex items-center gap-1.5 w-1/3">
                  <FaBuilding size={12} className="text-gray-500" />
                  <span className="text-[10px] text-gray-400 truncate">{cert.issuer}</span>
                </div>
                
                <div className="w-px h-3 bg-[#262626]"></div>
                
                <div className="flex items-center gap-1.5 w-1/3 justify-center">
                  <Calendar size={12} className="text-gray-500" />
                  <span className="text-[10px] text-gray-400 whitespace-nowrap">{cert.date}</span>
                </div>
                
                <div className="w-px h-3 bg-[#262626]"></div>
                
                <a href={cert.link} className="flex items-center gap-1 w-1/3 justify-end group-hover:text-[#ef4444] text-gray-500 transition-colors">
                  <span className="text-[10px] font-medium">Verify</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
            <a href="#" className="flex items-center gap-3 px-6 py-3 bg-transparent border border-[#ef4444] text-white rounded-md font-medium hover:bg-[#ef4444] transition-colors group">
              <Award size={18} /> View All Certifications <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
