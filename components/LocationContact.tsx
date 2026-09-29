"use client";

import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

export default function LocationContact() {
  return (
    <section className="relative w-full bg-[#111] text-white py-32 border-t-4 border-[#FFD700] overflow-hidden">
      
      {/* Massive Background Text */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <h2 className="text-[20vw] font-[family-name:var(--font-epilogue)] font-black whitespace-nowrap leading-none tracking-tighter">
          SYSTEM ACTIVE
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 justify-between items-center">
        
        {/* Left Side: Hub Status Board */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="border border-gray-800 bg-black p-8 md:p-12 relative shadow-2xl">
            {/* Blinking Live Indicator */}
            <div className="absolute top-8 right-8 flex items-center gap-3">
              <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] uppercase">Kitchen Active</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFD700]"></span>
              </span>
            </div>

            <h3 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-12">Hub Status</h3>
            
            <h4 className="font-[family-name:var(--font-epilogue)] text-4xl md:text-5xl font-black uppercase mb-2">Gulberg III Flagship</h4>
            <p className="text-gray-400 font-bold tracking-widest uppercase mb-10 text-sm">M.M. Alam Road, Lahore, Pakistan</p>

            <div className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest text-gray-500 mb-12">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mon - Thu</span>
                <span className="text-white font-bold">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-[#FFD700]">Fri - Sat (Late Night)</span>
                <span className="text-[#FFD700] font-bold">11:00 AM – 01:00 AM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sunday</span>
                <span className="text-white font-bold">11:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-[#FFD700] bg-[#FFD700]/10 p-4 rounded-none border-l-2 border-[#FFD700]">
              <span className="animate-pulse">⚡</span> Taking Orders • Est. Wait 14 Min
            </div>
          </div>
        </motion.div>

        {/* Right Side: Locate & Contact */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
            FIND YOUR<br/>NEAREST<br/><span className="text-[#FFD700]">SWIFTBITE</span>
          </h2>
          
          {/* Search Input */}
          <div className="flex w-full mb-12 shadow-2xl relative">
            <input 
              type="text" 
              placeholder="Enter zip code, district or city..." 
              className="w-full bg-gray-900 border-none text-white px-6 py-6 font-bold tracking-wider uppercase text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <MagneticButton className="absolute right-0 top-0 bottom-0 bg-[#FFD700] text-black px-8 font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Locate
            </MagneticButton>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="tel:+923054449151" className="flex-1 min-w-[200px] border-2 border-gray-800 text-center py-5 font-bold tracking-widest uppercase hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
              Direct Line
            </a>
            <button className="flex-1 min-w-[200px] border-2 border-gray-800 text-center py-5 font-bold tracking-widest uppercase hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
              Get Directions
            </button>
            <button className="flex-1 min-w-[200px] border-2 border-[#FFD700] bg-[#FFD700]/5 text-[#FFD700] text-center py-5 font-bold tracking-widest uppercase hover:bg-[#FFD700] hover:text-black transition-colors">
              Book Table
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
