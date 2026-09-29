"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { ChevronRight } from "lucide-react";

export default function SwiftBiteDrop() {
  return (
    <section className="w-full bg-[#FFD700] text-black py-20 px-6 overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <h1 className="text-[20vw] font-black tracking-tighter whitespace-nowrap">DROP 001</h1>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Text Side */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-black font-bold tracking-[0.3em] uppercase mb-4">SwiftBite Drop 001</p>
            <h2 className="font-[family-name:var(--font-epilogue)] text-6xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9] mb-6">
              THE ZINGER<br/>COMBO
            </h2>
            
            <div className="flex flex-col gap-2 font-bold text-xl mb-10 tracking-widest uppercase">
              <p>+ Zinger Burger</p>
              <p>+ Loaded Fries</p>
              <p>+ Signature Drink</p>
            </div>

            <MagneticButton className="bg-black text-[#FFD700] px-10 py-5 font-bold tracking-widest uppercase text-lg border border-black hover:bg-transparent hover:text-black transition-colors">
              ORDER NOW <ChevronRight className="inline-block ml-2 w-6 h-6" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full h-full"
          >
            <Image 
              src="/images/zinger.png" 
              alt="The Zinger Combo" 
              fill 
              className="object-contain drop-shadow-2xl scale-125"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
