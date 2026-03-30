import React from "react";
import { DataList } from "@/components/patty-moore/DataList";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";
import Image from "next/image";

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
      <section className="min-h-[40vh] flex flex-col justify-center transition-colors duration-500">
        <HeroTypography
          text="DIRECTOR"
          subtitle="PATTY MOORE / BIOGRAPHY"
          className="min-h-0 pt-24 pb-8"
        />
      </section>

      {/* Two-Column Bio Section */}
      <section className="px-6 sm:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden">
            <Image
                src="/images/patty_moore_portrait.png"
                alt="Patty Moore — Director Portrait"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
            />
          </div>
          
          <div className="max-w-xl space-y-6">
            <p className="text-lg font-medium opacity-80 leading-relaxed italic">
              "The camera is an instrument that teaches people how to see without a camera."
            </p>
            <p className="text-sm sm:text-base opacity-60 leading-[1.8] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-sm sm:text-base opacity-60 leading-[1.8] font-light">
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. 
            </p>
          </div>
        </div>
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
      <div className="px-6 sm:px-12 pb-32 transition-colors duration-500">
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
