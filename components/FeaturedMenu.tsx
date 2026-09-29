"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeaturedMenu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchFeatured() {
      const { data } = await supabase.from('website_products').select('*').eq('is_active', true).eq('is_featured', true).limit(3);
      if (data) setProducts(data);
    }
    fetchFeatured();
  }, []);

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
    <section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-surface" id="featured-menu">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-xl"
        >
          <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-md tracking-widest uppercase mb-space-sm inline-block font-bold">Menu</span>
          <h2 className="font-display-hero text-on-surface uppercase tracking-tight">Made to <span className="text-primary-container">Crave</span></h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md lg:gap-space-lg w-full mb-space-xl"
        >
          {products.map((item) => (
            <motion.div variants={itemVariants} key={item.id} className="group relative rounded-2xl bg-surface-container-low overflow-hidden border border-surface-container transition-all hover:border-primary-container/50 shadow-sm hover:shadow-xl hover:shadow-primary-container/5 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden">
                <img alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src={item.images?.[0] || ''}/>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => {
                  const currentWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                  if (!currentWishlist.some((i: any) => i.id === item.id)) {
                    currentWishlist.push(item);
                    localStorage.setItem('wishlist', JSON.stringify(currentWishlist));
                    window.dispatchEvent(new Event('wishlist:add'));
                  }
                }} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm text-on-surface hover:text-error hover:bg-surface flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </motion.button>
              </div>
              <div className="p-space-md flex flex-col flex-1">
                <div className="flex justify-between items-start mb-space-xs gap-4">
                  <h3 className="font-headline-sm text-on-surface group-hover:text-primary-container transition-colors">{item.name}</h3>
                  <div className="font-price-tag text-primary-container text-right whitespace-nowrap">PKR {(item.price / 100).toFixed(2)}</div>
                </div>
                <p className="font-body-sm text-on-surface-variant mb-space-md line-clamp-2">{item.short_description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">star</span> 4.8
                  </div>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => {
                    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
                    currentCart.push(item);
                    localStorage.setItem('cart', JSON.stringify(currentCart));
                    window.dispatchEvent(new Event('cart:add'));
                  }} className="px-space-md py-space-xs rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-on-surface font-label-md transition-colors flex items-center gap-2">
                    <span>Add</span>
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link className="inline-flex items-center justify-center px-space-xl py-4 rounded-full bg-surface-container-low border border-surface-container-high hover:bg-surface-container hover:border-primary-container text-on-surface font-label-lg text-label-lg transition-all hover:shadow-lg hover:shadow-primary-container/20 active:scale-95" href="/menu">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
