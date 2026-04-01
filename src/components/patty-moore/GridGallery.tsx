"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Play } from "lucide-react";
import { getYouTubeID } from "@/lib/youtube";

interface GridItemProps {
  title: string;
  metadata: string;
  imageSrc: string;
  youtubeUrl?: string; // --- [CHANGE: Added optional YouTube URL] ---
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
}

interface GridGalleryProps {
  items: GridItemProps[];
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ 
  title, 
  metadata, 
  imageSrc, 
  youtubeUrl, 
  aspectRatio = "video", 
  className 
}) => {
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  const videoId = youtubeUrl ? getYouTubeID(youtubeUrl) : null;

  useEffect(() => {
    if (videoId) {
      // Start with hqdefault which always exists
      const hqUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      const maxResUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      
      setThumbUrl(hqUrl); // --- [CHANGE: Default to hqdefault which always works] ---

      // Upgrade to maxres if it's available
      const img = new window.Image();
      img.src = maxResUrl;
      img.onload = () => {
        if (img.width > 120) { // YouTube returns a 120px placeholder if maxres is missing
          setThumbUrl(maxResUrl);
        }
      };

      // Fetch video details (including description) from our API
      const fetchVideoDetails = async () => {
        try {
          const response = await fetch(`/api/youtube?videoId=${videoId}`);
          const data = await response.json();
          if (data.description) {
            setDescription(data.description);
          }
        } catch (error) {
          console.error("Error fetching YouTube details:", error);
        }
      };

      fetchVideoDetails();
    }
  }, [videoId]);

  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]"
  }[aspectRatio];

  const itemContent = (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("group flex flex-col space-y-6", className, youtubeUrl && "cursor-pointer")}
    >
      <div className={cn("relative overflow-hidden w-full bg-slate", aspectClass)}>
        <Image
          src={thumbUrl || imageSrc}
          alt={title}
          fill
          unoptimized={!!thumbUrl}
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {youtubeUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
               <Play size={24} className="text-white fill-white ml-1 opacity-80" />
             </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col space-y-2">
        <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-foreground/90">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-40 leading-relaxed font-medium">
          {metadata}
        </p>

        {description && (
          <p className="text-[9px] opacity-30 line-clamp-2 italic font-light mt-2">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );

  if (youtubeUrl) {
    return (
      <a 
        href={youtubeUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block no-underline"
      >
        {itemContent}
      </a>
    );
  }

  return itemContent;
};

/**
 * GridGallery Component
 * 
 * Swiss-style archival grid. 
 * Minimalist layout with precise typography and strictly aligned photography.
 */
export const GridGallery: React.FC<GridGalleryProps> = ({
  items,
  className,
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 p-6 sm:p-12", className)}>
      {items.map((item, index) => (
        <GridItem key={`${item.title}-${index}`} {...item} />
      ))}
    </div>
  );
};

