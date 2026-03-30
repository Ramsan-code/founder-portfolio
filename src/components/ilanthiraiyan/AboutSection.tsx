"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Compass, Camera, Users, Award } from "lucide-react";

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const text = `I am a filmmaker dedicated to authentic storytelling and the elevation of Eezham cinema. With a deep-rooted passion for Tamil culture, history, and linguistics, my work seeks to bridge traditional narratives with modern, innovative filmmaking techniques. As the Founder of NewBorn Cinema, I focus on producing original, thought-provoking films. As the Co-Founder of Thiraippaasarai, my mission extends beyond my own lens. I am committed to building a robust cinema movement, fostering a community where emerging creators can learn, collaborate, and thrive.`;

  return (
    <section className="bg-background text-foreground py-24 sm:py-40" ref={containerRef}>
      <div className="px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Foundation Text / Narrative */}
        <div className="flex flex-col space-y-12">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={isInView ? { opacity: 0.3, x: 0 } : {}}
             transition={{ duration: 1 }}
             className="text-sm uppercase font-black tracking-[0.8em]"
          >
             Narrative Pillars / தூண்கள்
          </motion.div>
          
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.2, duration: 1 }}
             className="text-2xl sm:text-4xl font-bold tracking-tight leading-[1.1] max-w-2xl"
          >
             {text}
          </motion.p>
        </div>

        {/* Impact Visuals / Subsections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
           <div className="flex flex-col space-y-4 border-l border-secondary/20 pl-8">
              <Camera size={24} className="text-secondary" />
              <h4 className="text-sm font-black uppercase tracking-[0.4em]">NewBorn Cinema</h4>
              <p className="text-xs opacity-60 font-medium">Original, thought-provoking film production and artistic direction.</p>
           </div>
           <div className="flex flex-col space-y-4 border-l border-secondary/20 pl-8">
              <Users size={24} className="text-secondary" />
              <h4 className="text-sm font-black uppercase tracking-[0.4em]">Thiraippaasarai</h4>
              <p className="text-xs opacity-60 font-medium">Movement architecture and collaborative learning for emerging creators.</p>
           </div>
           <div className="flex flex-col space-y-4 border-l border-secondary/20 pl-8">
              <Compass size={24} className="text-secondary" />
              <h4 className="text-sm font-black uppercase tracking-[0.4em]">Strategy</h4>
              <p className="text-xs opacity-60 font-medium">Bridging traditional history with modern, innovative filmmaking.</p>
           </div>
           <div className="flex flex-col space-y-4 border-l border-secondary/20 pl-8">
              <Award size={24} className="text-secondary" />
              <h4 className="text-sm font-black uppercase tracking-[0.4em]">Legacy</h4>
              <p className="text-xs opacity-60 font-medium">Building a robust Eezham cinema movement for a thriving community.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-24 sm:py-40">
      <div className="px-6 sm:px-12 flex flex-col items-center justify-center text-center space-y-20">
         <div className="flex flex-col space-y-8 max-w-3xl">
            <motion.h2
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2 }}
               className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
            >
               Let's <span className="text-secondary">Create</span> Together.
            </motion.h2>
            <p className="text-xs sm:text-lg opacity-60 font-medium tracking-wide">
               Whether you are looking to collaborate on a film, invest in NewBorn Cinema, 
               or join the next Cinema Camping workshop, I'd love to connect.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 w-full max-w-4xl pt-12 border-t border-primary-foreground/10 items-start">
            <div className="flex flex-col space-y-4 text-center md:text-left">
               <span className="text-[10px] uppercase font-black tracking-[0.8em] opacity-30">Email / மின்னஞ்சல்</span>
               <a 
                  href="mailto:Ilanthiraiyanfilm@gmail.com" 
                  className="text-xl sm:text-2xl font-black uppercase tracking-tight hover:text-secondary transition-colors"
               >
                  Ilanthiraiyanfilm@gmail.com
               </a>
            </div>
            
            <div className="flex flex-col space-y-4 text-center md:text-right">
               <span className="text-[10px] uppercase font-black tracking-[0.8em] opacity-30">Location / இடம்</span>
               <p className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                  Vavuniya, Sri Lanka
               </p>
            </div>
         </div>
      </div>
    </section>
  );
};
