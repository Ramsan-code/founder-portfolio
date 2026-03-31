import React from "react";
import { GridGallery } from "@/components/patty-moore/GridGallery";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";

export default function WorkPage() {
  const films = [
    {
      title: "Shadows of the Soil",
      metadata: "Feature Film / 2024 / Narrative",
      imageSrc: "/images/work-1.png",
      aspectRatio: "video" as const,
    },
    {
      title: "The Echo of Vavuniya",
      metadata: "Short Film / 2023 / Atmospheric",
      imageSrc: "/images/work-2.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Resilience in Frame",
      metadata: "Documentary / 2023 / Cultural",
      imageSrc: "/images/work-3.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Ancestral Whispers",
      metadata: "Experimental / 2022 / Digital",
      imageSrc: "/images/work-1.png",
      aspectRatio: "video" as const,
    },
    {
      title: "The Silent Watcher",
      metadata: "Short Film / 2021 / Cinematic",
      imageSrc: "/images/work-2.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Eezham Origins",
      metadata: "Archival / 2020 / Analog",
      imageSrc: "/images/work-3.png",
      aspectRatio: "video" as const,
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-500">
      <Navbar />
      
      <div className="flex flex-col items-center">
        <HeroTypography 
          text="SELECTED WORK" 
          subtitle="A living archive of Eezham cinema."
          className="min-h-0 py-20"
        />
        
        <section className="w-full max-w-screen-2xl mx-auto pb-32">
          <GridGallery items={films} />
        </section>
      </div>
    </main>
  );
}
