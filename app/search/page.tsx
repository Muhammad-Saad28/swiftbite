"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import { useCart } from '../../components/CartContext';
import { Loader2 } from 'lucide-react';

interface SearchMenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchMenuItem[]>([]);
  const [allItems, setAllItems] = useState<SearchMenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadAllFromDatabase() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('menu_items')
          .select('id, name, price, description, image, categories(name)')
          .eq('available', true)
          .order('name');

        if (!error && data) {
          const formatted: SearchMenuItem[] = data.map((d: any) => ({
            id: d.id,
            name: d.name,
            price: d.price,
            description: d.description || '',
            image: d.image || 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
            category: d.categories?.name || 'General'
          }));
          setAllItems(formatted);
        }
      } catch (err) {
        console.error('Error fetching search items:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadAllFromDatabase();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const matched = allItems.filter(
      item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
    setResults(matched);
  }, [query, allItems]);

  return (
    <div className="pt-28 min-h-[calc(100vh-100px)] bg-black text-[#e5e2e1]">
      <div className="max-w-7xl mx-auto py-8 px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="relative mb-12">
          <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-[32px] text-[#FFD700]">
            search
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for burgers, pizza, wraps, loaded fries..."
            className="w-full bg-[#111] text-[20px] lg:text-[28px] text-white py-6 pl-20 pr-8 rounded-full border border-gray-800 focus:border-[#FFD700] outline-none transition-colors shadow-2xl font-bold tracking-wide placeholder:text-gray-600"
            autoFocus
          />
        </motion.div>

        {isLoading && (
          <div className="flex justify-center items-center py-20 text-[#FFD700]">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        )}

        {!isLoading && !query.trim() && (
          <div className="text-center py-20 text-gray-500">
            <span className="material-symbols-outlined text-[64px] text-gray-700 mb-4 block">restaurant_menu</span>
            <p className="font-bold uppercase tracking-widest text-lg">Type something to explore SwiftBite dishes...</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Burgers', 'Pizza', 'Shawarma', 'Paratha Rolls', 'Loaded Fries'].map((pill) => (
                <button
                  key={pill}
                  onClick={() => setQuery(pill)}
                  className="px-5 py-2 rounded-full bg-gray-900 border border-gray-800 text-xs font-bold uppercase tracking-wider text-gray-300 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        )}

        {!isLoading && query.trim() && results.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <span className="material-symbols-outlined text-[64px] text-gray-700 mb-4 block">sentiment_dissatisfied</span>
            <p className="font-bold uppercase tracking-widest text-lg">No dishes found matching &quot;{query}&quot;</p>
          </div>
        )}

        {!isLoading && results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {results.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-[#0f0f0f] border border-gray-900 hover:border-[#FFD700]/50 rounded-2xl p-6 flex flex-col justify-between transition-all group shadow-lg"
                >
                  <div>
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-black">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[10px] font-bold text-[#FFD700] uppercase tracking-wider border border-[#FFD700]/30">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#FFD700] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xl font-black text-[#FFD700] whitespace-nowrap ml-3">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-6">{item.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image
                      });
                    }}
                    className="w-full py-3.5 bg-[#FFD700] text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add to Order</span>
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
