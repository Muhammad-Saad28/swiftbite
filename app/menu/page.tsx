"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../../components/CartContext';

const menuData = [
  { id: "1", category: "01 — THE CRUNCH", name: "ZINGER STACK", price: "Rs. 650", desc: "Signature crispy chicken with spicy mayo.", image: "/images/zinger.png" },
  { id: "2", category: "02 — THE STACK", name: "BEEF SUPREME", price: "Rs. 850", desc: "Double smashed patty, caramelized onions.", image: "/images/beef-burger.png" },
  { id: "3", category: "03 — THE HEAT", name: "DIABLO WRAP", price: "Rs. 500", desc: "Spicy tenders, jalapeños, sriracha.", image: "/images/spicy_wrap.png" },
  { id: "4", category: "04 — THE SIDEKICK", name: "TRUFFLE FRIES", price: "Rs. 400", desc: "Crispy fries with truffle oil & parmesan.", image: "/images/loaded.png" },
  { id: "5", category: "05 — THE SIP", name: "CRAFT COLA", price: "Rs. 250", desc: "Artisan cola with fresh lemon.", image: "/images/signature_drink.png" }
];

const categories = ["ALL", "01 — THE CRUNCH", "02 — THE STACK", "03 — THE HEAT", "04 — THE SIDEKICK", "05 — THE SIP"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const { addToCart } = useCart();

  const filteredItems = activeCategory === "ALL" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">Complete Selection</h2>
          <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            THE<br/>SWIFTBITE<br/>MENU.
          </h1>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-800 pb-8">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 font-bold tracking-widest text-xs md:text-sm uppercase transition-all duration-300 border-2 
                ${activeCategory === cat ? 'border-[#FFD700] bg-[#FFD700] text-black' : 'border-gray-800 text-gray-400 hover:border-gray-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-black border border-gray-900 p-8 flex flex-col items-center text-center hover:border-[#FFD700]/50 transition-colors"
              >
                {/* Category Badge */}
                <div className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase text-[#FFD700]">
                  {item.category}
                </div>

                {/* Product Image */}
                <div className="relative w-48 h-48 mb-8 mt-4">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <h3 className="font-[family-name:var(--font-epilogue)] text-3xl font-black uppercase mb-2 tracking-tighter">
                  {item.name}
                </h3>
                <p className="text-gray-400 font-medium text-sm mb-6 h-10">
                  {item.desc}
                </p>
                <div className="text-[#FFD700] font-bold text-2xl mb-8">
                  {item.price}
                </div>

                {/* Add to Order Button */}
                <MagneticButton 
                  onClick={() => addToCart({ id: item.id, name: item.name, price: parseInt(item.price.replace('Rs. ', '')), image: item.image })}
                  className="w-full bg-gray-900 border border-gray-800 text-white hover:bg-[#FFD700] hover:text-black py-4 font-bold tracking-widest uppercase text-sm flex items-center justify-center transition-colors"
                >
                  ADD TO BITE <ChevronRight className="w-4 h-4 ml-2" />
                </MagneticButton>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
