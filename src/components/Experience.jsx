import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Katalyst India Scholarship & Development Program",
      organization: "Katalyst India",
      period: "2023 - Present",
      description: "Selected for a competitive scholarship program, completing 100+ technical training sessions and 50+ mentor-led sessions focused on engineering excellence."
    },
    {
      role: "B.Tech Computer Science (AI)",
      organization: "GL Bajaj Institute of Technology and Management",
      period: "2023 - 2027",
      description: "Pursuing Bachelor's degree in CS with a specialization in Artificial Intelligence. Active participant in technical clubs and hackathons."
    },
    {
      role: "Katathon 5.0 Finalist",
      organization: "Hackathon Event",
      period: "2024",
      description: "Recognized as a finalist for innovation and technical execution among 100+ participating teams."
    },
    {
      role: "Competitive Programming",
      organization: "LeetCode & Other Platforms",
      period: "2023 - Present",
      description: "Solved 150+ algorithmic problems, focusing on Data Structures and optimizing complex solutions."
    }
  ];

  const renderCard = (exp, index) => (
    <div key={index} className="w-[350px] shrink-0 bg-background border border-border-subtle p-6 rounded-2xl hover:border-primary transition-colors group shadow-sm flex flex-col h-full mx-4">
      <div className="flex items-center gap-2 text-primary mb-2 text-sm font-semibold">
        <Calendar size={16} /> {exp.period}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors whitespace-normal leading-tight h-14 line-clamp-2">{exp.role}</h3>
      <h4 className="text-muted font-medium mb-4 flex items-center gap-2 whitespace-normal line-clamp-1">
        <Award size={16} className="text-primary shrink-0" /> {exp.organization}
      </h4>
      <p className="text-muted text-sm leading-relaxed whitespace-normal line-clamp-3">
        {exp.description}
      </p>
    </div>
  );

  return (
    <section id="experience" className="py-24 relative bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Experience & <span className="text-primary">Achievements</span></h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            My educational journey, programs, and notable hackathon achievements.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 (Left) */}
      <div className="flex whitespace-nowrap mb-8 w-full group">
        <div className="flex animate-scroll-left">
          {[...experiences, ...experiences, ...experiences].map(renderCard)}
        </div>
      </div>

      {/* Marquee Row 2 (Right) */}
      <div className="flex whitespace-nowrap w-full group">
        <div className="flex animate-scroll-right">
          {[...experiences, ...experiences, ...experiences].reverse().map(renderCard)}
        </div>
      </div>
    </section>
  );
}
