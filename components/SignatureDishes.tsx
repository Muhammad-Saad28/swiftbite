"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SignatureDishes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
  };

  return (
    <>
      {/**/}
<section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-surface overflow-hidden">
<div className="max-w-7xl mx-auto">
<motion.div 
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
  className="flex flex-col mb-space-lg"
>
<span className="font-label-md text-label-md text-primary-container uppercase tracking-widest font-bold">Chef's Reserve</span>
<h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl uppercase text-on-surface">Signature Showcase</h2>
</motion.div>
{/**/}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
{/**/}
<motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.7, type: "spring" }}
  className="lg:col-span-7 rounded-2xl bg-surface-container-low overflow-hidden shadow-xl flex flex-col justify-between group"
>
<div className="relative w-full h-80 sm:h-96 bg-surface-container-lowest overflow-hidden">
<img alt="Chef Signature Swift Smash Burger on dark slate" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEuoKotgtqgNVCSYkfBMh1fbURN9Sm0lD9kexxMnO58A6XrDIr7nfTz6po5XdJE1BjC4eo4b-y5SfP1MficiVP2IJarWSC1w8jVsljQNgXfCyWOyM3Bb7QELHaMOADPmEH6EgTgHaSP2qBZWGb3gRytUxih5nMdexeyDCkem0K8SBc-2P72XdgjAbIrRsTDQkxR2saWYxYoPJWYzaWcrnaZ62P74dyBJPlukeBJQgs5O5-9rQluMR4"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 px-space-md py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md uppercase font-bold shadow-lg">
              Culinary Flagship
            </div>
</div>
<div className="p-space-lg -mt-10 relative z-10 bg-surface-container-low/95 backdrop-blur-sm rounded-t-3xl border-t border-surface-container transition-colors group-hover:border-primary-container/30">
<div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
<span className="px-space-sm py-0.5 rounded bg-surface-container text-primary-container font-label-md text-label-md">Double Beef</span>
<span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md">Aged Cheddar</span>
<span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md">Artisan Brioche</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-sm">
<h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary-container transition-colors">The Mega Swift Smash Experience</h3>
<span className="font-price-tag text-headline-sm text-primary-container">PKR 15.95</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Crafted with two custom 45-day dry-aged beef blends, smashed onto an 550° griddle until lace-thin caramelized crusts form. Topped with molten double cheddar, smoky bacon rashers, and our secret Swift umami dressing.
            </p>
<div className="flex flex-wrap items-center gap-space-md">
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-space-lg py-3 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg transition-colors shadow-[0_4px_16px_rgba(255,184,0,0.3)] hover:shadow-[0_4px_24px_rgba(255,184,0,0.5)] flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[18px]">restaurant</span>
<span>Order Signature Dish</span>
</motion.button>
<span className="font-body-sm text-body-sm text-on-surface-variant">Includes hand-cut dipping sauce</span>
</div>
</div>
</motion.div>
{/**/}
<motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-50px" }}
  className="lg:col-span-5 flex flex-col gap-space-lg justify-between"
>
{/**/}
<motion.div variants={itemVariants} className="group rounded-2xl bg-surface-container-low p-space-md flex flex-col sm:flex-row gap-space-md items-center shadow-md border border-transparent hover:border-primary-container/30 hover:shadow-xl hover:shadow-primary-container/5 transition-all cursor-pointer">
<div className="w-full sm:w-44 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-lowest">
<img alt="Crisp fried chicken drumsticks with spicy hot honey glaze" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9WUlWypaEjCOzCSARcMTL2RgQIexzRt169OAIsIVkqOMOTfTZQ2djGEv3XC7xAkbhzhFetAHBC5EAXnYB1vklslDU6bvnCIyS8fOJcxVazwwFmzk4PP8FIzAMlbc7YmEYWldpOVxDobyQZEnzkqj7-BfL4BC5181VB6onS3-m9FRpYSqLBCkUlv-95rtfsoX2pfTJauCiKQa7M2LGliagKhtnv9TyZTedQwycesvUuzTnC-RdKE5W"/>
</div>
<div className="flex flex-col justify-between w-full">
<div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary-container font-semibold uppercase">Nashville Heat</span>
<span className="font-price-tag text-price-tag text-on-surface group-hover:text-primary-container transition-colors">PKR 18.00</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary-container transition-colors">Nashville Fire Crunch Box</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">Crispy battered whole wings tossed with cayenne glaze, house dill pickles, and buttermilk herb dip.</p>
</div>
<button className="mt-space-md inline-flex items-center gap-space-xs text-primary-container font-label-md text-label-md hover:underline w-fit" type="button">
<span>Add to order</span>
<span className="material-symbols-outlined text-[16px] transform group-hover:rotate-90 transition-transform">add_circle</span>
</button>
</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} className="group rounded-2xl bg-surface-container-low p-space-md flex flex-col sm:flex-row gap-space-md items-center shadow-md border border-transparent hover:border-primary-container/30 hover:shadow-xl hover:shadow-primary-container/5 transition-all cursor-pointer">
<div className="w-full sm:w-44 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-lowest">
<img alt="Slice of artisan wood fired pizza with stretchy cheese" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_gIZSmlJtDrcsZ0ubljBrS8_TusODMgCy2bpLbRnroSPEk8tSsGmvt6dZXzexiGCAroKy3rZSMcPgla3f82PDwMAIoPLFI030qxP8b7Dp-HvP9Rx1_xTXMMTtseiPaJImxn39kRRi_l5YpO6SafGjoE7RqbmzQRqkdn_Y4_6LWiAzPQsg_Q7BKy6uhRnFWp9iCu9YGwcFAGG3_zheEprxpUDzz0WzHHQxAGQ5I_hXSXb7m9zR52e"/>
</div>
<div className="flex flex-col justify-between w-full">
<div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary-container font-semibold uppercase">Stone Oven</span>
<span className="font-price-tag text-price-tag text-on-surface group-hover:text-primary-container transition-colors">PKR 17.50</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary-container transition-colors">Charred Soppressata Pie</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">Crisp blistering rim, rich San Marzano plum tomatoes, whole milk curd, hot honey drizzle, fresh oregano.</p>
</div>
<button className="mt-space-md inline-flex items-center gap-space-xs text-primary-container font-label-md text-label-md hover:underline w-fit" type="button">
<span>Add to order</span>
<span className="material-symbols-outlined text-[16px] transform group-hover:rotate-90 transition-transform">add_circle</span>
</button>
</div>
</motion.div>
</motion.div>
</div>
</div>
</section>
    </>
  );
}
