"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="pt-20 min-h-[calc(100vh-100px)]">
      <div className="max-w-7xl mx-auto py-space-xl px-margin-mobile lg:px-margin">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden h-[60vh] mb-space-xl">
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute bottom-10 left-10 max-w-2xl">
          <span className="px-3 py-1 bg-primary-container text-on-primary rounded-full font-label-md uppercase tracking-wider mb-4 inline-block">Our Story</span>
          <h1 className="font-display-hero text-on-surface leading-none">Born in the <span className="text-primary-container">Heat</span>.</h1>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl text-on-surface-variant font-body-xl leading-relaxed">
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          Founded on the quiet obsession that high-speed dining should never mean cutting corners. SwiftBite started in a single bustling downtown alley kitchen with one roaring cast-iron flat top and a relentless passion for deep, unapologetic flavor.
        </motion.p>
        <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          Today, we blend high-velocity ordering tech with Michelin-trained kitchen fundamentals: custom daily butchered meat blends, fresh heirloom produce, and our bespoke 24-hour dough fermentation process.
        </motion.p>
      </div>
    </div>
    </div>
  );
}
