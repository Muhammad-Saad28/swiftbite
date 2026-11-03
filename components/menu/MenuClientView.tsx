"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight, Search, Loader2 } from 'lucide-react';
import { useCart } from '../../components/CartContext';
import { supabase } from '../../lib/supabase';
import PizzaSizeModal, { PizzaItemForModal } from '../ui/PizzaSizeModal';
import { isPizzaItem, isTwoSizePizza, getPizzaSizes } from '../../lib/pizza-sizes';

export interface MenuItem {
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

interface MenuClientViewProps {
  initialCategories: string[];
  initialItems: MenuItem[];
}

export default function MenuClientView({
  initialCategories,
  initialItems
}: MenuClientViewProps) {
  const [categories, setCategories] = useState<string[]>(initialCategories.length > 0 ? initialCategories : ["ALL"]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialItems);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { addToCart } = useCart();

  // Selected pizza state for modal
  const [selectedPizza, setSelectedPizza] = useState<PizzaItemForModal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Setup Supabase Realtime listener to automatically update if DB changes
    const channel = supabase
      .channel('menu_items_live')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'menu_items' },
        async () => {
          try {
            const { data: itemData } = await supabase
              .from('menu_items')
              .select('id, category_id, name, description, price, image, available, featured, categories(name)')
              .order('name');

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
          } catch (err) {
            console.error("Failed to refresh menu on live change:", err);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filteredItems = menuItems.filter((item) => {
    const matchesCat = activeCategory === "ALL" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleItemClick = (item: MenuItem) => {
    if (isPizzaItem(item.category, item.name)) {
      setSelectedPizza({
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        description: item.description,
        image: item.image
      });
      setIsModalOpen(true);
    } else {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image
      });
    }
  };

  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-900 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-ping" />
              <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase">Real-Time Kitchen Feed</span>
            </div>
            <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              SWIFTBITE<br/><span className="text-[#FFD700]">MENU & PRICES</span>
            </h1>
            <p className="text-gray-400 font-medium text-sm mt-3 max-w-xl">
              Freshly grilled burgers, signature wraps, pizzas with Small, Medium &amp; Large sizes, and loaded fries delivered across Lahore.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <input 
              type="text" 
              placeholder="SEARCH DISHES..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search dishes"
              className="w-full bg-[#111] border border-gray-800 text-white px-4 py-3 pl-10 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-[#FFD700] transition-colors"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-gray-900/50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? 'bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)]'
                  : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {errorMsg && (
          <div className="p-4 bg-red-950/40 border border-red-500/50 text-red-300 text-xs font-mono uppercase tracking-widest mb-8">
            {errorMsg}
          </div>
        )}

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isPizza = isPizzaItem(item.category, item.name);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-[#0a0a0a] border border-gray-900 group hover:border-[#FFD700]/50 transition-colors p-6 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Category & Status Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#FFD700] bg-[#FFD700]/10 px-2 py-1">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isPizza && (
                        <span className="text-[10px] font-bold tracking-widest uppercase text-black bg-[#FFD700] px-2 py-0.5">
                          {isTwoSizePizza(item.name) ? '2 SIZES' : '3 SIZES'}
                        </span>
                      )}
                      {item.featured && (
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-red-600/80 px-2 py-0.5">
                          POPULAR
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Image */}
                  <div 
                    onClick={() => isPizza && handleItemClick(item)}
                    className={`relative w-full h-48 mb-6 overflow-hidden bg-neutral-950 flex items-center justify-center ${
                      isPizza ? 'cursor-pointer' : ''
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={`${item.name} - SwiftBite Lahore`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    {isPizza && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#FFD700] text-black text-xs font-black px-4 py-2 uppercase tracking-widest shadow-lg">
                          Choose Size
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col flex-1 mb-6">
                    <h3 
                      onClick={() => isPizza && handleItemClick(item)}
                      className={`font-[family-name:var(--font-epilogue)] text-2xl font-black uppercase mb-2 tracking-tight group-hover:text-[#FFD700] transition-colors ${
                        isPizza ? 'cursor-pointer' : ''
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-400 font-medium text-xs md:text-sm line-clamp-3 mb-4">
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-baseline gap-2">
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                        {isPizza ? 'From' : 'Price'}
                      </span>
                      <span className="text-[#FFD700] font-black text-2xl">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Add to Order Button */}
                  <MagneticButton 
                    onClick={() => handleItemClick(item)}
                    className="w-full bg-gray-900 border border-gray-800 text-white hover:bg-[#FFD700] hover:text-black py-3.5 font-bold tracking-widest uppercase text-xs flex items-center justify-center transition-colors"
                  >
                    {isPizza ? (
                      <>SELECT PIZZA SIZE <ChevronRight className="w-4 h-4 ml-1.5" /></>
                    ) : (
                      <>ADD TO BITE <ChevronRight className="w-4 h-4 ml-1.5" /></>
                    )}
                  </MagneticButton>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-mono">
            No products found matching &quot;{searchQuery}&quot; in {activeCategory}.
          </div>
        )}

      </div>

      {/* Pizza Size Selection Modal */}
      <PizzaSizeModal
        pizza={selectedPizza}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPizza(null);
        }}
        onAddToCart={(selected) => {
          addToCart({
            id: selected.id,
            name: selected.name,
            price: selected.price,
            image: selected.image
          });
        }}
      />
    </div>
  );
}
