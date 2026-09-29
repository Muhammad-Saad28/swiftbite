"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../components/CartContext';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight } from 'lucide-react';

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">Secure Terminal</h2>
          <h1 className="font-[family-name:var(--font-epilogue)] text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            FINALIZE<br/>BITE.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Order Summary */}
          <div className="bg-[#0a0a0a] border border-gray-900 p-8">
            <h3 className="text-[#FFD700] font-[family-name:var(--font-epilogue)] text-2xl font-black uppercase tracking-tighter mb-8">
              Order Payload
            </h3>
            
            <div className="flex flex-col gap-6 mb-8 border-b border-gray-900 pb-8">
              {cart.length === 0 ? (
                <p className="text-gray-500 font-bold uppercase tracking-widest">No items initialized.</p>
              ) : (
                cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex justify-between items-center font-bold text-lg uppercase">
                    <span>{item.name}</span>
                    <span>Rs. {item.price}</span>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-between items-center font-black text-3xl">
              <span>TOTAL</span>
              <span className="text-[#FFD700]">Rs. {total}</span>
            </div>
          </div>

          {/* Details Form */}
          <div className="bg-black border border-gray-800 p-8">
            <h3 className="text-white font-[family-name:var(--font-epilogue)] text-2xl font-black uppercase tracking-tighter mb-8">
              Drop Location
            </h3>

            <form className="flex flex-col gap-6">
              <div className="group relative">
                <input type="text" placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" />
                <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Full Name
                </label>
              </div>

              <div className="group relative mt-4">
                <input type="text" placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" />
                <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Drop Coordinates (Address)
                </label>
              </div>

              <div className="group relative mt-4">
                <input type="tel" placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" />
                <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Comms Link (Phone Number)
                </label>
              </div>

              <MagneticButton className="bg-[#FFD700] text-black w-full py-6 font-black tracking-[0.2em] uppercase mt-8 hover:bg-white transition-colors flex items-center justify-center">
                AUTHORIZE PAYMENT <ChevronRight className="w-6 h-6 ml-2" />
              </MagneticButton>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
