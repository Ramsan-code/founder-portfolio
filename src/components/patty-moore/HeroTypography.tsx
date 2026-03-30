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
 * Implements a staggered letter-spacing animation on mount for a 
 * "drawn baseline" effect.
 */
export const HeroTypography: React.FC<HeroTypographyProps> = ({
  text,
  subtitle,
  className,
  as: Component = "h1",
}) => {
  // Split text into characters for staggered animation
  const characters = text.split("");

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
      letterSpacing: "0.5em", // Wide tracking for "drawn" effect
      filter: "blur(4px)" 
    },
    visible: { 
      opacity: 1, 
      letterSpacing: "-0.02em", // Tight tracking at large scales
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cinematic cubic-bezier
      },
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
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={cn("flex flex-col justify-center min-h-[50vh] py-20 px-6 sm:px-12", className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <Component className="text-[12vw] sm:text-[10vw] font-black leading-[0.85] uppercase overflow-hidden">
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
            className="mt-8 text-sm sm:text-base font-medium uppercase tracking-[0.3em] opacity-80"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
