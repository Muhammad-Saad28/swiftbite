"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="pt-20 min-h-[calc(100vh-100px)]">
      <div className="max-w-3xl mx-auto py-space-xl px-margin-mobile lg:px-margin">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-surface-container-low p-8 lg:p-12 rounded-3xl border border-surface-container shadow-2xl">
        <div className="text-center mb-10">
          <span className="px-4 py-1.5 rounded-full bg-primary-container/10 text-primary-container font-label-md uppercase tracking-widest font-bold mb-4 inline-block">Checkout Protocol</span>
          <h1 className="font-headline-xl text-on-surface uppercase">Initialize <span className="text-primary-container">Order</span></h1>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-surface-container border border-primary-container/30 cursor-pointer hover:bg-surface-container-high transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex justify-center items-center"><span className="material-symbols-outlined">two_wheeler</span></div>
              <div>
                <h3 className="font-headline-sm text-on-surface">Delivery (Express)</h3>
                <p className="text-on-surface-variant text-sm">Avg 18-24 mins directly to your door.</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container border border-transparent cursor-pointer hover:bg-surface-container-high transition-colors opacity-70 hover:opacity-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface flex justify-center items-center"><span className="material-symbols-outlined">storefront</span></div>
              <div>
                <h3 className="font-headline-sm text-on-surface">Pickup / Curbside</h3>
                <p className="text-on-surface-variant text-sm">Ready in 10 mins. We'll bring it to your car.</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-10 py-5 bg-primary-container text-on-primary rounded-2xl font-label-lg text-[18px] hover:bg-secondary-container transition-transform active:scale-95 shadow-[0_10px_30px_rgba(255,184,0,0.25)] flex justify-center items-center gap-3">
          Continue to Payment <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </motion.div>
    </div>
    </div>
  );
}
