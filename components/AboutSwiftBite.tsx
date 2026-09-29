"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Patties Smashed to Perfection", value: "4.5M+" },
  { label: "Average Kitchen to Doorstep", value: "< 18 Min" },
  { label: "Grass-Fed Prime Beef Blends", value: "100%" },
  { label: "Nationwide Kitchen Hubs", value: "24" },
];

export default function AboutSwiftBite() {
  return (
    <section className="relative w-full bg-black text-[#e5e2e1] py-32 overflow-hidden border-t border-[#FFD700]/20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Visual Side */}
        <div className="relative h-[500px] lg:h-[700px] w-full group">
          <div className="absolute inset-0 bg-[#FFD700] transform -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute inset-0 z-10 overflow-hidden">
            <Image 
              src="/images/kitchen.png" 
              alt="SwiftBite Kitchen Origin" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
          </div>
          
          {/* Manifesto Quote Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-10 -right-10 lg:-right-20 z-20 bg-black border-l-4 border-[#FFD700] p-8 w-[80%] shadow-2xl"
          >
            <p className="font-[family-name:var(--font-epilogue)] text-xl md:text-2xl font-bold leading-tight mb-4">
              "We treat a midnight smash burger with the same technical devotion as a three-course tasting menu."
            </p>
            <div className="text-[#FFD700] text-sm font-bold tracking-widest uppercase">
              <span className="block text-white">Marcus Vance</span>
              Culinary Director & Co-Founder
            </div>
          </motion.div>
        </div>

        {/* Text Side */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">The Origin Story</h2>
            <h3 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
              GOOD FOOD.<br/>GOOD MOOD.
            </h3>
            
            <p className="text-xl leading-relaxed text-gray-400 mb-6 font-medium">
              Founded on the quiet obsession that high-speed dining should never mean cutting corners. SwiftBite started in a single bustling downtown alley kitchen with one roaring cast-iron flat top and a relentless passion for deep, unapologetic flavor.
            </p>
            
            <p className="text-xl leading-relaxed text-gray-400 mb-12 font-medium">
              Today, we blend high-velocity ordering tech with Michelin-trained kitchen fundamentals: custom daily butchered meat blends, fresh heirloom produce, and our bespoke 24-hour dough fermentation process.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-[#FFD700] font-[family-name:var(--font-epilogue)] text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm font-bold tracking-widest uppercase text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
