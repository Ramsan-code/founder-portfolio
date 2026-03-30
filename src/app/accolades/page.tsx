import React from "react";
import { DataList } from "@/components/patty-moore/DataList";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";

export default function AccoladesPage() {
  const awards = [
    {
      id: "1",
      label: "Independent Narrative Awards",
      value: "Best Director",
      metadata: "2024",
      description: "Recognized for exceptional visionary direction and atmospheric storytelling in 'Shadows of the Soil'.",
    },
    {
      id: "2",
      label: "Cultural Heritage Grants",
      value: "Creative Production Grant",
      metadata: "2023",
      description: "Awarded for the preservation of oral histories through cinematic storytelling.",
    },
    {
      id: "3",
      label: "Tamil Film Festival",
      value: "Emerging Voice Award",
      metadata: "2023",
      description: "Honored for the unique visual language established in early short works and community building.",
    },
    {
      id: "4",
      label: "Storytellers Workshop",
      value: "Innovation in Narrative",
      metadata: "2022",
      description: "Recognized for breaking conventional documentary structures in postwar explorations.",
    },
    {
      id: "5",
      label: "Creative Activism Summit",
      value: "Catalyst Award",
      metadata: "2021",
      description: "Honored for building sustainable film ecosystems via Thiraippaasarai.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar />

      <section className="pt-32 pb-12 flex flex-col items-center">
        <HeroTypography 
          text="ACCOLADES" 
          subtitle="ARCHIVE OF RECOGNITION"
          className="min-h-0 py-20"
        />
      </section>

      <section className="max-w-screen-2xl mx-auto px-6 sm:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.8em] font-black opacity-30 sticky top-32 mb-12 block">AWARDS & HONORS</span>
            <DataList 
              items={awards} 
              columns={1}
              className="p-0 space-y-0"
            />
          </div>
          
          <div className="hidden lg:flex flex-col space-y-24 mt-32">
              <div className="flex flex-col space-y-8">
                <span className="text-[80px] font-black leading-none opacity-5 tracking-tighter uppercase line-clamp-1">LAUREL WREATHS</span>
                <div className="border-l-2 border-charcoal pl-8 py-4">
                  <p className="text-sm uppercase tracking-[0.3em] font-bold">Selected Industry Recognition from Independent Film Forums, Cultural Heritage Grants, and International Narrative Workshops.</p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-8 opacity-40">
                <span className="text-[120px] font-black leading-none tracking-tighter uppercase select-none pointer-events-none">archive.</span>
                <p className="text-[10px] uppercase tracking-[0.6em] font-medium leading-relaxed">Each accolade is a testament to the rigorous discipline of archival storytelling and the pursuit of narrative purity within the Eezham context.</p>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
