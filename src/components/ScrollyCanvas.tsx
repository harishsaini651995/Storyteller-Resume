'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const ScrollyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frames, setFrames] = useState<string[]>([]);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fetch frame names from API
  useEffect(() => {
    fetch('/api/frames')
      .then(res => res.json())
      .then(data => {
        setFrames(data.frames);
      });
  }, []);

  // Preload images
  useEffect(() => {
    if (frames.length === 0) return;

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    frames.forEach((frame, index) => {
      const img = new Image();
      img.src = `/sequence/${frame}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frames.length) {
          setIsLoading(false);
          setImages(loadedImages);
        }
      };
      loadedImages[index] = img;
    });
  }, [frames]);

  // Current frame index based on scroll
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frames.length - 1]);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas || images.length === 0) return;

      const frameIndex = Math.round(currentIndex.get());
      const img = images[frameIndex];

      if (img) {
        // Clear and draw with object-fit: cover logic
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgWidth = img.width;
        const imgHeight = img.height;

        const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
        const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
        const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
      }
    };

    const unsubscribe = currentIndex.onChange(render);
    
    // Initial render
    if (!isLoading) render();

    // Responsive canvas resizing
    const handleResize = () => {
        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            render();
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
        unsubscribe();
        window.removeEventListener('resize', handleResize);
    };
  }, [images, isLoading, currentIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="block h-full w-full object-cover"
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] transition-opacity duration-500">
             <div className="text-white/50 text-sm font-mono tracking-tighter uppercase animate-pulse">
                Initializing Visuals...
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
