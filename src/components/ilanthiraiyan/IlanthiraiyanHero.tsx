"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const IlanthiraiyanHero = () => {
  return (
    <main className="relative min-h-screen bg-primary overflow-hidden selection:bg-secondary selection:text-primary-foreground">
      {/* Background Layer */}
      <div className="absolute inset-0 opacity-40 z-0 scale-105 filter grayscale-[50%] brightness-[40%]">
        <Image
           src="/images/ilanthiraiyan_hero.png"
           alt="Cinema aesthetics"
           fill
           priority
           className="object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-12 pt-24">
        {/* Subtitle / Metadata */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 1 }}
           className="flex flex-col space-y-4 mb-20"
        >
          <span className="text-secondary text-[10px] uppercase tracking-[0.5em] font-black">
             Established / நிறுவப்பட்டது 2018
          </span>
          <div className="w-12 h-1 bg-secondary" />
        </motion.div>

        {/* Massive Typography */}
        <div className="flex flex-col space-y-2">
           <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] sm:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter"
           >
              Ilanthiraiyan
           </motion.h1>
           <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="tamil-text text-[8vw] sm:text-[6vw] font-black leading-[0.8] tracking-normal inline-block opacity-60"
           >
              இளந்திரையன்
           </motion.h2>
        </div>

        {/* Tagline / Subtitle */}
        <div className="mt-20 max-w-2xl bg-primary-foreground/5 p-8 backdrop-blur-sm self-end sm:self-auto border-l-2 border-secondary">
           <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xs sm:text-sm uppercase tracking-[0.4em] font-bold text-primary-foreground mb-6"
           >
              Filmmaker | Storyteller | Catalyst for Eezham Cinema
           </motion.p>
           <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-xs sm:text-base leading-relaxed opacity-60 font-medium tracking-wide max-w-lg"
           >
              Crafting compelling narratives through <span className="text-secondary">NewBorn Cinema</span> and empowering 
              the next generation through <span className="text-secondary">Thiraippaasarai</span>.
           </motion.p>
        </div>
      </div>

      {/* Atmospheric Element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20 pointer-events-none">
         <div className="w-[1px] h-24 bg-primary-foreground" />
         <span className="text-[10px] uppercase font-bold tracking-[1em] mt-8 select-none">EEZHAM CINEMA ARCHIVE INDEX NO.248</span>
      </div>
    </main>
  );
};
