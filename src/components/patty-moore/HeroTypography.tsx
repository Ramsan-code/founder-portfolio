"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroTypographyProps {
  text: string;
  subtitle?: string;
  className?: string;
  as?: "h1" | "h2";
}

/**
 * HeroTypography Component
 *
 * Creates dominant cinematic typography that functions as a visual object.
 * Uses clamp()-based font sizing to prevent wrapping at any viewport width.
 * Animates with a staggered letter-spacing "drawn baseline" effect.
 */
export const HeroTypography: React.FC<HeroTypographyProps> = ({
  text,
  subtitle,
  className,
  as: Component = "h1",
}) => {
  const characters = text.split("");
  const charCount = text.replace(/\s/g, "").length;

  // Dynamically scale font so the text always fits on one line.
  // Conservative scaling for mobile and desktop split grids.
  const getFontSize = () => {
    // Mobile-first conservative scaling
    if (charCount <= 7) return "clamp(2.5rem, 10vw, 8rem)";  // e.g. "PRESS"
    if (charCount <= 9) return "clamp(2rem, 8vw, 7rem)";    // e.g. "DIRECTOR"
    if (charCount <= 11) return "clamp(1.5rem, 7vw, 6rem)"; // e.g. "PATTY MOORE"
    return "clamp(1.2rem, 5vw, 5rem)";                       // e.g. "SELECTED WORK"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      letterSpacing: "0.2em", // Reduced from 0.5em to prevent extreme initial width
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      letterSpacing: "-0.01em", // Slightly less tight for better legibility
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      } as any,
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeOut",
      } as any,
    },
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-center min-h-[40vh] pt-32 sm:pt-40 pb-20 px-4 sm:px-12 w-full max-w-full overflow-hidden",
        className
      )}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-full overflow-hidden"
      >
        {/* whitespace-nowrap + overflow-hidden prevents wrapping at any width */}
        <Component
          className="font-black leading-[0.85] uppercase whitespace-nowrap overflow-hidden w-full block"
          style={{ fontSize: getFontSize() }}
        >
          {characters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={charVariants}
              className="inline-block"
              style={{ transformOrigin: "left center" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </Component>

        {subtitle && (
          <motion.p
            variants={subtitleVariants}
            className="mt-6 text-[10px] sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80 leading-relaxed max-w-full"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
