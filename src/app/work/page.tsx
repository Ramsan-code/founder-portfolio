import React from "react";
import { GridGallery } from "@/components/patty-moore/GridGallery";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";

export default function WorkPage() {
  const films = [
    {
      title: "The Silent Watcher",
      metadata: "Feature Film / 2024 / Psychological Thriller",
      imageSrc: "/images/work-1.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Noir Echoes",
      metadata: "Short Film / 2023 / Neo-Noir",
      imageSrc: "/images/work-2.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Shadow Protocol",
      metadata: "Commercial / 2023 / Atmospheric",
      imageSrc: "/images/work-3.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Midnight Call",
      metadata: "Experimental / 2022 / Digital",
      imageSrc: "/images/work-1.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Vortex",
      metadata: "Music Video / 2021 / Cinematic",
      imageSrc: "/images/work-2.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Archival 01",
      metadata: "Documentary / 2020 / Analog",
      imageSrc: "/images/work-3.png",
      aspectRatio: "video" as const,
    },
  ];

  return (
    <main className="bg-charcoal text-off-white min-h-screen">
      <Navbar />
      
      <div className="pt-24 flex flex-col items-center">
        <HeroTypography 
          text="SELECTED WORK" 
          subtitle="A catalog of documented shadows."
          className="min-h-0 py-20"
        />
        
        <section className="w-full max-w-screen-2xl mx-auto pb-32">
          <GridGallery items={films} />
        </section>
      </div>
    </main>
  );
}
