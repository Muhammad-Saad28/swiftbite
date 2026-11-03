"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useCart } from '../../components/CartContext';
import { supabase } from '../../lib/supabase';

export interface DealItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  active: boolean;
}

interface OffersClientViewProps {
  initialDeals: DealItem[];
}

export default function OffersClientView({ initialDeals }: OffersClientViewProps) {
  const { addToCart } = useCart();
  const [deals, setDeals] = useState<DealItem[]>(initialDeals);

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
            image: d.image || initialDeals[0]?.image || "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
            active: d.available ?? true
          })));
        }
      } catch (e) {
        console.error('Error fetching deals:', e);
      }
    }
    loadDeals();
  }, [initialDeals]);
  
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
            Curated combinations of our crispiest burgers, stone-baked pizzas, fries, and ice-cold drinks. High value, maximum flavor in Lahore.
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
                  <img src={deal.image} alt={`${deal.name} - SwiftBite Lahore Deal`} className="w-full h-full object-cover" />
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
