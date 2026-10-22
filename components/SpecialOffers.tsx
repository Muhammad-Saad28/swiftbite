"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useCart } from './CartContext';

interface DealProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function SpecialOffers() {
  const [deals, setDeals] = useState<DealProduct[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchOffers() {
      try {
        const { data } = await supabase
          .from('menu_items')
          .select('id, name, price, description, image, categories!inner(name)')
          .eq('categories.name', 'Combo Deals')
          .limit(3);

        if (data && data.length > 0) {
          setDeals(
            data.map((d: any) => ({
              id: d.id,
              name: d.name,
              price: d.price,
              description: d.description || '',
              image: d.image || 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80'
            }))
          );
        }
      } catch (err) {
        console.error('Error fetching combo offers from DB:', err);
      }
    }
    fetchOffers();
  }, []);

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
          />
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
            {deals.map((deal) => (
              <motion.div 
                key={deal.id}
                variants={itemVariants} 
                whileHover={{ y: -8, transition: { duration: 0.2 } }} 
                className="p-space-md rounded-xl bg-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-primary-container/10 border border-transparent hover:border-surface-container-highest transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary-container font-label-md text-label-md">Value Deal</span>
                    <span className="font-price-tag text-headline-sm text-primary-container">Rs. {deal.price?.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-44 rounded-lg overflow-hidden mb-3 bg-black">
                    <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">{deal.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{deal.description}</p>
                </div>
                <button 
                  onClick={() => {
                    addToCart({
                      id: deal.id,
                      name: deal.name,
                      price: deal.price,
                      image: deal.image
                    });
                  }}
                  className="w-full py-2.5 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  <span>Add Combo to Order</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
