import React from "react";
import type { Metadata } from "next";
import { IlanthiraiyanHero } from "@/components/ilanthiraiyan/IlanthiraiyanHero";
import { AboutSection, CTASection } from "@/components/ilanthiraiyan/AboutSection";
import { FilmmakerWork } from "@/components/ilanthiraiyan/FilmmakerWork";
import { InteractiveTimeline } from "@/components/ilanthiraiyan/InteractiveTimeline";

export const metadata: Metadata = {
  title: "Ilanthiraiyan இளந்திரையன் — Filmmaker | Storyteller | Catalyst for Eezham Cinema",
  description:
    "Founder of NewBorn Cinema and Co-Founder of Thiraippaasarai. Crafting compelling narratives and empowering the next generation of Eezham cinema creators.",
};

export default function IlanthiraiyanPage() {
  return (
    <main className="min-h-screen selection:bg-secondary selection:text-primary-foreground">
      {/* 1. Hero — full-screen cinematic intro */}
      <IlanthiraiyanHero />

      {/* 2. About — bio + narrative pillars */}
      <AboutSection />

      {/* 3. Work — YouTube playlist embeds */}
      <FilmmakerWork />

      {/* 4. Journey — scroll-driven milestone timeline */}
      <InteractiveTimeline />

      {/* 5. CTA — contact invitation */}
      <CTASection />
    </main>
  );
}
