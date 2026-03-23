'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="bg-[#121212] py-24 px-6 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="max-w-2xl">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-2">Get in touch</h2>
          <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter italic mb-8">Let's Create.</h3>
          
          <div className="space-y-6">
            <a href="mailto:hello@example.com" className="block text-2xl md:text-4xl text-white hover:text-white/60 transition-colors tracking-tight font-medium">
              mahmudul@portfolio.dev
            </a>
            <div className="flex gap-8 text-white/40 font-mono uppercase tracking-[0.2em] text-xs">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Github</a>
            </div>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative group p-8 bg-white/[0.03] backdrop-blur-3xl rounded-[40px] border border-white/10"
        >
          <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur opacity-30 transition transition-opacity group-hover:opacity-100" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden bg-white/5 flex items-center justify-center border border-white/10">
            <img src="/QR.jpg" alt="Contact QR" className="w-full h-full object-cover" />
          </div>
          <div className="mt-6 text-center">
             <p className="text-xs font-mono uppercase tracking-widest text-white/40">Scan to Connect</p>
          </div>
        </motion.div>
      </div>

      <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-mono text-white/20">© 2026 Mahmudul Hasan. Built with Next.js & Framer Motion.</p>
        <p className="text-sm font-mono text-white/20">Awwwards SOTD Intent.</p>
      </footer>
    </section>
  );
};
