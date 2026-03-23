'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Presentation Strategist & Director",
    company: "A1 Slides",
    period: "2015 - Present",
    description: "Building strategic narratives and visually driven data storytelling for Fortune 500 companies."
  },
  {
    role: "Senior Graphic Designer",
    company: "Creative Vision",
    period: "2010 - 2015",
    description: "Specializing in brand identity, packaging, and high-impact marketing visuals."
  },
  {
      role: "Visual Designer",
      company: "Design Studio",
      period: "2008 - 2010",
      description: "Crafting editorial designs and print media for various lifestyle brands."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="bg-[#121212] py-24 px-6 md:px-24 border-b border-white/5">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-2">History</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter italic">Experience.</h3>
        </div>
        
        <div className="md:w-2/3 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10 group pb-8"
            >
              <div className="absolute left-[-5px] top-0 h-[10px] w-[10px] rounded-full bg-white/20 group-hover:bg-white transition-colors" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h4 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h4>
                <span className="text-sm font-mono text-white/40">{exp.period}</span>
              </div>
              <p className="text-lg font-medium text-white/60 mb-2 italic">{exp.company}</p>
              <p className="text-white/40 leading-relaxed max-w-2xl">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
