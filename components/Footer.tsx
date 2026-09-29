"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#e5e2e1] pt-32 pb-8 border-t border-gray-900 overflow-hidden relative">
      
      {/* Background massive 'SWIFTBITE' text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none">
        <h1 className="text-[25vw] font-[family-name:var(--font-epilogue)] font-black whitespace-nowrap leading-none tracking-tighter text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px #FFD700' }}>
          SWIFTBITE SWIFTBITE
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: Newsletter & Manifesto */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-32 border-b border-gray-900 pb-16">
          <div className="lg:w-1/2">
            <h2 className="font-[family-name:var(--font-epilogue)] text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-white">
              STAY IN<br/>THE LOOP.
            </h2>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-8">
              Unlock secret midnight menus, VIP invites, and flash drops.
            </p>
            <form className="flex w-full max-w-md">
              <input 
                className="w-full bg-transparent border-b-2 border-gray-700 text-white px-0 py-4 font-bold tracking-widest uppercase text-sm focus:outline-none focus:border-[#FFD700] transition-colors" 
                placeholder="ENTER EMAIL ADDRESS" 
                type="email"
              />
              <button className="border-b-2 border-gray-700 hover:border-[#FFD700] text-[#FFD700] px-6 py-4 font-black tracking-widest uppercase transition-colors" type="submit">
                JOIN
              </button>
            </form>
          </div>

          <div className="lg:w-1/3 flex flex-col justify-end">
            <p className="text-xl text-gray-400 font-medium leading-relaxed border-l-2 border-[#FFD700] pl-6">
              "Haute street-food elevated for high-velocity late-night cravings. Searing heat, electric flavor, delivered at warp speed across Lahore."
            </p>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 font-bold tracking-widest uppercase text-sm">
          
          <div className="flex flex-col gap-6">
            <h4 className="text-[#FFD700] mb-2">Navigation</h4>
            <Link className="text-gray-500 hover:text-white transition-colors" href="/">Home</Link>
            <Link className="text-gray-500 hover:text-white transition-colors" href="/menu">Menu</Link>
            <Link className="text-gray-500 hover:text-white transition-colors" href="/about">Origin</Link>
            <Link className="text-gray-500 hover:text-white transition-colors" href="/offers">Drops</Link>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[#FFD700] mb-2">Service</h4>
            <Link className="text-gray-500 hover:text-white transition-colors" href="/cart">Order Online</Link>
            <Link className="text-gray-500 hover:text-white transition-colors" href="/cart">Track Order</Link>
            <Link className="text-gray-500 hover:text-white transition-colors" href="/contact">Support</Link>
            <Link className="text-gray-500 hover:text-white transition-colors" href="/menu">Allergens</Link>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[#FFD700] mb-2">Socials</h4>
            <Link className="text-gray-500 hover:text-white transition-colors flex items-center gap-2" href="#">Instagram ↗</Link>
            <Link className="text-gray-500 hover:text-white transition-colors flex items-center gap-2" href="#">TikTok ↗</Link>
            <Link className="text-gray-500 hover:text-white transition-colors flex items-center gap-2" href="#">X (Twitter) ↗</Link>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[#FFD700] mb-2">Flagship</h4>
            <p className="text-gray-500 leading-relaxed">M.M. Alam Road,<br/>Gulberg III,<br/>Lahore, PK</p>
            <a href="tel:+923054449151" className="text-white hover:text-[#FFD700] transition-colors mt-2">
              +92 305 4449151
            </a>
          </div>

        </div>

        {/* Bottom Section: Massive Logo & Copyright */}
        <div className="flex flex-col items-center border-t border-gray-900 pt-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full mb-8"
          >
            <h1 className="font-[family-name:var(--font-epilogue)] text-[8vw] font-black text-center tracking-tighter uppercase text-white leading-none">
              SWIFT<span className="text-[#FFD700]">BITE</span>
            </h1>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-xs font-bold tracking-widest uppercase text-gray-600">
            <div>© 2026 SWIFTBITE CULINARY LABS.</div>
            <div className="flex gap-6">
              <Link className="hover:text-white transition-colors" href="#">Privacy</Link>
              <Link className="hover:text-white transition-colors" href="#">Terms</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
