"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../components/CartContext';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <div className="mb-16">
          <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">Review Payload</h2>
          <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            YOUR<br/>BITE.
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {cart.length === 0 ? (
              <div className="border border-gray-900 p-12 text-center flex flex-col items-center">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-lg mb-8">No active payloads found.</p>
                <Link href="/menu">
                  <MagneticButton className="bg-[#FFD700] text-black px-8 py-4 font-bold tracking-widest uppercase text-xs hover:bg-white transition-colors">
                    BROWSE MENU
                  </MagneticButton>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {cart.map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    key={`${item.id}-${index}`} 
                    className="flex items-center gap-6 p-6 border border-gray-900 bg-[#0a0a0a] group relative overflow-hidden hover:border-[#FFD700]/50 transition-colors"
                  >
                    {item.image && (
                      <div className="w-24 h-24 relative flex-shrink-0 bg-black border border-gray-900">
                        <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-epilogue)] text-2xl md:text-3xl font-black tracking-tighter uppercase mb-2 text-white">
                        {item.name}
                      </h3>
                      <p className="text-[#FFD700] font-bold text-xl">
                        Rs. {item.price}
                      </p>
                    </div>

                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-gray-600 hover:text-red-500 font-bold uppercase tracking-widest text-xs transition-colors p-4"
                    >
                      REMOVE
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#0a0a0a] border border-[#FFD700] p-8 sticky top-32">
              <h3 className="text-[#FFD700] font-[family-name:var(--font-epilogue)] text-2xl font-black uppercase tracking-tighter mb-8 border-b border-gray-800 pb-4">
                SUMMARY
              </h3>
              
              <div className="flex justify-between items-center font-bold text-sm text-gray-400 mb-4 uppercase tracking-widest">
                <span>Subtotal ({cart.length} items)</span>
                <span>Rs. {total}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-sm text-gray-400 mb-8 uppercase tracking-widest">
                <span>Taxes & Fees</span>
                <span>Calculated at next step</span>
              </div>

              <div className="flex justify-between items-center font-black text-4xl text-white mb-10 border-t border-gray-800 pt-6">
                <span>TOTAL</span>
                <span>Rs. {total}</span>
              </div>

              {cart.length > 0 ? (
                <Link href="/checkout" className="block w-full">
                  <MagneticButton className="bg-[#FFD700] text-black w-full py-5 font-black tracking-[0.2em] uppercase hover:bg-white transition-colors flex items-center justify-center">
                    CHECKOUT <ChevronRight className="w-6 h-6 ml-2" />
                  </MagneticButton>
                </Link>
              ) : (
                <button disabled className="bg-gray-900 border border-gray-800 text-gray-500 w-full py-5 font-black tracking-[0.2em] uppercase cursor-not-allowed">
                  CHECKOUT
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
