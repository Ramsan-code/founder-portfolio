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
      title: "Archive of Visions", // --- [CHANGE: Added new requested YouTube URL] ---
      metadata: "Experimental Documentary / 2024",
      imageSrc: "/images/work-1.png",
      youtubeUrl: "https://youtu.be/GBalcsbWodw?si=cTgBe8VXTmiftZ2M",
      aspectRatio: "video" as const,
    },
  ];

  const shorts = [
    {
      title: "Impact of Cinema Camping", // --- [CHANGE: Added requested YouTube Short] ---
      metadata: "Shorts / 2024 / Mentorship",
      imageSrc: "/images/work-3.png",
      youtubeUrl: "https://youtube.com/shorts/JnJAfZEew5Y",
      aspectRatio: "portrait" as const,
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
