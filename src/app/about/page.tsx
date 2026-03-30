import React from "react";
import { DataList } from "@/components/patty-moore/DataList";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";

export default function AboutPage() {
  const infoData = [
    {
      id: "bio",
      label: "Biography",
      value: "Auteur Theory",
      description: "Patty Moore is a film director specializing in psychological thrillers. Her work is characterized by extreme restraint, desaturated palettes, and an obsessive focus on atmospheric tension. Positioning cinema as a documented record of the subconscious, Moore removes all decorative layers to expose the raw mechanics of suspense.",
    },
    {
      id: "approach",
      label: "The Approach",
      value: "Chiaroscuro Cinema",
      description: "Every frame is a study in high contrast. By utilizing sharp lighting shifts and monochromatic environments, viewers are forced to engage with the spatial rhythm of the scene rather than just the narrative.",
    },
    {
      id: "vision",
      label: "Vision",
      value: "The Archive",
      description: "Moore views her filmography not as a product, but as an archival vault. Each project is a documented history of a specific psychological state, maintained with strict alignment and Swiss-style precision.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black dark:bg-charcoal dark:text-off-white transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar />

      {/* Hero — theme-aware: white/black in light, charcoal/white in dark */}
      <section className="min-h-[70vh] flex flex-col justify-center transition-colors duration-500">
        <HeroTypography
          text="DIRECTOR"
          subtitle="PATTY MOORE / BIOGRAPHY"
          className="min-h-0 py-0"
        />
      </section>

      {/* Thin divider line instead of animated block */}
      <div className="w-full border-t border-black/10 dark:border-white/10" />

      {/* Narrative Pillars */}
      <section className="py-32 px-6 sm:px-12 transition-colors duration-500">
        <div className="max-w-4xl">
          <DataList
            title="Narrative Pillars"
            items={infoData}
            columns={1}
            className="p-0"
          />
        </div>
      </section>

      {/* Metadata Grid */}
      <div className="px-12 pb-32 transition-colors duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Education</span>
            <p className="text-sm font-bold uppercase tracking-widest">Berlin Academy of Film</p>
            <p className="text-xs opacity-60">Master of Fine Arts // 2018</p>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Base</span>
            <p className="text-sm font-bold uppercase tracking-widest">Los Angeles / Berlin</p>
            <p className="text-xs opacity-60">Global representation</p>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Status</span>
            <p className="text-sm font-bold uppercase tracking-widest">Active Development</p>
            <p className="text-xs opacity-60">Next project: &quot;Vortex&quot; // 2026</p>
          </div>
        </div>
      </div>
    </main>
  );
}
