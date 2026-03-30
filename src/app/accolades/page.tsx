import React from "react";
import { DataList } from "@/components/patty-moore/DataList";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";

export default function AccoladesPage() {
  const awards = [
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
    {
      id: "4",
      label: "Berlinale",
      value: "Silver Bear",
      metadata: "2021",
      description: "Atmospheric Achievement in 'Noir Echoes'.",
    },
    {
      id: "5",
      label: "Locarno",
      value: "Special Prize",
      metadata: "2020",
      description: "Creative Innovation Grant.",
    },
  ];

  return (
    <main className="min-h-screen bg-off-white text-charcoal">
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
                 <p className="text-sm uppercase tracking-[0.3em] font-bold">Selected Industry Recognition from Cannes, Sundance, BAFTA, Berlinale, and Locarno International Film Festivals.</p>
               </div>
             </div>
             
             <div className="flex flex-col space-y-8 opacity-40">
               <span className="text-[120px] font-black leading-none tracking-tighter uppercase select-none pointer-events-none">archive.</span>
               <p className="text-[10px] uppercase tracking-[0.6em] font-medium leading-relaxed">Each accolade is a testament to the rigorous discipline of Swiss-style archival cinema and the pursuit of narrative purity.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
