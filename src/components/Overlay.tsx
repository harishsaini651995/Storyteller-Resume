'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Overlay = () => {
  const { scrollYProgress } = useScroll();

  const section1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const section2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const section2X = useTransform(scrollYProgress, [0.25, 0.45], [-50, 0]);

  const section3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const section3X = useTransform(scrollYProgress, [0.55, 0.75], [50, 0]);

  return (
    <div className="pointer-events-none relative z-10 -mt-[500vh] h-[500vh]">
      {/* Section 1: Center */}
      <motion.section 
        style={{ opacity: section1Opacity, y: section1Y }}
        className="sticky top-0 flex h-screen items-center justify-center p-8"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
            HARISH SAINI.<br/>
            <span className="text-white/40">GRAPHIC DESIGNER.</span>
          </h1>
        </div>
      </motion.section>

      {/* Section 2: Left */}
      <motion.section 
        style={{ opacity: section2Opacity, x: section2X }}
        className="sticky top-0 flex h-screen items-center justify-start p-12 md:p-24"
      >
        <div className="max-w-xl">
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            I craft immersive <br/>
            <span className="text-blue-400">visual narratives</span> <br/>
            that tell a story.
          </p>
        </div>
      </motion.section>

      {/* Section 3: Right */}
      <motion.section 
        style={{ opacity: section3Opacity, x: section3X }}
        className="sticky top-0 flex h-screen items-center justify-end p-12 md:p-24"
      >
        <div className="max-w-xl text-right">
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Where <span className="text-purple-400">strategy</span> meets <br/>
            <span className="text-emerald-400">visual storytelling</span> <br/>
            for global brands.
          </p>
        </div>
      </motion.section>
    </div>
  );
};
