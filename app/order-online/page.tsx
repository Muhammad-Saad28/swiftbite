"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight } from 'lucide-react';

export default function OrderOnlinePage() {
  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] flex items-center justify-center overflow-hidden relative">
      
      {/* Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-[800px] h-[800px] border border-[#FFD700] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.05, 0.1] }} 
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-[1200px] h-[1200px] border border-[#FFD700] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-[#FFD700] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-6 flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-ping" />
            Kitchen Systems Online
          </h2>
          
          <h1 className="font-[family-name:var(--font-epilogue)] text-6xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
            START YOUR<br/><span className="text-[#FFD700]">BITE.</span>
          </h1>

          <p className="text-gray-400 font-medium text-lg md:text-xl max-w-2xl mx-auto mb-16">
            Access the full midnight menu, configure your exact flavor profile, and secure your drop before it sells out.
          </p>

          <Link href="/menu">
            <MagneticButton className="bg-[#FFD700] text-black px-12 py-6 text-xl md:text-2xl font-black tracking-widest uppercase flex items-center mx-auto hover:bg-white transition-colors shadow-[0_0_40px_rgba(255,215,0,0.3)]">
              INITIALIZE ORDER <ChevronRight className="w-8 h-8 ml-2" />
            </MagneticButton>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
