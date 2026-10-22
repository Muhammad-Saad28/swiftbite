"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveProductImage from "./InteractiveProductImage";
import MagneticButton from "./MagneticButton";
import { ChevronRight } from "lucide-react";
import { useCart } from "../CartContext";
import { supabase } from "../../lib/supabase";

interface InteractiveItem {
  id: string;
  name: string;
  price: string;
  rawPrice: number;
  image: string;
  ingredients: string[];
  category: string;
}

const fallbackItems: InteractiveItem[] = [
  {
    id: "f0000000-0000-0000-0000-000000000003",
    name: "ZINGER BURGER",
    price: "Rs. 400",
    rawPrice: 400,
    image: "/images/zinger.png",
    ingredients: ["CRISPY ZINGER FILLET", "CRUNCHY LETTUCE", "SPICY HOUSE MAYO", "TOASTED SESAME BUN"],
    category: "01 — BURGERS",
  },
  {
    id: "f0000000-0000-0000-0000-000000000009",
    name: "SWIFT SPECIAL MIGHTY",
    price: "Rs. 700",
    rawPrice: 700,
    image: "/images/beef-burger.png",
    ingredients: ["DOUBLE PATTY", "DOUBLE MELTED CHEESE", "SECRET SWIFT SAUCE", "CARAMELIZED ONIONS"],
    category: "02 — BURGERS",
  },
  {
    id: "f0000000-0000-0000-0000-000000000017",
    name: "ROYAL CROWN CRUST",
    price: "Rs. 1,400",
    rawPrice: 1400,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
    ingredients: ["CHICKEN TIKKA", "CHEESE STUFFED CROWN CRUST", "BLACK OLIVES", "BELL PEPPERS"],
    category: "03 — PIZZA",
  },
  {
    id: "f0000000-0000-0000-0000-000000000013",
    name: "MALAI + TIKKA ROLL",
    price: "Rs. 450",
    rawPrice: 450,
    image: "/images/spicy_wrap.png",
    ingredients: ["CREAMY MALAI BOOTI", "SPICY RED TIKKA", "MINT CHUTNEY", "FLAKY CRISPY PARATHA"],
    category: "04 — PARATHA ROLLS",
  },
  {
    id: "f0000000-0000-0000-0000-00000000002a",
    name: "LOADED FRIES",
    price: "Rs. 650",
    rawPrice: 650,
    image: "/images/loaded.png",
    ingredients: ["CRISPY FRIES", "CHEDDAR CHEESE SAUCE", "CHICKEN CHUNKS", "JALAPEÑOS"],
    category: "05 — FRIES",
  },
  {
    id: "f0000000-0000-0000-0000-000000000030",
    name: "ZINGER COMBO DEAL",
    price: "Rs. 550",
    rawPrice: 550,
    image: "/images/signature_drink.png",
    ingredients: ["1 ZINGER BURGER", "1 REGULAR FRIES", "1 REGULAR DRINK"],
    category: "06 — COMBO DEALS",
  },
];

export default function InteractiveMenu() {
  const [items, setItems] = useState<InteractiveItem[]>(fallbackItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchFromDB() {
      try {
        const { data } = await supabase
          .from('menu_items')
          .select('id, name, price, description, image, categories(name)')
          .eq('featured', true)
          .order('price');

        if (data && data.length > 0) {
          const mapped: InteractiveItem[] = data.map((d: any, idx: number) => {
            const ingParts = d.description
              ? d.description.split(/[,+]/).map((s: string) => s.trim().toUpperCase()).filter(Boolean)
              : [d.name.toUpperCase()];
            return {
              id: d.id,
              name: d.name.toUpperCase(),
              price: `Rs. ${d.price.toLocaleString()}`,
              rawPrice: d.price,
              image: d.image || fallbackItems[0].image,
              ingredients: ingParts.slice(0, 4),
              category: `0${idx + 1} — ${(d.categories?.name || 'SELECTION').toUpperCase()}`
            };
          });
          setItems(mapped);
        }
      } catch (err) {
        console.error("Error loading interactive menu from database:", err);
      }
    }
    fetchFromDB();
  }, []);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[currentIndex] || fallbackItems[0];

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
                onClick={() => addToCart({
                  id: currentItem.id,
                  name: currentItem.name,
                  price: currentItem.rawPrice,
                  image: currentItem.image
                })}
                className="bg-[#FFD700] text-black px-8 py-4 font-bold text-lg rounded-none hover:bg-white transition-colors"
              >
                ADD TO BITE <ChevronRight className="inline-block w-5 h-5 ml-2" />
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
