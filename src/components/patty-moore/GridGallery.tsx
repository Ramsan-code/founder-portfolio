"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GridItemProps {
  title: string;
  metadata: string;
  imageSrc: string;
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
  aspectRatio = "video", 
  className 
}) => {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]"
  }[aspectRatio];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("group flex flex-col space-y-6", className)}
    >
      <div className={cn("relative overflow-hidden w-full bg-slate", aspectClass)}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <div className="flex flex-col space-y-2">
        <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-foreground/90">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-40 leading-relaxed font-medium">
          {metadata}
        </p>
      </div>
    </motion.div>
  );
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
