"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client
// Note: Requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder_key";
const supabase = createClient(supabaseUrl, supabaseKey);

interface LiveOrderTrackingProps {
  orderId?: string;
}

const statusMap: Record<string, number> = {
  pending: 0,
  accepted: 1, // CONFIRMED
  preparing: 2, // IN THE KITCHEN / BEING PREPARED
  ready: 3, // READY
  completed: 4
};

const steps = [
  "CONFIRMED",
  "IN THE KITCHEN",
  "BEING PREPARED",
  "READY"
];

export default function LiveOrderTracking({ orderId }: LiveOrderTrackingProps) {
  const [currentStep, setCurrentStep] = useState(0); // Mocking step 0 initially
  
  // Real-time Supabase Subscription
  useEffect(() => {
    if (!orderId) return;

    const channel = supabase
      .channel(`order-tracking-${orderId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'orders',
          filter: `id=eq.${orderId}`
        },
        (payload) => {
          const newStatus = payload.new.status;
          if (statusMap[newStatus] !== undefined) {
            // Map DB status to UI steps
            let uiStep = 0;
            if (newStatus === 'accepted') uiStep = 0;
            if (newStatus === 'preparing') uiStep = 2; // Combines in kitchen + preparing
            if (newStatus === 'ready') uiStep = 3;
            setCurrentStep(uiStep);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [orderId]);

  // Mock simulation for demo purposes
  useEffect(() => {
    if (!orderId) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev < 3 ? prev + 1 : 0));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [orderId]);

  return (
    <section className="w-full bg-[#111] text-[#FFD700] py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-[family-name:var(--font-epilogue)] text-4xl md:text-6xl font-black tracking-tighter uppercase mb-16 text-white">
          YOUR ORDER
        </h2>

        <div className="w-full relative flex flex-col gap-8">
          {/* Vertical Progress Line */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-gray-800 rounded-full z-0">
            <motion.div 
              className="w-full bg-[#FFD700] rounded-full"
              initial={{ height: "0%" }}
              animate={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {steps.map((step, index) => {
            const isCompleted = index <= currentStep;
            const isCurrent = index === currentStep;

            return (
              <div key={step} className="flex items-center gap-8 relative z-10">
                
                {/* Status Indicator Circle */}
                <motion.div 
                  className={`w-12 h-12 rounded-full border-4 flex items-center justify-center bg-[#111] transition-colors duration-300 ${isCompleted ? 'border-[#FFD700]' : 'border-gray-800'}`}
                  animate={isCurrent ? { scale: [1, 1.2, 1], boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)" } : {}}
                  transition={isCurrent ? { repeat: Infinity, duration: 2 } : {}}
                >
                  {isCompleted ? (
                    <span className="text-[#FFD700] font-bold">✓</span>
                  ) : (
                    <span className="w-3 h-3 bg-gray-800 rounded-full" />
                  )}
                </motion.div>

                {/* Status Text */}
                <motion.h3 
                  className={`font-black text-2xl md:text-4xl tracking-widest uppercase transition-colors duration-300 ${isCompleted ? 'text-white' : 'text-gray-600'}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {step}
                </motion.h3>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
