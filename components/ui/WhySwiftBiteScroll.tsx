"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const words = [
  { text: "FRESH.", image: "/images/fresh.png" },
  { text: "CRISPY.", image: "/images/crispy.png" },
  { text: "LOADED.", image: "/images/loaded.png" },
  { text: "FAST.", image: "/images/fast.png" },
];

export default function WhySwiftBiteScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black text-[#e5e2e1]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {words.map((word, index) => {
          // Each word is active for 0.25 of the scroll progress
          const start = index * 0.25;
          const end = (index + 1) * 0.25;
          
          // Ensure strictly increasing offsets
          const a = start;
          const b = start + 0.05;
          const c = end - 0.05;
          const d = end;
          
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [a, b, c, d], [0, 1, 1, 0]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(scrollYProgress, [start, end], [0.8, 1.2]);

          return (
            <motion.div 
              key={word.text}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              style={{ opacity }}
            >
              {/* Background Food Image */}
              <motion.div 
                className="absolute inset-0 z-0 opacity-40"
                style={{ scale }}
              >
                <Image src={word.image} alt={word.text} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />
              </motion.div>

              {/* Bold Typography */}
              <h2 className="relative z-10 font-[family-name:var(--font-epilogue)] text-[15vw] md:text-[18vw] font-black tracking-tighter uppercase text-[#FFD700] drop-shadow-2xl mix-blend-screen">
                {word.text}
              </h2>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
