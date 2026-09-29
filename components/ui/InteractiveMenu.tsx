"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveProductImage from "./InteractiveProductImage";
import MagneticButton from "./MagneticButton";
import { ChevronRight } from "lucide-react";

// Mock data mapping to the 5 world categories
const menuItems = [
  {
    id: "1",
    name: "ZINGER STACK",
    price: "Rs. 650",
    image: "/images/zinger.png",
    ingredients: ["CRISPY CHICKEN", "LETTUCE", "SIGNATURE MAYO", "CHEDDAR"],
    category: "01 — THE CRUNCH",
  },
  {
    id: "2",
    name: "BEEF SUPREME",
    price: "Rs. 850",
    image: "/images/beef-burger.png",
    ingredients: ["SMASHED BEEF", "CARAMELIZED ONIONS", "BBQ SAUCE"],
    category: "02 — THE STACK",
  },
  {
    id: "3",
    name: "DIABLO WRAP",
    price: "Rs. 500",
    image: "/images/spicy_wrap.png",
    ingredients: ["SPICY TENDERS", "JALAPEÑOS", "SRIRACHA MAYO"],
    category: "03 — THE HEAT",
  },
  {
    id: "4",
    name: "TRUFFLE FRIES",
    price: "Rs. 400",
    image: "/images/loaded.png",
    ingredients: ["CRISPY FRIES", "TRUFFLE OIL", "PARMESAN"],
    category: "04 — THE SIDEKICK",
  },
  {
    id: "5",
    name: "CRAFT COLA",
    price: "Rs. 250",
    image: "/images/signature_drink.png",
    ingredients: ["ARTISAN COLA", "FRESH LEMON", "ICE"],
    category: "05 — THE SIP",
  },
];

export default function InteractiveMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };

  const currentItem = menuItems[currentIndex];

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] bg-black text-[#e5e2e1] overflow-hidden flex items-center justify-center">
      {/* Category Indicator */}
      <motion.div 
        key={currentItem.category}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-10 left-10 md:left-20"
      >
        <h2 className="text-[#FFD700] text-sm md:text-lg font-bold tracking-[0.2em]">{currentItem.category}</h2>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 w-full"
        >
          {/* Left Side: Product Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <InteractiveProductImage 
              src={currentItem.image} 
              alt={currentItem.name} 
              ingredients={currentItem.ingredients} 
              className="w-64 h-64 md:w-96 md:h-96"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-4"
            >
              {currentItem.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#FFD700] text-2xl md:text-4xl font-bold mb-8"
            >
              {currentItem.price}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <MagneticButton 
                onClick={nextItem}
                className="bg-[#FFD700] text-black px-8 py-4 font-bold text-lg rounded-none hover:bg-white transition-colors"
              >
                ADD TO ORDER <ChevronRight className="inline-block w-5 h-5 ml-2" />
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Swipe/Next Hint */}
      <button 
        onClick={nextItem}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 text-[#FFD700]/50 hover:text-[#FFD700] transition-colors z-20"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
    </section>
  );
}
