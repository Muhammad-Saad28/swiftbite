"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CustomerFavorites() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <>
      {/**/}
<section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-surface-container-lowest overflow-hidden">
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
  className="max-w-7xl mx-auto"
>
<div className="flex items-end justify-between mb-space-lg">
<div>
<span className="font-label-md text-label-md text-primary-container uppercase tracking-widest font-bold">Community Loved</span>
<h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl uppercase text-on-surface mt-space-xs">Customer Favorites</h2>
</div>
<div className="hidden sm:flex items-center gap-space-xs">
<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Scroll left" className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shadow-sm"  type="button">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</motion.button>
<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Scroll right" className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shadow-sm"  type="button">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</motion.button>
</div>
</div>
{/**/}
<motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-50px" }}
  className="flex gap-space-md overflow-x-auto pb-space-md scroll-smooth scrollbar-none" id="favorites-scroller"
>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="w-72 flex-shrink-0 rounded-2xl bg-surface-container-low p-space-md shadow-md hover:shadow-xl hover:shadow-primary-container/10 flex flex-col justify-between transition-shadow cursor-pointer border border-transparent hover:border-surface-container-high">
<div>
<div className="h-44 rounded-xl overflow-hidden mb-space-sm bg-surface-container-lowest">
<img alt="The Classic Swift Deluxe burger" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEuoKotgtqgNVCSYkfBMh1fbURN9Sm0lD9kexxMnO58A6XrDIr7nfTz6po5XdJE1BjC4eo4b-y5SfP1MficiVP2IJarWSC1w8jVsljQNgXfCyWOyM3Bb7QELHaMOADPmEH6EgTgHaSP2qBZWGb3gRytUxih5nMdexeyDCkem0K8SBc-2P72XdgjAbIrRsTDQkxR2saWYxYoPJWYzaWcrnaZ62P74dyBJPlukeBJQgs5O5-9rQluMR4"/>
</div>
<div className="flex items-center gap-1 text-primary-container mb-1">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="font-label-md text-label-md font-bold">4.9</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(3,240 orders)</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">The Classic Swift Deluxe</h4>
</div>
<div className="flex items-center justify-between pt-space-md mt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">PKR 13.50</span>
<button className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm" type="button">
              Add +
            </button>
</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="w-72 flex-shrink-0 rounded-2xl bg-surface-container-low p-space-md shadow-md hover:shadow-xl hover:shadow-primary-container/10 flex flex-col justify-between transition-shadow cursor-pointer border border-transparent hover:border-surface-container-high">
<div>
<div className="h-44 rounded-xl overflow-hidden mb-space-sm bg-surface-container-lowest">
<img alt="Spicy Honey Butter Tenders" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9WUlWypaEjCOzCSARcMTL2RgQIexzRt169OAIsIVkqOMOTfTZQ2djGEv3XC7xAkbhzhFetAHBC5EAXnYB1vklslDU6bvnCIyS8fOJcxVazwwFmzk4PP8FIzAMlbc7YmEYWldpOVxDobyQZEnzkqj7-BfL4BC5181VB6onS3-m9FRpYSqLBCkUlv-95rtfsoX2pfTJauCiKQa7M2LGliagKhtnv9TyZTedQwycesvUuzTnC-RdKE5W"/>
</div>
<div className="flex items-center gap-1 text-primary-container mb-1">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="font-label-md text-label-md font-bold">5.0</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(4,810 orders)</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Spicy Honey Butter Tenders</h4>
</div>
<div className="flex items-center justify-between pt-space-md mt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">PKR 12.75</span>
<button className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm" type="button">
              Add +
            </button>
