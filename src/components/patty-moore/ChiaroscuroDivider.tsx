"use client";

import React, { useRef, useEffect, useState } from "react";
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
 * Creates cinematic transitions between sections as the page scrolls.
 * Reads CSS variables at runtime so it responds correctly to the theme toggle.
 */
export const ChiaroscuroDivider: React.FC<ChiaroscuroDividerProps> = ({
  toTheme,
  height = "h-40",
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Read current resolved CSS variable colors at mount time
  const [colors, setColors] = useState({ bg: "#222222", fg: "#F0F2F5" });

  useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    const primary = style.getPropertyValue("--color-charcoal").trim() || "#222222";
    const offWhite = style.getPropertyValue("--color-off-white").trim() || "#F0F2F5";
    setColors({ bg: primary, fg: offWhite });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const charcoal = "#222222";
  const offWhite = "#F0F2F5";

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.55, 0.6],
    toTheme === "dark"
      ? [offWhite, offWhite, charcoal, charcoal] // To Dark
      : [charcoal, charcoal, offWhite, offWhite]  // To Light
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
