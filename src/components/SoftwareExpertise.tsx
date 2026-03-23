'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Corel Draw", icon: "Corel", size: "large", color: "from-green-500/20" },
  { name: "Photoshop", icon: "Ps", size: "medium", color: "from-blue-500/20" },
  { name: "Illustrator", icon: "Ai", size: "medium", color: "from-orange-500/20" },
  { name: "Premiere Pro", icon: "Pr", size: "small", color: "from-purple-500/20" },
  { name: "After Effects", icon: "Ae", size: "small", color: "from-indigo-500/20" },
  { name: "InDesign", icon: "Id", size: "medium", color: "from-pink-500/20" },
  { name: "Figma", icon: "Figma", size: "small", color: "from-red-500/20" }
];

export const SoftwareExpertise = () => {
  return (
    <section id="expertise" className="bg-[#121212] py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-12">Software Expertise</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative overflow-hidden group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col justify-between
                ${skill.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${skill.size === 'medium' ? 'md:row-span-2' : ''}
              `}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-center justify-center h-full">
                 <span className="text-4xl md:text-6xl font-bold text-white/20 group-hover:text-white/80 transition-colors uppercase italic tracking-tighter">
                   {skill.icon}
                 </span>
              </div>
              
              <div className="relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
              
              {/* Subtle Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