</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="w-72 flex-shrink-0 rounded-2xl bg-surface-container-low p-space-md shadow-md hover:shadow-xl hover:shadow-primary-container/10 flex flex-col justify-between transition-shadow cursor-pointer border border-transparent hover:border-surface-container-high">
<div>
<div className="h-44 rounded-xl overflow-hidden mb-space-sm bg-surface-container-lowest">
<img alt="Smoked Pepperoni Truffle Pie" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_gIZSmlJtDrcsZ0ubljBrS8_TusODMgCy2bpLbRnroSPEk8tSsGmvt6dZXzexiGCAroKy3rZSMcPgla3f82PDwMAIoPLFI030qxP8b7Dp-HvP9Rx1_xTXMMTtseiPaJImxn39kRRi_l5YpO6SafGjoE7RqbmzQRqkdn_Y4_6LWiAzPQsg_Q7BKy6uhRnFWp9iCu9YGwcFAGG3_zheEprxpUDzz0WzHHQxAGQ5I_hXSXb7m9zR52e"/>
</div>
<div className="flex items-center gap-1 text-primary-container mb-1">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="font-label-md text-label-md font-bold">4.8</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(2,900 orders)</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Smoked Truffle Pie</h4>
</div>
<div className="flex items-center justify-between pt-space-md mt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">PKR 17.00</span>
<button className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm" type="button">
              Add +
            </button>
</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="w-72 flex-shrink-0 rounded-2xl bg-surface-container-low p-space-md shadow-md hover:shadow-xl hover:shadow-primary-container/10 flex flex-col justify-between transition-shadow cursor-pointer border border-transparent hover:border-surface-container-high">
<div>
<div className="h-44 rounded-xl overflow-hidden mb-space-sm bg-surface-container-lowest">
<img className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" data-alt="Golden crisp garlic French fries dusted with minced fresh garlic and chopped parsley served in a dark ceramic basket with dip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD32ibi2XouWklZNlD2izCLILep8MaUNjiQWipI5I8xYcwzZ4CO8_93EgWWZ-x2hM3R82iD5vyvZzJlLW1leIAMOSME8DKG0pWfyT3nBsf_2xQDVSbLYNjNe3-ybGX8DyEkRDb1Ig74BesZxuTHEjeXWGSoJTZ6aanLmJzzI-3aGF2lAePa2tyQBzPovxAcqtJXdIeBkHK4Zgup3DBv8_DdZisYEKz8cOD_4m90iCvQUgvSWQsaGMT7"/>
</div>
<div className="flex items-center gap-1 text-primary-container mb-1">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="font-label-md text-label-md font-bold">4.9</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(1,890 orders)</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Crispy Garlic Fries</h4>
</div>
<div className="flex items-center justify-between pt-space-md mt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">PKR 5.50</span>
<button className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm" type="button">
              Add +
            </button>
</div>
</motion.div>
{/**/}
<motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="w-72 flex-shrink-0 rounded-2xl bg-surface-container-low p-space-md shadow-md hover:shadow-xl hover:shadow-primary-container/10 flex flex-col justify-between transition-shadow cursor-pointer border border-transparent hover:border-surface-container-high">
<div>
<div className="h-44 rounded-xl overflow-hidden mb-space-sm bg-surface-container-lowest">
<img className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" data-alt="A warm molten chocolate lava pastry cut open with decadent liquid fudge oozing out against a rustic dark backdrop with powdered sugar dusting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0i1nLJIxACyAYwFKkVzKTO1AKtqZM1neccihE-RvnY3aYSvL-7GAkKe6Z2HONWLGT7UQiplQ_QHuoIbsg24sFqT1CAcCaErP2WhBe-wuD2jFqzq9EQUaPhLw2x8mVm4qN3RtO5dfL35TRf3gM16tmtT-fksFlGhorTD3oBzKZllci6P2S3gFsqgcdSUJtb_tU6ypipF3eqsBUed4eZGv37bzOK0tYXObavgUsq07Zv2wzix6rEPZG"/>
</div>
<div className="flex items-center gap-1 text-primary-container mb-1">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="font-label-md text-label-md font-bold">4.9</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(1,420 orders)</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Molten Choco-Lava Pie</h4>
</div>
<div className="flex items-center justify-between pt-space-md mt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">PKR 6.25</span>
<button className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm" type="button">
              Add +
            </button>
</div>
</motion.div>
</motion.div>
</motion.div>
</section>
    </>
  );
}
