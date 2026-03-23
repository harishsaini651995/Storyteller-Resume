'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Brand Identity & Packaging",
    category: "Design",
    image: "/Brand Identity & Packaging.jpg",
    link: "#"
  },
  {
    title: "Event & Digital Experience",
    category: "Experience",
    image: "/Event & Digital Experience Design.jpg",
    link: "#"
  },
  {
    title: "Social Media & Marketing",
    category: "Digital",
    image: "/Social Media & Marketing Creatives.jpg",
    link: "#"
  },
  {
      title: "Print & Editorial Design",
      category: "Design",
      image: "/Print & Editorial Design.jpg",
      link: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#121212] py-24 px-6 md:px-24">
      <div className="mb-16">
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-2">Selected Works</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter italic">Creative Portfolio.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl"
          >
            {/* Background Image with Hover Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">{project.category}</span>
              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tighter leading-none mb-6">
                {project.title}
              </h4>
              
              <motion.a
                href={project.link}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-white/80"
              >
                View Project
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>
            
            {/* Subtle Glow on Hover */}
            <div className="absolute inset-0 border-[2px] border-white/0 transition-colors duration-500 group-hover:border-white/10 rounded-3xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
