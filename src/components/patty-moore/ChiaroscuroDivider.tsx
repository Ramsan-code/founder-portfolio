"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface ChiaroscuroDividerProps {
  toTheme: "dark" | "light";
  height?: string;
  className?: string;
}

/**
 * ChiaroscuroDivider Component
 *
 * Creates a cinematic scroll-driven color transition between sections.
 * - Dark mode: stays charcoal throughout (hero → charcoal content, seamless)
 * - Light mode: animates charcoal → white (cinematic illumination effect)
 */
export const ChiaroscuroDivider: React.FC<ChiaroscuroDividerProps> = ({
  toTheme,
  height = "h-40",
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const charcoal = "#222222"; // always-dark hero color
  const white = "#ffffff";   // pure white for light mode content sections

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Dark mode: no transition — hero (charcoal) blends into dark content (charcoal)
  // Light mode: animate the cinematic charcoal → white shift
  const isDark = resolvedTheme === "dark";

  const colorStops =
    isDark
      ? [charcoal, charcoal, charcoal, charcoal] // dark mode: seamless charcoal
      : toTheme === "light"
        ? [charcoal, charcoal, white, white]       // light mode: dark hero → white content
        : [white, white, charcoal, charcoal];      // reverse (not used on About page)

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.55, 0.6],
    colorStops
  );

  const springBg = useSpring(backgroundColor, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={containerRef}
      className={cn("w-full relative z-10", height, className)}
      style={{ backgroundColor: springBg as any }}
    />
  );
};
