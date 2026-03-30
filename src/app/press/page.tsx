import React from "react";
import { GridGallery } from "@/components/patty-moore/GridGallery";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";

export default function PressPage() {
  const articles = [
    {
      title: "Cahiers du Cinéma",
      metadata: "Patty Moore: The New Master of Suspense / Interview / 2024",
      imageSrc: "/images/work-3.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Sight & Sound",
      metadata: "Aural Architecture in 'The Silent Watcher' / Feature / 2024",
      imageSrc: "/images/work-1.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Variety",
      metadata: "Patty Moore Signs Major Multi-Film Anthology Deal / News / 2023",
      imageSrc: "/images/work-2.png",
      aspectRatio: "video" as const,
    },
    {
      title: "The Hollywood Reporter",
      metadata: "Inside the Minimalist Mind of Director Patty Moore / Profile / 2023",
      imageSrc: "/images/work-1.png",
      aspectRatio: "video" as const,
    },
    {
      title: "IndieWire",
      metadata: "How Moore is Redefining the Noir Aesthetic for 2024 / Analysis / 2023",
      imageSrc: "/images/work-3.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Film Comment",
      metadata: "The Chiaroscuro Effect: A Technical Breakdown / Review / 2022",
      imageSrc: "/images/work-2.png",
      aspectRatio: "video" as const,
    },
  ];

  return (
    <main className="bg-charcoal text-off-white min-h-screen">
      <Navbar />
      
      <div className="pt-24 flex flex-col items-center">
        <HeroTypography 
          text="PRESS INDEX" 
          subtitle="ARCHIVAL MEDIA CLIPPINGS"
          className="min-h-0 py-20"
        />
        
        <section className="w-full max-w-screen-2xl mx-auto pb-32">
          <GridGallery items={articles} />
        </section>
      </div>
    </main>
  );
}
