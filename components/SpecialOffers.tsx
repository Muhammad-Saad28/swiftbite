"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SpecialOffers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
  };

  return (
    <>
      {/**/}
<section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-gradient-to-b from-surface-container-lowest via-surface-container-low to-surface-container-lowest overflow-hidden">
<motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
  className="max-w-7xl mx-auto"
>
<div className="rounded-2xl bg-surface-container p-space-lg lg:p-space-xl relative overflow-hidden shadow-xl border border-surface-container-high hover:border-primary-container/30 transition-colors">
<motion.div 
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
  className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"
></motion.div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg relative z-10">
<div>
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase font-bold mb-space-xs shadow-md">
              Limited-Run Combos
            </div>
<h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl uppercase text-on-surface">Craving More? Taste the Combo Advantage</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Discover dynamic bundle savings, late-night midnight drops, and group feast packs.</p>
</div>
<Link href="/offers" className="px-space-md py-space-sm rounded-full bg-surface-container-highest text-on-surface hover:text-primary-container hover:bg-surface-container-lowest border border-transparent hover:border-primary-container/50 font-label-md text-label-md transition-all flex-shrink-0 shadow-sm hover:shadow-md">
  View All Offers &amp; Combos
</Link>
</div>
<motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-50px" }}
  className="grid grid-cols-1 md:grid-cols-3 gap-space-md relative z-10"
>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="p-space-md rounded-xl bg-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-primary-container/10 border border-transparent hover:border-surface-container-highest transition-all cursor-pointer">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary-container font-label-md text-label-md">Save 20%</span>
<span className="font-label-md text-label-md text-on-surface-variant">Code: SWIFTLUNCH</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">The Swift Lunch Box</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Double Smash Burger + Truffle Parmesan Fries + Cold Craft Soda.</p>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">PKR 16.99 <span className="text-on-surface-variant line-through text-sm">PKR 21.50</span></span>
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => alert("Offer Claimed!")} className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-colors shadow-sm" type="button">Claim</motion.button>
</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="p-space-md rounded-xl bg-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-secondary-container/10 border border-transparent hover:border-surface-container-highest transition-all cursor-pointer">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary-fixed-dim font-label-md text-label-md">Feast Deal</span>
<span className="font-label-md text-label-md text-on-surface-variant">Code: GAMEDAY</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Game Day Wings &amp; Pie</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">2 Large Artisan Wood-Fired Pizzas + 16 Hot Honey Tenders + 4 Dips.</p>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">PKR 38.99 <span className="text-on-surface-variant line-through text-sm">PKR 49.00</span></span>
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => alert("Offer Claimed!")} className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-colors shadow-sm" type="button">Claim</motion.button>
</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="p-space-md rounded-xl bg-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-error-container/10 border border-transparent hover:border-surface-container-highest transition-all cursor-pointer">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded bg-error-container text-error font-label-md text-label-md">After 9 PM</span>
<span className="font-label-md text-label-md text-on-surface-variant">Auto-Applied</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Late Night Burger BOGO 50%</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Buy any signature smash burger and get the second at half off until 3 AM.</p>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">50% Off 2nd</span>
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => alert("Offer Claimed!")} className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-colors shadow-sm" type="button">Claim</motion.button>
</div>
</motion.div>
</motion.div>
</div>
</motion.div>
</section>
    </>
  );
}
