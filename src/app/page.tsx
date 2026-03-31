import React from "react";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";
import { Navbar } from "@/components/patty-moore/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-foreground selection:text-background cursor-crosshair transition-colors duration-500">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen pt-24 sm:pt-0">
        {/* Left Side: Typography */}
        <section className="flex flex-col justify-center px-6 sm:px-16 z-20">
          <HeroTypography 
            text="ILANTHIRAIYAN" 
            subtitle="FILMMAKER // STORYTELLER // CATALYST for Eezham Cinema "
            className="min-h-0 pt-32 pb-20 sm:pt-16 sm:pb-0"
          />
        </section>

        {/* Right Side: Cinematic Image */}
        <section className="relative h-[60vh] md:h-screen w-full overflow-hidden">
          <Image
            src="/images/patty_moore_portrait.png"
            alt="Ilanthiraiyan — Director Portrait"
            fill
            className="object-cover object-top grayscale contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-transparent hidden md:block" />
        </section>
      </div>

      {/* Atmospheric Baseline — responsive positioning */}
      <div className="relative md:absolute bottom-0 md:bottom-12 left-0 md:left-12 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 opacity-30 px-6 lg:px-16 py-12 md:py-0 bg-background md:bg-transparent">
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">EST. 2018</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">ARCHIVE INDEX NO. 248</span>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">LOCATION</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">VAVUNIYA, SRI LANKA</span>
        </div>
      </div>
    </main>
  );
}
