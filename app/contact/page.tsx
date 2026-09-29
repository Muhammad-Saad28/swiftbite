"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight } from 'lucide-react';

export default function ContactPage() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const locations = [
    { id: 'flagship', name: 'GULBERG FLAGSHIP', status: 'ONLINE', coordinates: '31.5204° N, 74.3587° E' },
    { id: 'dha', name: 'DHA PHASE 5 HUB', status: 'ONLINE', coordinates: '31.4621° N, 74.4089° E' },
    { id: 'johar', name: 'JOHAR TOWN EXPRESS', status: 'OFFLINE (MAINTENANCE)', coordinates: '31.4697° N, 74.2728° E' }
  ];

  return (
    <div className="w-full bg-black min-h-screen text-white pt-32 pb-20 overflow-hidden relative">
      
      {/* Glitch Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }}>
            <div className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-4 py-1 font-bold text-xs tracking-[0.3em] uppercase mb-8">
              <span className="w-2 h-2 bg-black rounded-full animate-ping" />
              Secure Channel Open
            </div>
            <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.85] text-white mix-blend-difference">
              PING <span className="text-transparent" style={{ WebkitTextStroke: '2px #FFD700' }}>THE</span> GRID.
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Radar / Locations Side */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[#FFD700] font-[family-name:var(--font-epilogue)] text-3xl font-black uppercase tracking-tighter mb-4 border-b border-gray-800 pb-4">
              ACTIVE HUBS
            </h3>
            
            <div className="flex flex-col gap-4">
              {locations.map((loc) => (
                <motion.div 
                  key={loc.id}
                  onHoverStart={() => setHoveredLocation(loc.id)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="group relative border border-gray-800 p-6 cursor-pointer overflow-hidden bg-[#0a0a0a]"
                >
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredLocation === loc.id ? 0 : '-100%' }}
                    className="absolute inset-0 bg-[#FFD700] z-0 transition-transform duration-300"
                  />
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <h4 className={`text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${hoveredLocation === loc.id ? 'text-black' : 'text-white'}`}>
                        {loc.name}
                      </h4>
                      <p className={`font-mono text-xs tracking-widest mt-1 transition-colors duration-300 ${hoveredLocation === loc.id ? 'text-black/80' : 'text-gray-500'}`}>
                        {loc.coordinates}
                      </p>
                    </div>
                    <div className={`text-xs font-bold tracking-widest px-3 py-1 border transition-colors duration-300 ${
                      hoveredLocation === loc.id ? 'border-black text-black' : 
                      loc.status === 'ONLINE' ? 'border-[#FFD700] text-[#FFD700]' : 'border-red-500 text-red-500'
                    }`}>
                      {loc.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-900 border-l-4 border-[#FFD700]">
              <p className="text-gray-400 font-medium leading-relaxed">
                Need immediate assistance regarding a live order? Do not use the transmission form. Contact our emergency dispatch line directly.
              </p>
              <h2 className="text-[#FFD700] text-3xl font-black mt-4">+92 305 4449151</h2>
            </div>
          </div>

          {/* Contact Terminal Form */}
          <div className="bg-black border border-gray-800 p-10 relative overflow-hidden shadow-2xl">
            {/* Terminal Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50"></div>
            
            <h3 className="text-white font-[family-name:var(--font-epilogue)] text-3xl font-black uppercase tracking-tighter mb-8 flex items-center">
              <span className="w-4 h-4 bg-[#FFD700] mr-4 inline-block animate-pulse"></span>
              NEW TRANSMISSION
            </h3>

            <form className="flex flex-col gap-6 relative z-10">
              <div className="group relative">
                <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" />
                <label htmlFor="name" className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Subject Designation (Name)
                </label>
              </div>

              <div className="group relative mt-4">
                <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" />
                <label htmlFor="email" className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Return Vector (Email)
                </label>
              </div>

              <div className="group relative mt-4">
                <textarea id="message" rows={5} placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors resize-none"></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Encrypted Payload (Message)
                </label>
              </div>

              <MagneticButton className="bg-[#FFD700] text-black w-full py-6 font-black tracking-[0.2em] uppercase mt-8 hover:bg-white transition-colors flex items-center justify-center">
                INITIATE TRANSFER <ChevronRight className="w-6 h-6 ml-2" />
              </MagneticButton>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
