"use client";

import React from "react";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-foreground selection:text-background cursor-crosshair transition-colors duration-500">
      <Navbar />

      <div className="pt-32 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side: Cinematic Form */}
        <section className="flex flex-col justify-center px-6 sm:px-16 z-20 pb-20">
          <HeroTypography 
            text="GET IN TOUCH" 
            subtitle="INITIATE PROTOCOL"
            className="min-h-0 py-0 mb-12"
          />
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-full max-w-md space-y-12"
          >
            <div className="flex flex-col space-y-4">
              <label className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Your Name</label>
              <input 
                type="text" 
                className="bg-transparent border-b border-off-white/10 py-4 text-xl sm:text-2xl font-bold tracking-tight focus:border-off-white outline-none transition-colors"
                placeholder="..."
              />
            </div>
            
            <div className="flex flex-col space-y-4">
              <label className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Your Email Address</label>
              <input 
                type="email" 
                className="bg-transparent border-b border-off-white/10 py-4 text-xl sm:text-2xl font-bold tracking-tight focus:border-off-white outline-none transition-colors"
                placeholder="NAME@ORGANIZATION.COM"
              />
            </div>
            
            <div className="flex flex-col space-y-4">
              <label className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Message</label>
              <textarea 
                className="bg-transparent border-b border-off-white/10 py-4 text-xl sm:text-2xl font-bold tracking-tight focus:border-off-white outline-none transition-colors min-h-[100px] resize-none"
                placeholder="..."
              />
            </div>
            
            <button className="pt-12 text-sm uppercase tracking-[1em] font-black hover:opacity-50 transition-opacity">
              SEND COMMUNIQUÉ
            </button>
          </motion.form>
        </section>

        {/* Right Side: Cinematic Image */}
        <section className="relative h-[40vh] lg:h-screen w-full overflow-hidden opacity-40">
          <Image
            src="/images/work-3.png"
            alt="Director vision"
            fill
            className="object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-transparent hidden lg:block" />
        </section>
      </div>

      {/* Atmospheric Baseline */}
      <div className="absolute bottom-12 left-6 sm:left-12 flex space-x-12 opacity-30">
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Location / இடம்</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Vavuniya, Sri Lanka</span>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Email / மின்னஞ்சல்</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Ilanthiraiyanfilm@gmail.com</span>
        </div>
      </div>
    </main>
  );
}
