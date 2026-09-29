"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight } from 'lucide-react';

const drops = [
  {
    id: "001",
    title: "THE ZINGER COMBO",
    status: "LIVE NOW",
    image: "/images/zinger.png",
    description: "The ultimate signature crunch. Zinger burger, loaded fries, and a craft cola. Available until midnight.",
    price: "Rs. 1,000",
    active: true
  },
  {
    id: "002",
    title: "DIABLO FEAST",
    status: "DROPPING TOMORROW",
    image: "/images/spicy_wrap.png",
    description: "2 Diablo Wraps + 2 Craft Colas. Strictly for those who can handle the heat. Set your alarms.",
    price: "Rs. 1,200",
    active: false
  },
  {
    id: "000",
    title: "FOUNDER'S BEEF",
    status: "SOLD OUT",
    image: "/images/beef-burger.png",
    description: "The original double smashed patty that started it all. Limited run of 500 burgers.",
    price: "Rs. 850",
    active: false
  }
];

export default function OffersPage() {
  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">Limited Edition</h2>
          <h1 className="font-[family-name:var(--font-epilogue)] text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            SWIFTBITE<br/>DROPS.
          </h1>
          <p className="text-gray-400 font-medium max-w-xl mt-6">
            Exclusive bundles, midnight specials, and secret menu items. Once they're gone, they're gone. 
          </p>
        </motion.div>

        {/* Drops List */}
        <div className="flex flex-col gap-12">
          {drops.map((drop, i) => (
            <motion.div 
              key={drop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 border ${drop.active ? 'border-[#FFD700] bg-[#FFD700]/5' : 'border-gray-900 bg-[#0a0a0a] grayscale'}`}
            >
              {/* Status Badge */}
              <div className={`absolute top-0 left-0 px-4 py-2 font-bold tracking-widest uppercase text-xs 
                ${drop.active ? 'bg-[#FFD700] text-black' : 'bg-gray-800 text-gray-400'}`}
              >
                {drop.status}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64">
                  <Image src={drop.image} alt={drop.title} fill className="object-contain drop-shadow-2xl" />
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-2/3 flex flex-col items-start">
                <h3 className="text-[#FFD700] text-xl font-bold tracking-[0.2em] mb-2">DROP {drop.id}</h3>
                <h2 className="font-[family-name:var(--font-epilogue)] text-5xl font-black uppercase tracking-tighter mb-4">
                  {drop.title}
                </h2>
                <p className="text-gray-400 font-medium text-lg mb-8 max-w-xl">
                  {drop.description}
                </p>
                
                <div className="flex items-center gap-8 w-full">
                  <div className="text-3xl font-black text-white">{drop.price}</div>
                  
                  {drop.active ? (
                    <MagneticButton className="bg-[#FFD700] text-black px-8 py-4 font-bold tracking-widest uppercase flex items-center hover:bg-white transition-colors">
                      CLAIM DROP <ChevronRight className="w-5 h-5 ml-2" />
                    </MagneticButton>
                  ) : (
                    <button disabled className="bg-gray-900 border border-gray-800 text-gray-500 px-8 py-4 font-bold tracking-widest uppercase cursor-not-allowed">
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
