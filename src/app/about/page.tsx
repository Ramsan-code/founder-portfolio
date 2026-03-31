import React from "react";
import { DataList } from "@/components/patty-moore/DataList";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";
import Image from "next/image";

export default function AboutPage() {
  const infoData = [
    {
      id: "authenticity",
      label: "Authentic Storytelling",
      value: "உண்மைத்தன்மை",
      description: "A commitment to narratives that originate from within the community, reflecting lived experiences through raw, atmospheric storytelling without external compromise.",
    },
    {
      id: "innovation",
      label: "Cinematic Innovation",
      value: "சினிமா நுட்பம்",
      description: "Integrating contemporary filmmaking techniques with traditional narrative structures to create a unique Eezham cinematic aesthetic that honors the past and future.",
    },
    {
      id: "movement",
      label: "Creative Activism",
      value: "கலைவழிச் செயல்பாடு",
      description: "Using film as a tool for community empowerment, education, and fostering a sustainable local film ecosystem through mentorship and collaboration.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black dark:bg-charcoal dark:text-off-white transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar />

      {/* Hero — theme-aware: white/black in light, charcoal/white in dark */}
      <section className="min-h-[40vh] flex flex-col justify-center transition-colors duration-500">
        <HeroTypography
          text="THE VISIONARY"
          subtitle="ILANTHIRAIYAN / BIOGRAPHY"
          className="min-h-0 pb-8"
        />
      </section>

      {/* Bio Section with Portrait */}
      <section className="px-6 sm:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch max-w-7xl mx-auto">
          {/* Left Side: Portrait — More prominent */}
          <div className="relative w-full min-h-[500px] lg:min-h-[800px] overflow-hidden rounded-sm grayscale contrast-[1.1]">
            <Image
              src="/images/patty_moore_portrait.png"
              alt="Ilanthiraiyan — Director Portrait"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Side: Narrative Content */}
          <div className="flex flex-col justify-center space-y-12">
            <p className="text-2xl sm:text-3xl font-medium opacity-90 leading-relaxed italic border-l-2 border-black/10 dark:border-white/10 pl-8">
              "The camera is an instrument that teaches people how to see without a camera."
            </p>
            <div className="space-y-8">
              <p className="text-sm sm:text-base opacity-60 leading-[1.8] font-light">
                Ilanthiraiyan is a filmmaker rooted in the soil of Vavuniya, Sri Lanka, whose work serves as a vital bridge between the historical narratives of the Tamil people and the expansive possibilities of modern cinema. His journey is defined by a dual commitment: the pursuit of artistic excellence and the necessity of community building. 
              </p>
              <p className="text-sm sm:text-base opacity-60 leading-[1.8] font-light">
                Growing up in a landscape rich with untold stories, he recognized early on that cinema is the most potent mirror for a community’s identity. His work does not merely observe; it participates in the cultural resilience of the Eezham context. By blending the raw, atmospheric tension of independent cinema with the deep-rooted oral traditions of his heritage, he creates a cinematic language that is both hyper-local and universally resonant.
              </p>
            </div>
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
            <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Associations</span>
            <p className="text-sm font-bold uppercase tracking-widest">NewBorn Cinema / Thiraippaasarai</p>
            <p className="text-xs opacity-60">Founder & Co-Founder</p>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Base</span>
            <p className="text-sm font-bold uppercase tracking-widest">Vavuniya, Sri Lanka</p>
            <p className="text-xs opacity-60">Global representation</p>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Ongoing</span>
            <p className="text-sm font-bold uppercase tracking-widest">Archive of Resilience</p>
            <p className="text-xs opacity-60">Latest project: "Shadows of the Soil" // 2024</p>
          </div>
        </div>
      </div>
    </main>
  );
}
