"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="pt-20 min-h-[calc(100vh-100px)]">
      <div className="max-w-7xl mx-auto py-space-xl px-margin-mobile lg:px-margin">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="relative mb-12">
        <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-[32px] text-primary-container">search</span>
        <input type="text" placeholder="Search for burgers, pizza, spicy..." className="w-full bg-surface-container-low text-[24px] lg:text-[32px] font-headline-sm text-on-surface py-6 pl-20 pr-8 rounded-full border border-surface-container focus:border-primary-container outline-none transition-colors shadow-2xl" autoFocus />
      </motion.div>
      <div className="text-center py-20 text-on-surface-variant">
        <span className="material-symbols-outlined text-[48px] opacity-20 mb-4 block">restaurant_menu</span>
        <p className="font-body-lg">Type something to ignite the grills...</p>
      </div>
    </div>
    </div>
  );
}
