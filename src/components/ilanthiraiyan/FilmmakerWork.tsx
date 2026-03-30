"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface PlaylistProps {
  title: string;
  tamilTitle: string;
  description: string;
  listId: string;
}

const playlists: PlaylistProps[] = [
  {
    title: "Directorial Archive",
    tamilTitle: "இயக்கத்தின் கோப்புகள்",
    description: "Original narratives focusing on Tamil history and linguistics.",
    listId: "PLhDGPjGo2JN_3ZzUbWjIMYtVVdVHEZlHT",
  },
  {
    title: "Thiraippaasarai Hub",
    tamilTitle: "திரைப்பாசறைத் தொகுப்பு",
    description: "Collaborations and movement-building documentation.",
    listId: "PLBYkE0xXY6YNYv8MiXflaTkqLAL7CMxQh",
  },
];

const YouTubeEmbed = ({ listId }: { listId: string }) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-primary shadow-2xl">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/videoseries?list=${listId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export const FilmmakerWork = () => {
  return (
    <section className="bg-background py-24 sm:py-40">
      <div className="px-6 sm:px-12 mb-20">
        <h2 className="text-xs uppercase tracking-[0.6em] font-black opacity-30 mb-4">
          The Archive / கோப்புகள்
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <p className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
            A documented history of <br /> <span className="text-secondary">Eezham Cinema</span>.
          </p>
          <div className="flex items-center space-x-4 opacity-40">
             <Play size={20} strokeWidth={3} />
             <span className="text-[10px] uppercase font-bold tracking-widest">Global Streams</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 px-6 sm:px-12">
        {playlists.map((playlist, index) => (
          <motion.div 
            key={playlist.listId}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 1 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex flex-col space-y-2">
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-secondary">
                 {playlist.tamilTitle}
               </span>
               <h3 className="text-2xl font-black uppercase tracking-tight">
                 {playlist.title}
               </h3>
               <p className="text-xs opacity-60 font-medium tracking-wide">
                 {playlist.description}
               </p>
            </div>
            
            <YouTubeEmbed listId={playlist.listId} />
          </motion.div>
        ))}
      </div>

      {/* Aesthetic Label */}
      <div className="mt-32 px-12 opacity-5 pointer-events-none select-none overflow-hidden whitespace-nowrap">
         <span className="text-[150px] font-black uppercase tracking-tighter block leading-none">EEZHAM DIRECTORIAL</span>
      </div>
    </section>
  );
};
