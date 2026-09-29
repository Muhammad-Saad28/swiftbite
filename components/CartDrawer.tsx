"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function CartDrawer() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleShow = () => setIsVisible(true);
    const handleHide = () => setIsVisible(false);

    window.addEventListener('header:show', handleShow);
    window.addEventListener('header:hide', handleHide);

    return () => {
      window.removeEventListener('header:show', handleShow);
      window.removeEventListener('header:hide', handleHide);
    };
  }, []);

  return (
    <AnimatePresence>
      {cart.length > 0 && isVisible && (
        <Link href="/cart">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="fixed bottom-10 right-10 md:right-16 bg-[#FFD700] text-black px-8 py-5 rounded-none font-bold shadow-[0_10px_40px_rgba(255,215,0,0.4)] flex items-center gap-6 z-40 border-2 border-black"
          >
            <div className="flex flex-col items-start leading-none">
              <span className="text-xl font-black uppercase tracking-tighter">VIEW BITE</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">{cart.length} ITEM(S)</span>
            </div>
            <div className="w-[2px] h-8 bg-black/20"></div>
            <div className="text-2xl font-black">
              Rs. {total}
            </div>
          </motion.div>
        </Link>
      )}
    </AnimatePresence>
  );
}
