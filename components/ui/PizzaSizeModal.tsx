"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShoppingBag } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { getPizzaSizes, PizzaSizeOption } from '../../lib/pizza-sizes';

export interface PizzaItemForModal {
  id: string;
  name: string;
  category?: string;
  price: number;
  description: string;
  image: string;
}

interface PizzaSizeModalProps {
  pizza: PizzaItemForModal | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (selectedItem: { id: string; name: string; price: number; image: string; size: string }) => void;
}

export default function PizzaSizeModal({
  pizza,
  isOpen,
  onClose,
  onAddToCart
}: PizzaSizeModalProps) {
  const sizes: PizzaSizeOption[] = pizza ? getPizzaSizes(pizza.price, pizza.name) : [];
  const defaultSizeId = sizes.length > 0 ? sizes[0].id : 'medium';
  const [selectedSizeId, setSelectedSizeId] = useState<'small' | 'medium' | 'large'>(defaultSizeId);

  // Sync selectedSizeId when pizza changes
  React.useEffect(() => {
    if (sizes.length > 0 && !sizes.some(s => s.id === selectedSizeId)) {
      setSelectedSizeId(sizes[0].id);
    }
  }, [pizza, sizes, selectedSizeId]);

  if (!isOpen || !pizza) return null;

  const currentSize = sizes.find(s => s.id === selectedSizeId) || sizes[0];

  const handleConfirm = () => {
    onAddToCart({
      id: `${pizza.id}-${currentSize.id}`,
      name: `${pizza.name} (${currentSize.name})`,
      price: currentSize.price,
      image: pizza.image,
      size: currentSize.name
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
          className="relative w-full max-w-lg bg-[#0e0e0e] border-2 border-[#FFD700] p-6 sm:p-8 rounded-none shadow-[0_0_50px_rgba(255,215,0,0.25)] text-white z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-ping" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#FFD700]">
              Select Pizza Size
            </span>
          </div>

          <h3 className="font-[family-name:var(--font-epilogue)] text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
            {pizza.name}
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-6">
            {pizza.description}
          </p>

          {/* Pizza Preview Graphic */}
          <div className="relative w-full h-44 mb-6 bg-black border border-gray-900 flex items-center justify-center overflow-hidden">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span className="text-gray-300">Selected Size:</span>
              <span className="text-[#FFD700] font-black text-sm">{currentSize.name} ({currentSize.sizeDesc})</span>
            </div>
          </div>

          {/* Size Options Grid */}
          <div className={`grid gap-3 mb-8 ${sizes.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {sizes.map((size) => {
              const isSelected = selectedSizeId === size.id;
              return (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => setSelectedSizeId(size.id)}
                  className={`p-3.5 sm:p-4 border-2 flex flex-col items-center justify-between transition-all relative ${
                    isSelected
                      ? 'border-[#FFD700] bg-[#FFD700]/15 text-white shadow-[0_0_20px_rgba(255,215,0,0.2)]'
                      : 'border-gray-800 bg-black/60 text-gray-400 hover:border-gray-600 hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#FFD700] text-black flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                  <span className="font-black uppercase tracking-wider text-sm sm:text-base">
                    {size.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-mono mt-1">
                    {size.sizeDesc}
                  </span>
                  <span className="text-[9px] text-gray-400 opacity-80 mb-2">
                    {size.serves}
                  </span>
                  <span className={`font-black text-xs sm:text-sm ${isSelected ? 'text-[#FFD700]' : 'text-gray-200'}`}>
                    Rs. {size.price.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-900 gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block">Total Price</span>
              <span className="text-2xl sm:text-3xl font-black text-[#FFD700]">
                Rs. {currentSize.price.toLocaleString()}
              </span>
            </div>

            <MagneticButton
              onClick={handleConfirm}
              className="flex-1 max-w-[240px] bg-[#FFD700] hover:bg-white text-black py-4 px-6 font-black uppercase tracking-widest text-xs flex items-center justify-center transition-colors"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              ADD TO BITE
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
