"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface InteractiveProductImageProps {
  src: string;
  alt: string;
  ingredients: string[];
  className?: string;
}

export default function InteractiveProductImage({ src, alt, ingredients, className = "" }: InteractiveProductImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`relative inline-block ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Image src={src} alt={alt} width={500} height={500} className="object-contain drop-shadow-2xl" priority />
      
      {/* Ingredients Tooltip / Labels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
      >
        {ingredients.map((ingredient, i) => (
          <motion.span 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            className="bg-black/80 text-[#FFD700] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap border border-[#FFD700]/20 shadow-lg backdrop-blur-md"
          >
            {ingredient}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
