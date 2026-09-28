"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="pt-20 min-h-[calc(100vh-100px)]">
      <div className="max-w-7xl mx-auto py-space-xl px-margin-mobile lg:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
          <h1 className="font-display-hero text-on-surface uppercase mb-6">Hit Our <span className="text-primary-container">Line</span></h1>
          <p className="font-body-lg text-on-surface-variant mb-10">Catering? Feedback? Just want to tell the chef the burger changed your life? Drop us a message.</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="w-full bg-surface-container p-4 rounded-xl text-on-surface border border-transparent focus:border-primary-container outline-none transition-colors" />
            <input type="email" placeholder="Your Email" className="w-full bg-surface-container p-4 rounded-xl text-on-surface border border-transparent focus:border-primary-container outline-none transition-colors" />
            <textarea placeholder="What's up?" rows={5} className="w-full bg-surface-container p-4 rounded-xl text-on-surface border border-transparent focus:border-primary-container outline-none transition-colors resize-none"></textarea>
            <button className="w-full py-4 bg-primary-container text-on-primary rounded-xl font-label-lg mt-2 hover:bg-secondary-container transition-transform active:scale-95">Send Transmission</button>
          </form>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="rounded-3xl bg-surface-container-low p-8 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="font-headline-sm text-primary-container mb-2">HQ Location</h3>
            <p className="text-on-surface-variant">742 Evergreen Blvd<br/>Downtown Arts District, Sector 4</p>
          </div>
          <div>
            <h3 className="font-headline-sm text-primary-container mb-2">Direct Hotline</h3>
            <p className="text-on-surface-variant">(555) 794-3824 (555-SWIFT)</p>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
