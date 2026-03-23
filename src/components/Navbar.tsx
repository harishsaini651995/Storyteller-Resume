'use client';

import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Intro', href: '#' },
  { name: 'Experience', href: '#experience' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl"
    >
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <a 
              href={item.href}
              className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
