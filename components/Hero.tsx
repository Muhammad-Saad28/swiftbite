"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full -mt-20 h-screen min-h-[750px] overflow-hidden flex items-center bg-black">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-burger.jpg"
          alt="Crispy SwiftBite Signature Burger"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 md:brightness-95 select-none"
        />
        {/* Soft dark vignette gradients for readability and seamless styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto h-full w-full relative z-20 flex flex-col justify-between py-24 px-6 lg:px-12">
        <div />

        {/* Hero Headline and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl flex flex-col items-start pb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/30 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-ping" />
            <span className="font-label-md text-xs uppercase tracking-[0.25em] text-[#FFD700] font-black">
              Crispy &bull; Juicy &bull; 100% Fresh
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-epilogue)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-black text-white drop-shadow-2xl leading-[0.88] tracking-tighter mb-6">
            CRAVE THE<br />
            <span className="text-[#FFD700] text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#FFA500]">
              CRUNCH.
            </span>
          </h1>

          <p className="font-body-lg text-lg sm:text-xl text-gray-200 font-medium max-w-xl mb-8 drop-shadow-lg leading-relaxed">
            Sink your teeth into our golden crispy fillets, melted cheddar, and secret house dressings. Made fresh upon order.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFD700] hover:bg-white text-black font-black text-sm uppercase tracking-widest transition-all shadow-[0_8px_32px_rgba(255,215,0,0.35)] active:scale-95 group"
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                shopping_bag
              </span>
              <span>ORDER NOW</span>
              <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/offers"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-sm uppercase tracking-widest transition-all"
            >
              EXPLORE DEALS
            </Link>
          </div>
        </motion.div>

        {/* Feature Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 p-2">
              <span className="material-symbols-outlined text-[#FFD700] text-[32px]">bolt</span>
              <div>
                <div className="font-bold text-sm text-white uppercase tracking-wider">20 Min Average</div>
                <div className="text-xs text-gray-400">Lightning Fast Delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <span className="material-symbols-outlined text-[#FFD700] text-[32px]">restaurant</span>
              <div>
                <div className="font-bold text-sm text-white uppercase tracking-wider">100% Fresh Daily</div>
                <div className="text-xs text-gray-400">Golden Fried Fillets</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <span className="material-symbols-outlined text-[#FFD700] text-[32px]">grade</span>
              <div>
                <div className="font-bold text-sm text-white uppercase tracking-wider">4.9 / 5 Rating</div>
                <div className="text-xs text-gray-400">12,000+ Satisfied Bites</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <span className="material-symbols-outlined text-[#FFD700] text-[32px]">eco</span>
              <div>
                <div className="font-bold text-sm text-white uppercase tracking-wider">Crisp & Tender</div>
                <div className="text-xs text-gray-400">Farm Fresh Greens</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
