'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Graphic Design", "Brand Identity", "Presentation Strategy", "Visual Storytelling",
  "Photoshop", "Illustrator", "InDesign", "Corel Draw",
  "2D Animation", "VFX", "Data Visualization", "Print & Editorial"
];

export const SoftwareExpertise = () => {
  return (
    <section id="expertise" className="bg-[#121212] py-24 px-6 md:px-24 border-y border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-2">Capabilities</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter italic">Software Expertise.</h3>
        </div>
        <p className="max-w-md text-white/50 leading-relaxed">
          Specializing in high-performance digital solutions with a focus on polished aesthetics and seamless interactivity.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            transition={{ delay: index * 0.05 }}
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm md:text-base font-medium text-white/80 backdrop-blur-sm transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
