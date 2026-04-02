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
      youtubeUrl: "https://www.youtube.com/watch?v=C86FZQB3RD8", // --- [CHANGE: Added example YouTube URL] ---
      aspectRatio: "video" as const,
    },
    {
      title: "Resilience through Art", // --- [CHANGE: Added new requested YouTube URL] ---
      metadata: "Conversations / 2024 / Cultural",
      imageSrc: "/images/work-3.png",
      youtubeUrl: "https://youtu.be/tDV-N9grDqQ?si=rQ5WfkkwB903sAcW",
      aspectRatio: "video" as const,
    },
    {
      title: "Vision of Thiraippaasarai", // --- [CHANGE: Added new requested YouTube URL] ---
      metadata: "Short Film / 2024 / Documentary",
      imageSrc: "/images/work-1.png",
      youtubeUrl: "https://youtu.be/-bzrK1fcEds?si=PTktyfWNh3yrK-rI",
      aspectRatio: "video" as const,
    },


    {
      title: "NewBorn Cinema Documentary",
      metadata: "Feature Film / 2024 / Cultural",
      imageSrc: "/images/work-2.png",
      youtubeUrl: "https://youtu.be/e3CateLfoD0?si=STEofE5krakoyE99",
      aspectRatio: "video" as const,
    },

    {
      title: "Thiraippaasarai Hub",
      metadata: "Documentary / 2023 / Cultural",
      imageSrc: "/images/work-3.png",
      youtubeUrl: "https://www.youtube.com/watch?v=JOMh6lX45J4",
      aspectRatio: "video" as const,
    },

    {
      title: "Cultural Narratives",
      metadata: "Documentary Film / 2024",
      imageSrc: "/images/work-3.png",
      youtubeUrl: "https://youtu.be/S6TJ2CZtKag?si=eTC8dbwfddbrjEcZ",
      aspectRatio: "video" as const,
    },
    {
      title: "Archive of Visions",
      metadata: "Experimental Documentary / 2024",
      imageSrc: "/images/work-1.png",
      youtubeUrl: "https://youtu.be/GBalcsbWodw?si=cTgBe8VXTmiftZ2M",
      aspectRatio: "video" as const,
    },
    {
      title: "Visions of Resilience",
      metadata: "Experimental Film / 2024 / Artistic",
      imageSrc: "/images/work-2.png",
      youtubeUrl: "https://youtu.be/_1Mv7PmYSQo?si=hEzcLBhUqYGjUpo7",
      aspectRatio: "video" as const,
    },
    {
      title: "Cultural Movement", // --- [CHANGE: Added new requested YouTube URL] ---
      metadata: "Documentary Short / 2024 / Empowerment",
      imageSrc: "/images/work-3.png",
      youtubeUrl: "https://youtu.be/emiLZXaQtwY?si=fj8TYvQv5x7TQlO6", 
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
