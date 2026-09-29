"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [showZinger, setShowZinger] = useState(false);
  const [showMainText, setShowMainText] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(1);

  // Helper to draw a specific frame maintaining bg-cover behavior
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Safety check for out of bounds (after animation finishes, currentFrame can be 301)
    const safeFrameIndex = Math.min(Math.max(frameIndex, 1), 300);
    const img = imagesRef.current[safeFrameIndex - 1];
    
    if (ctx && img && img.complete) {
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;
      
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // On mobile, fit to width to avoid sides getting cut off
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        // On desktop, use standard cover
        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  useEffect(() => {
    // Force scroll to top on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Hide header while animation plays
    window.dispatchEvent(new Event('header:hide'));

    // Preload all 300 frames into memory
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= 300; i++) {
      const img = new window.Image();
      img.src = `/frames/swiftbite-frame-${String(i).padStart(3, '0')}.webp`;
      
      // Draw first frame as soon as it loads
      if (i === 1) {
        img.onload = () => drawFrame(1);
      }
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;

    // Timeline
    const t1 = setTimeout(() => {
      setShowZinger(true);
    }, 2500);

    const t2 = setTimeout(() => {
      setShowZinger(false);
    }, 4500);

    let frameInterval: NodeJS.Timeout;
    const t3 = setTimeout(() => {
      // 30 FPS animation
      frameInterval = setInterval(() => {
        currentFrameRef.current++;
        if (currentFrameRef.current <= 300) {
          drawFrame(currentFrameRef.current);
        } else {
          clearInterval(frameInterval);
          setIsBlurred(true);
          
          // Show header after animation finishes
          window.dispatchEvent(new Event('header:show'));
          
          setTimeout(() => {
            setShowMainText(true);
          }, 500);
        }
      }, 1000 / 45); // 45 FPS (1.5x speed)
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (frameInterval) clearInterval(frameInterval);
    };
  }, []);

  // Update canvas size on window resize to keep it crisp
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Set actual internal canvas resolution to match screen
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        drawFrame(currentFrameRef.current);
      }
    };
    
    // Initial size setup
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section className="relative w-full -mt-20 h-screen min-h-[800px] overflow-hidden flex items-center bg-surface">
        
        {/* High Performance Canvas for Background Image Sequence */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Blur overlay that activates at the end of the animation */}
        <div className={`absolute inset-0 transition-all duration-1000 z-10 ${isBlurred ? 'bg-surface/20 backdrop-blur-[3px]' : 'bg-transparent pointer-events-none'}`}></div>
        
        <div className="max-w-7xl mx-auto h-full w-full relative z-20">
          
          {/* Zinger Burger Text (Right Side) */}
          <AnimatePresence>
            {showZinger && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50, transition: { duration: 0.5 } }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className="absolute bottom-36 right-4 md:right-12 z-20 flex flex-col items-end text-right"
              >
                <span className="font-label-lg text-primary-container tracking-[0.2em] uppercase font-bold mb-2">The Signature</span>
                <h2 className="font-display-hero text-3xl md:text-4xl lg:text-6xl uppercase font-black text-on-surface drop-shadow-xl leading-[0.9] tracking-tighter">
                  ZINGER<br/>BURGER
                </h2>
                <p className="font-body-lg text-xl text-on-surface-variant mt-6 tracking-wide drop-shadow-md">
                  Big flavor. Straight from the fryer.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SwiftBite Text (Left Side) */}
          <AnimatePresence>
            {showMainText && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="absolute bottom-36 left-4 md:left-12 z-20 flex flex-col items-start"
              >
                <span className="font-label-lg text-on-surface-variant tracking-[0.2em] uppercase font-semibold mb-2 drop-shadow-md">Est. Premium Quality</span>
                <h1 className="font-display-hero text-4xl md:text-5xl lg:text-7xl uppercase font-black text-on-surface drop-shadow-xl leading-[0.85] tracking-tighter">
                  SWIFT<br/>BITE
                </h1>
                <div className="mt-8 flex flex-col gap-2">
                  <Link className="inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg transition-transform active:scale-95 shadow-[0_8px_28px_rgba(255,184,0,0.32)] w-fit" href="/order-online">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>shopping_bag</span>
                    <span>Order Now</span>
                  </Link>
                  <p className="font-body-md text-lg text-on-surface-variant mt-4 uppercase tracking-widest drop-shadow-md">
                    Fast. Fresh. Tasty.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={showMainText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-margin-mobile lg:px-margin z-30"
        >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-2xl bg-surface-container/90 backdrop-blur-md shadow-md border border-surface-container-high">
        <div className="flex items-center gap-space-sm p-space-xs">
        <span className="material-symbols-outlined text-primary-container text-[28px]">bolt</span>
        <div>
        <div className="font-label-lg text-label-lg text-on-surface font-bold">20 Min Average</div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">Lightning Delivery</div>
        </div>
        </div>
        <div className="flex items-center gap-space-sm p-space-xs">
        <span className="material-symbols-outlined text-primary-container text-[28px]">restaurant</span>
        <div>
        <div className="font-label-lg text-label-lg text-on-surface font-bold">100% Daily Ground</div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">Prime Angus Beef</div>
        </div>
        </div>
        <div className="flex items-center gap-space-sm p-space-xs">
        <span className="material-symbols-outlined text-primary-container text-[28px]">grade</span>
        <div>
        <div className="font-label-lg text-label-lg text-on-surface font-bold">4.9 / 5 Rating</div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">12,000+ Satisfied Bites</div>
        </div>
        </div>
        <div className="flex items-center gap-space-sm p-space-xs">
        <span className="material-symbols-outlined text-primary-container text-[28px]">eco</span>
        <div>
        <div className="font-label-lg text-label-lg text-on-surface font-bold">Farm-To-Table</div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">Crisp Fresh Greens</div>
        </div>
        </div>
        </div>
        </motion.div>
      </section>
    </>
  );
}
