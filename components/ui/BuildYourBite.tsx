"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { useCart } from "../CartContext";
import { supabase } from "../../lib/supabase";

interface MainOption {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface SauceOption {
  id: string;
  name: string;
  color: string;
}

const fallbackMains: MainOption[] = [
  { id: "f0000000-0000-0000-0000-000000000003", name: "🍔 Zinger Burger", price: 400, image: "/images/zinger.png" },
  { id: "f0000000-0000-0000-0000-000000000008", name: "🍔 Beef Burger", price: 600, image: "/images/beef-burger.png" },
  { id: "f0000000-0000-0000-0000-00000000001f", name: "🌯 Tortilla Wrap", price: 600, image: "/images/spicy_wrap.png" },
];

const fallbackSauces: SauceOption[] = [
  { id: "sriracha", name: "Spicy Sriracha", color: "bg-red-500" },
  { id: "garlic-mayo", name: "Garlic Mayo", color: "bg-white" },
  { id: "peri-peri", name: "Peri Peri", color: "bg-amber-600" },
  { id: "dynamite", name: "Dynamite Sauce", color: "bg-orange-500" },
  { id: "honey-mustard", name: "Honey Mustard", color: "bg-yellow-400" },
];

const extrasList = [
  { id: "cheese", name: "Extra Cheese (+Rs. 100)", price: 100 },
  { id: "jalapeno", name: "Jalapeños (+Rs. 80)", price: 80 },
  { id: "patty", name: "Extra Patty (+Rs. 250)", price: 250 },
];

export default function BuildYourBite() {
  const [step, setStep] = useState(1);
  const [mains, setMains] = useState<MainOption[]>(fallbackMains);
  const [sauces, setSauces] = useState<SauceOption[]>(fallbackSauces);

  const [selection, setSelection] = useState<{
    main: MainOption;
    sauce: SauceOption;
    extras: string[];
  }>({
    main: fallbackMains[0],
    sauce: fallbackSauces[0],
    extras: []
  });

  const { addToCart } = useCart();

  useEffect(() => {
    async function loadMainsAndSauces() {
      try {
        // Fetch mains from DB (Zinger Burger, Beef Burger, Special Tortilla Wrap)
        const { data: mainData } = await supabase
          .from('menu_items')
          .select('id, name, price, image')
          .in('name', ['Zinger Burger', 'Beef Burger', 'Special Tortilla Wrap']);

        if (mainData && mainData.length > 0) {
          const mappedMains: MainOption[] = mainData.map((m: any) => ({
            id: m.id,
            name: m.name.toLowerCase().includes('wrap') ? `🌯 ${m.name}` : `🍔 ${m.name}`,
            price: m.price,
            image: m.name.toLowerCase().includes('beef')
              ? '/images/beef-burger.png'
              : m.name.toLowerCase().includes('wrap')
              ? '/images/spicy_wrap.png'
              : '/images/zinger.png'
          }));
          setMains(mappedMains);
          setSelection(prev => ({
            ...prev,
            main: mappedMains[0]
          }));
        }

        // Fetch sauces from DB
        const { data: sauceData } = await supabase
          .from('menu_items')
          .select('id, name, price, categories!inner(name)')
          .eq('categories.name', 'Sauces and Add-ons');

        if (sauceData && sauceData.length > 0) {
          const sauceColorMap: Record<string, string> = {
            'Sriracha Sauce': 'bg-red-500',
            'Garlic Mayo': 'bg-white',
            'Peri Peri Sauce': 'bg-amber-600',
            'Dynamite Sauce': 'bg-orange-500',
            'Honey Mustard': 'bg-yellow-400'
          };
          const mappedSauces: SauceOption[] = sauceData.map((s: any) => ({
            id: s.id,
            name: s.name,
            color: sauceColorMap[s.name] || 'bg-amber-400'
          }));
          setSauces(mappedSauces);
          setSelection(prev => ({
            ...prev,
            sauce: mappedSauces[0]
          }));
        }
      } catch (e) {
        console.error("Error loading BuildYourBite items from DB:", e);
      }
    }
    loadMainsAndSauces();
  }, []);

  const toggleExtra = (extraId: string) => {
    setSelection(prev => {
      const exists = prev.extras.includes(extraId);
      if (exists) {
        return { ...prev, extras: prev.extras.filter(e => e !== extraId) };
      }
      return { ...prev, extras: [...prev.extras, extraId] };
    });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      const basePrice = selection.main.price || 400;
      const extrasPrice = selection.extras.reduce((sum, extraId) => {
        const found = extrasList.find(e => e.id === extraId);
        return sum + (found ? found.price : 0);
      }, 0);

      addToCart({
        id: `custom-${selection.main.id}-${Date.now()}`,
        name: `CUSTOM ${selection.main.name.replace(/🍔 |🌯 /g, '')} (${selection.sauce.name})`,
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
                🧀 EXTRA CHEESE
              </motion.div>
            )}
            {selection.extras.includes("jalapeno") && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-10 left-10 bg-green-500 text-white px-3 py-1 font-bold rounded-md rotate-[10deg] shadow-lg">
                🌶️ JALAPEÑOS
              </motion.div>
            )}
            {selection.extras.includes("patty") && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-20 right-10 bg-red-600 text-white px-3 py-1 font-bold rounded-md rotate-[5deg] shadow-lg">
                🥩 EXTRA PATTY
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Builder Side */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center max-w-lg z-10">
        <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.2em] mb-2 uppercase">Custom Flavor Lab</h2>
        <h1 className="font-[family-name:var(--font-epilogue)] text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
          BUILD YOUR<br/>PERFECT BITE.
        </h1>

        {/* Multi-step logic */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${s <= step ? 'bg-[#FFD700]' : 'bg-gray-800'}`}
            />
          ))}
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-xl text-[#FFD700] font-bold mb-6 tracking-widest uppercase">1. Choose The Core Base</h3>
            <div className="flex flex-col gap-4">
              {mains.map(main => (
                <button 
                  key={main.id} 
                  onClick={() => setSelection({ ...selection, main })}
                  className={`text-left p-6 border-2 transition-all font-bold text-xl uppercase flex justify-between items-center ${selection.main.id === main.id ? 'border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10' : 'border-gray-800 hover:border-gray-600'}`}
                >
                  <span>{main.name}</span>
                  <span className="text-sm font-semibold opacity-80">Rs. {main.price}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-xl text-[#FFD700] font-bold mb-6 tracking-widest uppercase">2. Inject Flavor Sauce</h3>
            <div className="flex flex-col gap-4">
              {sauces.map(sauce => (
                <button 
                  key={sauce.id} 
                  onClick={() => setSelection({ ...selection, sauce })}
                  className={`flex items-center gap-4 text-left p-6 border-2 transition-all font-bold text-xl uppercase ${selection.sauce.id === sauce.id ? 'border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10' : 'border-gray-800 hover:border-gray-600'}`}
                >
                  <div className={`w-6 h-6 rounded-full border border-black ${sauce.color}`}></div>
                  {sauce.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-xl text-[#FFD700] font-bold mb-6 tracking-widest uppercase">3. Make It Extra</h3>
            <div className="flex flex-col gap-4">
              {extrasList.map(extra => (
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
