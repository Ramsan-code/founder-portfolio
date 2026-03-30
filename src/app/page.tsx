import React from "react";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";
import { Navbar } from "@/components/patty-moore/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-charcoal text-off-white overflow-hidden selection:bg-off-white selection:text-charcoal cursor-crosshair">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Side: Typography */}
        <section className="flex flex-col justify-center px-6 sm:px-16 z-20">
          <HeroTypography 
            text="PATTY MOORE" 
            subtitle="FILM DIRECTOR // THE VISIONARY"
            className="min-h-0 py-0"
          />
        </section>

        {/* Right Side: Cinematic Image */}
        <section className="relative h-[60vh] md:h-screen w-full overflow-hidden">
          <Image
            src="/images/work-1.png"
            alt="Director vision"
            fill
            className="object-cover grayscale brightness-50 opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-transparent hidden md:block" />
        </section>
      </div>

      {/* Atmospheric Baseline */}
      <div className="absolute bottom-12 left-6 sm:left-12 flex space-x-12 opacity-30">
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">EST. 2018</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">ARCHIVE INDEX NO. 248</span>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">LOCATION</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">LOS ANGELES / BERLIN</span>
        </div>
      </div>
    </main>
  );
}
