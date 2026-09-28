"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('website_products').select('*').eq('is_active', true);
      if (data) setProducts(data);
    }
    fetchProducts();
  }, []);

  const categories = ['All', 'Burgers', 'Shawarma', 'Pizza', 'Fried Chicken', 'Sides', 'Drinks'];
  const filteredProducts = category === 'All' ? products : products.filter(p => p.metadata?.category === category);

  return (
    <div className="max-w-7xl mx-auto py-space-xl px-margin-mobile lg:px-margin pt-32 min-h-[calc(100vh-100px)]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface mb-space-sm">
          Our <span className="text-primary-container">Menu</span>
        </h1>
        <p className="font-body-xl text-on-surface-variant max-w-2xl mb-space-xl">Explore our full range of hyper-crafted late-night essentials. Filter by category to find your perfect craving.</p>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-space-sm overflow-x-auto pb-4 mb-space-lg scrollbar-none">
        {categories.map((cat, i) => (
          <button 
            key={i} 
            onClick={() => setCategory(cat)}
            className={`px-space-md py-space-xs rounded-full font-label-md text-label-md flex-shrink-0 transition-colors ${category === cat ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div 
        key={category}
        initial="hidden" 
        animate="show" 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
      >
        {filteredProducts.map((item) => (
          <motion.div key={item.id} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col rounded-xl bg-surface-container-low overflow-hidden shadow-md group hover:bg-surface-container transition-colors">
            <div className="relative h-60 w-full overflow-hidden bg-surface-container-lowest">
              <img src={item.images?.[0] || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800'} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-space-md flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <h3 className="font-headline-sm text-on-surface">{item.name}</h3>
                  <span className="font-price-tag text-primary-container">${(item.price / 100).toFixed(2)}</span>
                </div>
                <p className="font-body-sm text-on-surface-variant line-clamp-2">{item.short_description}</p>
              </div>
              <button onClick={() => alert('Added to Order!')} className="mt-space-md w-full py-2 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary transition-colors text-on-surface font-label-md flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add to Order
              </button>
            </div>
          </motion.div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-12 text-center text-on-surface-variant font-body-lg">
            No items found in this category.
          </div>
        )}
      </motion.div>
    </div>
  );
}
