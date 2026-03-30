import React from "react";
import { GridGallery } from "@/components/patty-moore/GridGallery";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";

export default function PressPage() {
  const articles = [
    {
      title: "Tamil Cinema Review",
      metadata: "Ilanthiraiyan: The Voice of Eezham Cinema / Interview / 2024",
      imageSrc: "/images/work-3.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Narrative Landscapes",
      metadata: "The Soil and the Soul in 'Shadows of the Soil' / Feature / 2024",
      imageSrc: "/images/work-1.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Independent Filmmakers Archive",
      metadata: "Building the Future of Eezham Cinema with NewBorn Cinema / News / 2023",
      imageSrc: "/images/work-2.png",
      aspectRatio: "video" as const,
    },
    {
      title: "The Creative Catalyst",
      metadata: "Mentorship and the Power of Thiraippaasarai / Profile / 2023",
      imageSrc: "/images/work-1.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Cinema and Culture",
      metadata: "Bridging the Gap: Traditional Narratives in Modern Frame / Analysis / 2023",
      imageSrc: "/images/work-3.png",
      aspectRatio: "video" as const,
    },
    {
      title: "Visual Storytellers",
      metadata: "Atmospheric Tension in Independent Tamil Shorts / Review / 2022",
      imageSrc: "/images/work-2.png",
      aspectRatio: "video" as const,
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-500">
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
