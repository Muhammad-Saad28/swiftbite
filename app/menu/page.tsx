"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight, Search, Loader2 } from 'lucide-react';
import { useCart } from '../../components/CartContext';
import { supabase } from '../../lib/supabase';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  category_id?: string;
  price: number;
  description: string;
  image: string;
  available: boolean;
  featured: boolean;
}

export default function MenuPage() {
  const [categories, setCategories] = useState<string[]>(["ALL"]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadMenuFromDatabase() {
      setIsLoading(true);
      setErrorMsg(null);
      try {
        // 1. Fetch categories directly from DB
        const { data: catData, error: catError } = await supabase
          .from('categories')
          .select('name')
          .eq('active', true)
          .order('name');

        if (catError) throw catError;

        if (catData && catData.length > 0) {
          setCategories(["ALL", ...catData.map((c: any) => c.name)]);
        }

        // 2. Fetch all menu items directly from DB
        const { data: itemData, error: itemError } = await supabase
          .from('menu_items')
          .select('id, category_id, name, description, price, image, available, featured, categories(name)')
          .order('name');

        if (itemError) throw itemError;

        if (itemData) {
          const formatted: MenuItem[] = itemData.map((i: any) => ({
            id: i.id,
            name: i.name,
            category: i.categories?.name || "General",
            category_id: i.category_id,
            price: i.price,
            description: i.description || "",
            image: i.image || "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
            available: i.available ?? true,
            featured: i.featured ?? false,
          }));
          setMenuItems(formatted);
        }
      } catch (err: any) {
        console.error("Failed to load menu from database:", err);
        setErrorMsg("Failed to connect to database. Please check your network connection.");
      } finally {
        setIsLoading(false);
      }
    }

    loadMenuFromDatabase();

    // Setup Supabase Realtime listener to automatically update if DB changes
    const channel = supabase
      .channel('menu_items_live')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'menu_items' },
        () => {
          loadMenuFromDatabase();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filteredItems = menuItems.filter((item) => {
    const matchesCat = activeCategory === "ALL" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch && item.available;
  });

  return (
    <div className="w-full bg-[#111] min-h-screen text-white pt-32 pb-20 overflow-hidden">
      
      {/* Background Graphic */}
      <div className="fixed top-1/4 -right-32 text-[#FFD700] opacity-5 pointer-events-none rotate-90 origin-right">
        <h1 className="text-[25vw] font-[family-name:var(--font-epilogue)] font-black whitespace-nowrap tracking-tighter">
          FULL MENU
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase">
                  Live Database Menu • {menuItems.length} Products Available
                </h2>
              </div>
              <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                THE<br/>SWIFTBITE<br/>MENU.
              </h1>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search burgers, pizzas, deals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/80 border border-gray-800 text-white pl-11 pr-4 py-3 text-sm font-medium focus:outline-none focus:border-[#FFD700] transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-gray-800 pb-8">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 font-bold tracking-widest text-xs uppercase transition-all duration-300 border-2 
                ${activeCategory === cat ? 'border-[#FFD700] bg-[#FFD700] text-black shadow-lg shadow-[#FFD700]/20' : 'border-gray-800 text-gray-400 hover:border-gray-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-[#FFD700]" />
            <p className="font-mono text-sm tracking-widest uppercase">Connecting to Database & Loading Menu...</p>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 bg-red-950/40 border border-red-800 text-red-300 mb-8 font-mono text-sm">
            {errorMsg}
          </div>
        )}

        {/* Menu Grid */}
        {!isLoading && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-black/90 border border-gray-900 p-6 md:p-8 flex flex-col justify-between hover:border-[#FFD700]/50 transition-colors"
                >
                  {/* Category & Status Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#FFD700] bg-[#FFD700]/10 px-2 py-1">
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-red-600/80 px-2 py-0.5">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="relative w-full h-48 mb-6 overflow-hidden bg-neutral-950 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col flex-1 mb-6">
                    <h3 className="font-[family-name:var(--font-epilogue)] text-2xl font-black uppercase mb-2 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 font-medium text-xs md:text-sm line-clamp-3 mb-4">
                      {item.description}
                    </p>
                    <div className="mt-auto text-[#FFD700] font-black text-2xl">
                      Rs. {item.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Add to Order Button */}
                  <MagneticButton 
                    onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                    className="w-full bg-gray-900 border border-gray-800 text-white hover:bg-[#FFD700] hover:text-black py-3.5 font-bold tracking-widest uppercase text-xs flex items-center justify-center transition-colors"
                  >
                    ADD TO BITE <ChevronRight className="w-4 h-4 ml-1.5" />
                  </MagneticButton>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!isLoading && filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-mono">
            No products found matching "{searchQuery}" in {activeCategory}.
          </div>
        )}

      </div>
    </div>
  );
}
