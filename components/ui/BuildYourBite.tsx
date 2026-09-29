"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { useCart } from "../CartContext";

const options = {
  mains: [
    { id: "zinger", name: "🍔 Zinger", image: "/images/zinger.png" },
    { id: "beef", name: "🍔 Beef Burger", image: "/images/beef-burger.png" },
    { id: "wrap", name: "🌯 Chicken Wrap", image: "/images/spicy_wrap.png" },
  ],
  sauces: [
    { id: "mayo", name: "Classic Mayo", color: "bg-white" },
    { id: "spicy", name: "Spicy Sriracha", color: "bg-red-500" },
    { id: "bbq", name: "Smoky BBQ", color: "bg-orange-800" },
  ],
  extras: [
    { id: "cheese", name: "Extra Cheese (Rs. 100)" },
    { id: "jalapeno", name: "Jalapeños (Rs. 80)" },
    { id: "chicken", name: "Extra Patty (Rs. 250)" },
  ]
};

export default function BuildYourBite() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    main: options.mains[0],
    sauce: options.sauces[0],
    extras: [] as string[]
  });

  const toggleExtra = (extraId: string) => {
    setSelection(prev => {
      const exists = prev.extras.includes(extraId);
      if (exists) {
        return { ...prev, extras: prev.extras.filter(e => e !== extraId) };
      }
      return { ...prev, extras: [...prev.extras, extraId] };
    });
  };

  const { addToCart } = useCart();
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      // Logic to add to cart goes here
      let basePrice = 650;
      if (selection.main.id === 'beef') basePrice = 850;
      if (selection.main.id === 'wrap') basePrice = 500;
      
      const extrasPrice = selection.extras.reduce((sum, extraId) => {
        if (extraId === 'cheese') return sum + 100;
        if (extraId === 'jalapeno') return sum + 80;
        if (extraId === 'chicken') return sum + 250;
        return sum;
      }, 0);

      addToCart({
        id: `custom-${selection.main.id}-${Date.now()}`,
        name: `CUSTOM ${selection.main.name.replace(/🍔 |🌯 /g, '')}`,
        price: basePrice + extrasPrice,
        image: selection.main.image
      });
      
      // Reset form
      setStep(1);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#111] text-white flex flex-col md:flex-row items-center py-20 overflow-hidden">
      
      {/* Visualizer Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 h-[50vh] md:h-full relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#222] opacity-50 z-0" />
        
        <AnimatePresence mode="popLayout">
          <motion.div
            key={selection.main.id}
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 1.2, opacity: 0, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10 w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <Image src={selection.main.image} alt={selection.main.name} fill className="object-contain drop-shadow-2xl" />
            
            {/* Overlay indicators for visualizer */}
            {selection.sauce && (
              <motion.div 
                key={selection.sauce.id}
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className={`absolute top-10 right-10 w-8 h-8 rounded-full border-2 border-black ${selection.sauce.color} shadow-lg`} 
              />
            )}
            {selection.extras.includes("cheese") && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-10 left-10 bg-yellow-400 text-black px-3 py-1 font-bold rounded-md rotate-[-15deg] shadow-lg">
                + CHEESE
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls Side */}
      <div className="w-full md:w-1/2 p-10 md:p-20 z-10 flex flex-col justify-center">
        <h2 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-extrabold tracking-tighter mb-2">BUILD YOUR BITE</h2>
        <div className="w-20 h-1 bg-[#FFD700] mb-12"></div>

        {/* Step 1: Main */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-xl text-[#FFD700] font-bold mb-6 tracking-widest uppercase">1. Choose Your Main</h3>
            <div className="flex flex-col gap-4">
              {options.mains.map(main => (
                <button 
                  key={main.id} 
                  onClick={() => setSelection(prev => ({ ...prev, main }))}
                  className={`text-left p-6 border-2 transition-all font-bold text-xl uppercase ${selection.main.id === main.id ? 'border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10' : 'border-gray-800 hover:border-gray-600'}`}
                >
                  {main.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Sauce */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-xl text-[#FFD700] font-bold mb-6 tracking-widest uppercase">2. Choose Your Sauce</h3>
            <div className="flex flex-col gap-4">
              {options.sauces.map(sauce => (
                <button 
                  key={sauce.id} 
                  onClick={() => setSelection(prev => ({ ...prev, sauce }))}
                  className={`flex items-center gap-4 text-left p-6 border-2 transition-all font-bold text-xl uppercase ${selection.sauce.id === sauce.id ? 'border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10' : 'border-gray-800 hover:border-gray-600'}`}
                >
                  <div className={`w-6 h-6 rounded-full border border-black ${sauce.color}`}></div>
                  {sauce.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Extras */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-xl text-[#FFD700] font-bold mb-6 tracking-widest uppercase">3. Make It Extra</h3>
            <div className="flex flex-col gap-4">
              {options.extras.map(extra => (
                <button 
                  key={extra.id} 
                  onClick={() => toggleExtra(extra.id)}
                  className={`text-left p-6 border-2 transition-all font-bold text-xl uppercase ${selection.extras.includes(extra.id) ? 'border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10' : 'border-gray-800 hover:border-gray-600'}`}
                >
                  {extra.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="text-gray-400 hover:text-white font-bold tracking-widest uppercase">
              ← Back
            </button>
          ) : <div></div>}
          
          <MagneticButton 
            onClick={handleNext}
            className="bg-[#FFD700] text-black px-8 py-4 font-bold tracking-widest uppercase"
          >
            {step === 3 ? "ADD TO ORDER" : "NEXT STEP →"}
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
