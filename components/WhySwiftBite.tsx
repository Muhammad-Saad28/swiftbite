"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function WhySwiftBite() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <>
      {/**/}
<section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-surface-container-lowest overflow-hidden">
<div className="max-w-7xl mx-auto">
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
  className="text-center max-w-2xl mx-auto mb-space-xl"
>
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container mb-space-xs shadow-sm">
<span className="material-symbols-outlined text-primary-container text-[16px]">bolt</span>
<span className="font-label-md text-label-md text-primary-container uppercase">The Swift Standard</span>
</div>
<h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl uppercase text-on-surface">Why SwiftBite?</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          Reinventing fast casual dining through uncompromising culinary discipline, searing precision, and unyielding speed.
        </p>
</motion.div>
<motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-50px" }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md"
>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8 }} className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm hover:shadow-xl hover:shadow-primary-container/5 flex flex-col justify-between group hover:bg-surface-container border border-transparent hover:border-primary-container/20 transition-all cursor-pointer">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-xl text-headline-xl text-primary-container/30 font-extrabold group-hover:text-primary-container transition-colors">01</span>
<span className="material-symbols-outlined text-primary-container text-[28px] transform group-hover:scale-125 transition-transform duration-300">agriculture</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Fresh Ingredients</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Never frozen. Sourced directly from regional sustainable family farms. Scratch-made brioche buns and chef sauces whisked every single morning.
            </p>
</div>
<div className="mt-space-md pt-space-sm font-label-md text-label-md text-primary-container border-t border-surface-container-high group-hover:border-primary-container/30 transition-colors">100% Certified Local</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8 }} className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm hover:shadow-xl hover:shadow-primary-container/5 flex flex-col justify-between group hover:bg-surface-container border border-transparent hover:border-primary-container/20 transition-all cursor-pointer">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-xl text-headline-xl text-primary-container/30 font-extrabold group-hover:text-primary-container transition-colors">02</span>
<span className="material-symbols-outlined text-primary-container text-[28px] transform group-hover:scale-125 transition-transform duration-300">soup_kitchen</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Bold Flavors</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Proprietary dry rubs, charred wood embers, slow-simmered marinades, and an intense harmony of crisp sweet heat and umami richness.
            </p>
</div>
<div className="mt-space-md pt-space-sm font-label-md text-label-md text-primary-container border-t border-surface-container-high group-hover:border-primary-container/30 transition-colors">Proprietary Spice Blends</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8 }} className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm hover:shadow-xl hover:shadow-primary-container/5 flex flex-col justify-between group hover:bg-surface-container border border-transparent hover:border-primary-container/20 transition-all cursor-pointer">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-xl text-headline-xl text-primary-container/30 font-extrabold group-hover:text-primary-container transition-colors">03</span>
<span className="material-symbols-outlined text-primary-container text-[28px] transform group-hover:scale-125 transition-transform duration-300">local_fire_department</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Made Fresh</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Cooked to order in under four minutes. Searing 500° flat-top cast iron griddles and scorching 800° stone ovens mean no warming trays—ever.
            </p>
</div>
<div className="mt-space-md pt-space-sm font-label-md text-label-md text-primary-container border-t border-surface-container-high group-hover:border-primary-container/30 transition-colors">Zero Heat Lamps</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8 }} className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm hover:shadow-xl hover:shadow-primary-container/5 flex flex-col justify-between group hover:bg-surface-container border border-transparent hover:border-primary-container/20 transition-all cursor-pointer">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-xl text-headline-xl text-primary-container/30 font-extrabold group-hover:text-primary-container transition-colors">04</span>
<span className="material-symbols-outlined text-primary-container text-[28px] transform group-hover:scale-125 transition-transform duration-300">two_wheeler</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Swift Service</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Proprietary thermal packaging locks steam away and preserves crisp textures. Rapid curbside lockboxes and sub-20 minute direct couriers.
            </p>
</div>
<div className="mt-space-md pt-space-sm font-label-md text-label-md text-primary-container border-t border-surface-container-high group-hover:border-primary-container/30 transition-colors">Insulated Express Transit</div>
</motion.div>
</motion.div>
</div>
</section>
    </>
  );
}
