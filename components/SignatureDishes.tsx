"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useCart } from './CartContext';
import Link from 'next/link';

interface SignatureItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryName: string;
}

export default function SignatureDishes() {
  const { addToCart } = useCart();
  const [primaryDish, setPrimaryDish] = useState<SignatureItem | null>(null);
  const [sideDishes, setSideDishes] = useState<SignatureItem[]>([]);

  useEffect(() => {
    async function loadSignatures() {
      try {
        const { data } = await supabase
          .from('menu_items')
          .select('id, name, price, description, image, categories(name)')
          .in('name', ['Swift Special Mighty', 'Royal Crown Crust', 'Special Tortilla Wrap']);

        if (data && data.length > 0) {
          const mighty = data.find((d: any) => d.name === 'Swift Special Mighty');
          const others = data.filter((d: any) => d.name !== 'Swift Special Mighty');

          if (mighty) {
            const catName = Array.isArray(mighty.categories)
              ? (mighty.categories[0]?.name || 'Burgers')
              : (mighty.categories as any)?.name || 'Burgers';

            setPrimaryDish({
              id: mighty.id,
              name: mighty.name,
              price: mighty.price,
              description: mighty.description || 'Colossal double patty burger with double cheese and secret Swift sauce.',
              image: mighty.image || '/images/beef-burger.png',
              categoryName: catName
            });
          }

          if (others.length > 0) {
            setSideDishes(
              others.map((o: any) => {
                const cName = Array.isArray(o.categories)
                  ? (o.categories[0]?.name || 'Specialty')
                  : (o.categories as any)?.name || 'Specialty';
                return {
                  id: o.id,
                  name: o.name,
                  price: o.price,
                  description: o.description || '',
                  image: o.image || '/images/spicy_wrap.png',
                  categoryName: cName
                };
              })
            );
          }
        }
      } catch (err) {
        console.error('Error fetching signature dishes from DB:', err);
      }
    }
    loadSignatures();
  }, []);

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          {/* Main Primary Showcase */}
          {primaryDish && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, type: "spring" }}
              className="lg:col-span-7 rounded-2xl bg-surface-container-low overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              <div className="relative w-full h-80 sm:h-96 bg-surface-container-lowest overflow-hidden">
                <img 
                  alt={primaryDish.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src={primaryDish.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 px-space-md py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md uppercase font-bold shadow-lg">
                  Culinary Flagship
                </div>
              </div>
              <div className="p-space-lg -mt-10 relative z-10 bg-surface-container-low/95 backdrop-blur-sm rounded-t-3xl border-t border-surface-container transition-colors group-hover:border-primary-container/30">
                <div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
                  <span className="px-space-sm py-0.5 rounded bg-surface-container text-primary-container font-label-md text-label-md">{primaryDish.categoryName}</span>
                  <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md">Double Patty</span>
                  <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md">Melted Cheddar</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-sm">
                  <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary-container transition-colors">{primaryDish.name}</h3>
                  <span className="font-price-tag text-headline-sm text-primary-container">Rs. {primaryDish.price?.toLocaleString()}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  {primaryDish.description}
                </p>
                <div className="flex flex-wrap items-center gap-space-md">
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    onClick={() => {
                      addToCart({
                        id: primaryDish.id,
                        name: primaryDish.name,
                        price: primaryDish.price,
                        image: primaryDish.image
                      });
                    }}
                    className="px-space-lg py-3 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg transition-colors shadow-[0_4px_16px_rgba(255,184,0,0.3)] hover:shadow-[0_4px_24px_rgba(255,184,0,0.5)] flex items-center gap-space-xs" 
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">restaurant</span>
                    <span>Order Signature Dish</span>
                  </motion.button>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Includes signature dipping sauce</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Secondary Signatures */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 flex flex-col gap-space-lg justify-between"
          >
            {sideDishes.map((dish) => (
              <motion.div 
                key={dish.id}
                variants={itemVariants} 
                className="group rounded-2xl bg-surface-container-low p-space-md flex flex-col sm:flex-row gap-space-md items-center shadow-md border border-transparent hover:border-primary-container/30 hover:shadow-xl hover:shadow-primary-container/5 transition-all"
              >
                <div className="w-full sm:w-44 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-lowest">
                  <img 
                    alt={dish.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    src={dish.image}
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-primary-container font-semibold uppercase">{dish.categoryName}</span>
                      <span className="font-price-tag text-price-tag text-on-surface group-hover:text-primary-container transition-colors">Rs. {dish.price?.toLocaleString()}</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary-container transition-colors">{dish.name}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">{dish.description}</p>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart({
                        id: dish.id,
                        name: dish.name,
                        price: dish.price,
                        image: dish.image
                      });
                    }}
                    className="mt-space-md inline-flex items-center gap-space-xs text-primary-container font-label-md text-label-md hover:underline w-fit" 
                    type="button"
                  >
                    <span>Add to order</span>
                    <span className="material-symbols-outlined text-[16px] transform group-hover:rotate-90 transition-transform">add_circle</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
