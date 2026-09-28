"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="pt-20 min-h-[calc(100vh-100px)]">
      <div className="max-w-7xl mx-auto py-space-xl px-margin-mobile lg:px-margin">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="font-display-hero uppercase text-on-surface mb-space-lg">Exclusive <span className="text-primary-container">Drops</span></motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {[1, 2, 3, 4].map((offer, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="relative p-space-xl rounded-2xl bg-surface-container border border-surface-container-high overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-colors" />
            <span className="px-3 py-1 bg-error-container text-on-error-container text-xs font-bold uppercase rounded mb-4 inline-block tracking-wider">Limited Time</span>
            <h2 className="font-headline-lg text-on-surface mb-2">Midnight BOGO Combo {offer}</h2>
            <p className="font-body-md text-on-surface-variant mb-6">Order any signature smash burger after 10 PM and get a second one half off, plus free truffle fries.</p>
            <button className="px-6 py-3 bg-primary-container text-on-primary rounded-full font-label-lg hover:bg-secondary-container transition-transform active:scale-95 shadow-[0_0_15px_rgba(255,184,0,0.3)]">Claim Offer</button>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
