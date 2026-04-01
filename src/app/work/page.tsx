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
      title: "Thiraippaasarai Hub",
      metadata: "Documentary / 2023 / Cultural",
      imageSrc: "/images/work-3.png",
      youtubeUrl: "https://www.youtube.com/watch?v=JOMh6lX45J4", // --- [CHANGE: Added requested YouTube URL] ---
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
