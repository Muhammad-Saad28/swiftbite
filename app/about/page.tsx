"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20 text-center">
          <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">The Origin</h2>
          <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mx-auto">
            WE DON'T DO<br/><span className="text-[#FFD700]">AVERAGE.</span>
          </h1>
        </motion.div>

        {/* Cinematic Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-900 mb-20">
          <div className="relative h-[400px] lg:h-auto w-full border-b lg:border-b-0 lg:border-r border-gray-900">
             <Image src="/images/kitchen.png" alt="SwiftBite Kitchen" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center bg-[#0a0a0a]">
            <h3 className="font-[family-name:var(--font-epilogue)] text-3xl font-black uppercase tracking-tighter mb-6 text-white">THE ALLEYWAY KITCHEN</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-medium">
              We didn't start in a boardroom. We started in a 200 sq.ft kitchen with a single roaring cast-iron flat top. The mission was simple: redefine late-night food.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Fast food usually means compromises. We stripped away the corporate bloat and replaced it with Michelin-trained fundamentals. Custom meat blends. 24-hour dough. Unapologetic flavor.
            </p>
          </div>
        </div>

        {/* Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "VELOCITY", desc: "Our kitchens are engineered for speed, delivering your bite at warp speed without sacrificing an ounce of quality." },
            { title: "PRECISION", desc: "Every burger is smashed with exact pressure to achieve the ultimate Maillard reaction. Science meets street food." },
            { title: "CULTURE", desc: "We aren't just feeding you. We're soundtracking your late nights and fueling your midnight adventures." }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] p-10 border border-gray-900 hover:border-[#FFD700] transition-colors"
            >
              <h4 className="text-[#FFD700] font-[family-name:var(--font-epilogue)] text-3xl font-black tracking-tighter mb-4">{item.title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
