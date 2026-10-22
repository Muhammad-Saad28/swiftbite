"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useCart } from '../../components/CartContext';
import { supabase } from '../../lib/supabase';

interface DealItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  active: boolean;
}

const fallbackDeals: DealItem[] = [
  {
    id: "f0000000-0000-0000-0000-000000000030",
    name: "Deal 1 — Zinger Combo",
    price: 550,
    description: "1 Zinger Burger + 1 Regular Fries + 1 Regular Drink",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000031",
    name: "Deal 2 — Patty Burger Combo",
    price: 550,
    description: "1 Chicken Patty Burger + 1 Regular Fries + 1 Regular Drink + 2 Pc Nuggets",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000032",
    name: "Deal 3 — Wings Combo",
    price: 630,
    description: "6 Pc Chicken Wings + 1 Regular Drink + 1 Dip Sauce",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000033",
    name: "Deal 4 — Small Pizza Deal",
    price: 1099,
    description: "2 Small Pizzas + 1 Half-Litre Drink",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000034",
    name: "Deal 5 — Medium Pizza Deal",
    price: 2499,
    description: "2 Medium Pizzas + 1 One-Litre Drink",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000035",
    name: "Deal 6 — Burger & Pizza Combo",
    price: 999,
    description: "1 Zinger Burger + 1 Small Pizza + 1 Half-Litre Drink",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000036",
    name: "Deal 7 — Large Pizza Deal",
    price: 3099,
    description: "2 Large Pizzas + 1 One-Litre Drink",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
    active: true
  }
];

export default function OffersPage() {
  const { addToCart } = useCart();
  const [deals, setDeals] = useState<DealItem[]>(fallbackDeals);

  useEffect(() => {
    async function loadDeals() {
      try {
        const { data } = await supabase
          .from('menu_items')
          .select('id, name, price, description, image, available, categories!inner(name)')
          .eq('categories.name', 'Combo Deals');
        if (data && data.length > 0) {
          setDeals(data.map((d: any) => ({
            id: d.id,
            name: d.name,
            price: d.price,
            description: d.description,
            image: d.image || fallbackDeals[0].image,
            active: d.available ?? true
          })));
        }
      } catch (e) {
        console.error('Error fetching deals:', e);
      }
    }
    loadDeals();
  }, []);
  
  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="flex items-center gap-2 text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Official Combos & Deals</span>
          </div>
          <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            SWIFTBITE<br/>COMBO DEALS.
          </h1>
          <p className="text-gray-400 font-medium max-w-xl mt-6 text-sm md:text-base">
            Curated combinations of our crispiest burgers, stone-baked pizzas, fries, and ice-cold drinks. High value, maximum flavor.
          </p>
        </motion.div>

        {/* Deals List */}
        <div className="flex flex-col gap-10">
          {deals.map((deal, i) => (
            <motion.div 
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-10 border ${
                deal.active ? 'border-[#FFD700]/40 bg-[#FFD700]/5 hover:border-[#FFD700] transition-colors' : 'border-gray-900 bg-[#0a0a0a] grayscale'
              }`}
            >
              {/* Status Badge */}
              <div className="absolute top-0 left-0 px-4 py-1.5 font-bold tracking-widest uppercase text-[11px] bg-[#FFD700] text-black">
                COMBO DEAL 0{i + 1}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 flex justify-center mt-4 md:mt-0">
                <div className="relative w-full h-56 max-w-sm rounded-none overflow-hidden bg-neutral-900">
                  <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-2/3 flex flex-col items-start">
                <h2 className="font-[family-name:var(--font-epilogue)] text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">
                  {deal.name}
                </h2>
                <p className="text-gray-300 font-medium text-base mb-6 max-w-xl">
                  {deal.description}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-6 w-full pt-4 border-t border-gray-800">
                  <div className="text-3xl font-black text-[#FFD700]">
                    Rs. {deal.price.toLocaleString()}
                  </div>
                  
                  {deal.active ? (
                    <MagneticButton 
                      onClick={() => addToCart({
                        id: deal.id,
                        name: deal.name,
                        price: deal.price,
                        image: deal.image
                      })}
                      className="bg-[#FFD700] text-black px-8 py-3.5 font-bold tracking-widest uppercase text-xs flex items-center hover:bg-white transition-colors"
                    >
                      ADD COMBO TO ORDER <ChevronRight className="w-4 h-4 ml-1.5" />
                    </MagneticButton>
                  ) : (
                    <button disabled className="bg-gray-900 border border-gray-800 text-gray-500 px-8 py-3.5 font-bold tracking-widest uppercase text-xs cursor-not-allowed">
                      UNAVAILABLE
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
