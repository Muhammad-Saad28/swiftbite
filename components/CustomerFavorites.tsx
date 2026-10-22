"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useCart } from './CartContext';

interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryName: string;
}

export default function CustomerFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const { addToCart } = useCart();
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const { data } = await supabase
          .from('menu_items')
          .select('id, name, price, description, image, categories(name)')
          .eq('featured', true)
          .limit(8);

        if (data && data.length > 0) {
          setFavorites(
            data.map((item: any) => ({
              id: item.id,
              name: item.name,
              price: item.price,
              description: item.description || '',
              image: item.image || 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
              categoryName: item.categories?.name || 'Popular'
            }))
          );
        }
      } catch (err) {
        console.error('Error fetching favorites from DB:', err);
      }
    }
    fetchFavorites();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollerRef.current) {
      const offset = direction === 'left' ? -350 : 350;
      scrollerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
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
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              onClick={() => scroll('left')}
              aria-label="Scroll left" 
              className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shadow-sm"  
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              onClick={() => scroll('right')}
              aria-label="Scroll right" 
              className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shadow-sm"  
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </motion.button>
          </div>
        </div>

        <motion.div 
          ref={scrollerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex gap-space-md overflow-x-auto pb-space-md scroll-smooth scrollbar-none"
        >
          {favorites.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants} 
              whileHover={{ y: -8, transition: { duration: 0.2 } }} 
              className="w-72 flex-shrink-0 rounded-2xl bg-surface-container-low p-space-md shadow-md hover:shadow-xl hover:shadow-primary-container/10 flex flex-col justify-between transition-shadow border border-transparent hover:border-surface-container-high"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-space-sm bg-surface-container-lowest">
                  <img 
                    alt={item.name} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                    src={item.image}
                  />
                </div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <div className="flex items-center gap-1 text-primary-container">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
                    <span className="font-label-md text-label-md font-bold">4.9</span>
                  </div>
                  <span className="text-xs uppercase font-semibold text-primary-container/80 tracking-wider">{item.categoryName}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 line-clamp-1">{item.name}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{item.description}</p>
              </div>
              <div className="flex items-center justify-between mt-space-md pt-space-xs border-t border-surface-container">
                <span className="font-price-tag text-headline-sm text-primary-container">Rs. {item.price?.toLocaleString()}</span>
                <motion.button 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }} 
                  onClick={() => {
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image
                    });
                  }}
                  className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-secondary-container transition-colors" 
                  type="button" 
                  aria-label="Add to cart"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
