"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChiaroscuroDividerProps {
  toTheme: "dark" | "light";
  height?: string;
  className?: string;
}

/**
 * ChiaroscuroDivider Component
 * 
 * Creates cinematic transitions between light and dark sections.
 * The transition effect mirrors a lighting shift or film cut.
 */
export const ChiaroscuroDivider: React.FC<ChiaroscuroDividerProps> = ({
  toTheme,
  height = "h-40",
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll progress for dynamic background shift
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Sharp, cinematic background color transition
  const charcoal = "#222222";
  const offWhite = "#F0F2F5";

  // Transition points: midpoint in the container
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.55, 0.6],
    toTheme === "dark" 
      ? [offWhite, offWhite, charcoal, charcoal] // To Dark
      : [charcoal, charcoal, offWhite, offWhite] // To Light
  );

  // Added spring for smoothness while maintaining "snap-like" film cut feel
  const springBg = useSpring(backgroundColor, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={containerRef}
      className={cn("w-full relative z-10 transition-colors duration-1000", height, className)}
      style={{ backgroundColor: springBg as any }}
    />
  );
};
