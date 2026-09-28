"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="pt-20 min-h-[calc(100vh-100px)]">
      <div className="max-w-7xl mx-auto py-space-xl px-margin-mobile lg:px-margin text-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20">
        <span className="material-symbols-outlined text-[64px] text-surface-container-highest mb-4 block">favorite</span>
        <h1 className="font-display-hero text-on-surface uppercase mb-4">Your <span className="text-primary-container">Cravings</span></h1>
        <p className="text-on-surface-variant font-body-lg mb-8">You haven't saved any master-crafted dishes to your wishlist yet.</p>
        <a href="/menu" className="inline-block px-8 py-4 bg-primary-container text-on-primary rounded-full font-label-lg transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,184,0,0.3)]">Explore the Menu</a>
      </motion.div>
    </div>
    </div>
  );
}
