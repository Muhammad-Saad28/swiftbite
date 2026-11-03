"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutClientView() {
  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20 text-center">
          <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">The Origin Story</h2>
          <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mx-auto">
            WE DON&apos;T DO<br/><span className="text-[#FFD700]">AVERAGE.</span>
          </h1>
        </motion.div>

        {/* Cinematic Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-900 mb-20">
          <div className="relative h-[400px] lg:h-auto w-full border-b lg:border-b-0 lg:border-r border-gray-900">
             <Image src="/images/kitchen.png" alt="SwiftBite Kitchen in Lahore" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center bg-[#0a0a0a]">
            <h2 className="font-[family-name:var(--font-epilogue)] text-3xl font-black uppercase tracking-tighter mb-6 text-white">THE ALLEYWAY KITCHEN</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-medium">
              We didn&apos;t start in a boardroom. SwiftBite was forged in a 200 sq.ft kitchen with a single roaring cast-iron flat top in Lahore. The mission was straightforward: elevate and redefine late-night fast food across the city.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Fast food too often means frozen compromise. We stripped away the corporate shortcuts and focused on authentic culinary execution: 100% daily fresh ground beef, marinated crispy zinger chicken fillets, and slow-proofed pizza dough.
            </p>
          </div>
        </div>

        {/* Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "VELOCITY", desc: "Our kitchens operate with synchronized culinary precision, ensuring your food leaves the grills piping hot with an average 20-minute delivery time." },
            { title: "PRECISION", desc: "Every beef burger is smashed with calibrated pressure to lock in juices and achieve the crisp caramelized Maillard crust." },
            { title: "COMMUNITY", desc: "Proudly serving Dera Gujran, Manawan, Daroghawala, and broader Lahore with late-night food from 3:00 PM until 3:00 AM daily." }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] p-10 border border-gray-900 hover:border-[#FFD700] transition-colors"
            >
              <h3 className="font-[family-name:var(--font-epilogue)] text-2xl font-black uppercase tracking-tight mb-4 text-[#FFD700]">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center p-12 bg-[#0a0a0a] border border-[#FFD700]/30 max-w-2xl mx-auto">
          <h3 className="font-[family-name:var(--font-epilogue)] text-3xl font-black uppercase text-white mb-4">
            Ready to taste the difference?
          </h3>
          <p className="text-gray-400 text-sm mb-6">Explore our full menu or check out today&apos;s featured combos.</p>
          <div className="flex justify-center gap-4">
            <Link href="/menu" className="px-8 py-3 bg-[#FFD700] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-colors">
              VIEW MENU
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-gray-700 text-white font-bold uppercase text-xs tracking-widest hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
              FIND US
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
