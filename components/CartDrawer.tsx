"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';

const mockCart: { id: number, name: string, price: number }[] = [];

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const total = mockCart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Floating Cart Button - Only show if there are items */}
      {mockCart.length > 0 && (
        <motion.button 
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-10 right-10 bg-[#FFD700] text-black w-20 h-20 rounded-full font-bold shadow-2xl flex flex-col items-center justify-center z-40 border-2 border-black"
        >
          <span className="text-xl leading-none font-black">{mockCart.length}</span>
          <span className="text-[10px] uppercase tracking-widest font-bold">ITEMS</span>
        </motion.button>
      )}

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Drawer Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative w-full md:w-[450px] h-full bg-white text-black p-8 flex flex-col shadow-2xl border-l-8 border-[#FFD700]"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 font-bold text-2xl hover:text-red-500 transition-colors"
              >
                ✕
              </button>

              <h2 className="font-[family-name:var(--font-epilogue)] text-5xl font-black tracking-tighter uppercase mb-2">
                YOUR BITE
              </h2>
              <div className="w-16 h-1 bg-[#FFD700] mb-8"></div>

              <div className="flex justify-between text-sm font-bold tracking-widest uppercase border-b-2 border-black pb-2 mb-6">
                <span>{mockCart.length} ITEMS</span>
                <span>PRICE</span>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto flex flex-col gap-6">
                {mockCart.map(item => (
                  <div key={item.id} className="flex justify-between items-center font-bold text-xl uppercase">
                    <span>{item.name}</span>
                    <span>Rs. {item.price}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t-4 border-black border-dashed">
                <div className="flex justify-between items-center font-black text-3xl mb-8">
                  <span>TOTAL</span>
                  <span>Rs. {total}</span>
                </div>

                <MagneticButton className="w-full bg-black text-[#FFD700] py-6 font-bold text-xl tracking-widest uppercase hover:bg-gray-900">
                  CHECKOUT
                </MagneticButton>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
