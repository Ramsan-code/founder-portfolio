import React from "react";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";
import { ChiaroscuroDivider } from "@/components/patty-moore/ChiaroscuroDivider";
import { GridGallery } from "@/components/patty-moore/GridGallery";
import { DataList } from "@/components/patty-moore/DataList";

export default function DemoPage() {
  const workItems = [
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
  ];

  const accoladesData = [
    {
      id: "1",
      label: "Cannes Film Festival",
      value: "Grand Prix du Jury",
      metadata: "2024",
      description: "Awarded for exceptional visionary direction and atmospheric storytelling in 'The Silent Watcher'.",
    },
    {
      id: "2",
      label: "Sundance",
      value: "Best Director",
      metadata: "2023",
      description: "Recognized for breaking conventional narrative structures in independent cinema.",
    },
    {
      id: "3",
      label: "BAFTA",
      value: "Outstanding Debut",
      metadata: "2022",
      description: "Honored for the unique visual language established in early short works.",
    },
  ];

  return (
    <main className="min-h-screen selection:bg-charcoal selection:text-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal text-off-white min-h-screen flex flex-col justify-center">
        <HeroTypography 
          text="PATTY MOORE" 
          subtitle="Director · Auteur · Visionary"
        />
      </section>

      {/* Transition to Light */}
      <ChiaroscuroDivider toTheme="light" />

      {/* Grid Gallery - Work */}
      <section className="bg-off-white text-charcoal py-24">
        <div className="px-6 sm:px-12 mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.8em] font-black opacity-20">
            Selected Works
          </h2>
        </div>
        <GridGallery items={workItems} />
      </section>

      {/* Transition to Dark */}
      <ChiaroscuroDivider toTheme="dark" height="h-64" />

      {/* Data List - Accolades */}
      <section className="bg-charcoal text-off-white py-24">
        <DataList 
          title="Recognition & Awards" 
          items={accoladesData} 
          columns={1}
        />
      </section>

      {/* Final Section */}
      <section className="bg-charcoal text-off-white py-40 flex flex-col items-center justify-center">
        <HeroTypography 
          text="CONTACT" 
          subtitle="Building the archive of the future."
          className="min-h-0 py-0"
        />
      </section>
    </main>
  );
}
