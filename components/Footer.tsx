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
            <h4 className="text-[#FFD700] mb-2">Location</h4>
            <p className="text-gray-500 leading-relaxed text-xs">
              Main G.T. Road, near Orange Line Station,<br/>
              Dera Gujran, Quaid-e-Azam Interchange,<br/>
              Lahore, PK
            </p>
            <div className="flex flex-col gap-1 mt-2 text-xs">
              <div className="flex items-center gap-2">
                <a href="tel:03212490006" className="text-white hover:text-[#FFD700] transition-colors">
                  0321-2490006
                </a>
                <a href="https://wa.me/923212490006" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold text-[10px] uppercase">
                  (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href="tel:03064656951" className="text-white hover:text-[#FFD700] transition-colors">
                  0306-4656951
                </a>
                <a href="https://wa.me/923064656951" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold text-[10px] uppercase">
                  (WhatsApp)
                </a>
              </div>
              <span className="text-gray-500 text-[11px] mt-1">Daily: 3:00 PM – 3:00 AM</span>
            </div>
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
