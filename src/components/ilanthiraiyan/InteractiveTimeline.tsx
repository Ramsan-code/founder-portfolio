"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  category: "Creative" | "Community" | "Mentorship";
}

const milestones: Milestone[] = [
  {
    id: "newborn",
    year: "Founding",
    title: "NewBorn Cinema",
    description: "Established core creative vehicle and production house for original Eezham cinema narratives.",
    category: "Creative",
  },
  {
    id: "thirai",
    year: "Legacy",
    title: "Thiraippaasarai",
    description: "Co-founded initiative to empower emerging filmmakers and build a robust cinema movement.",
    category: "Community",
  },
  {
    id: "projects",
    year: "Evolution",
    title: "Significant Film Projects",
    description: "Major works defining a rooted artistic direction, bridging traditional history with modern techniques.",
    category: "Creative",
  },
  {
    id: "camping",
    year: "Impact",
    title: "Cinema Camping Workshops",
    description: "Evidence of direct mentorship, fostering a community where creators learn and collaborate.",
    category: "Mentorship",
  },
  {
    id: "collab",
    year: "Catalyst",
    title: "Community Collaborations",
    description: "Strategic partnerships demonstrating a role as a movement architect for Eezham cinema.",
    category: "Community",
  },
];

const MilestoneCard = ({ milestone, index, isMobile }: { milestone: Milestone; index: number; isMobile: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className={cn(
        "relative flex flex-col p-6 sm:p-8 bg-white/5 backdrop-blur-sm",
        isMobile ? "w-full mb-12" : "w-[300px] flex-shrink-0 mx-4"
      )}
    >
      <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-black mb-2">
        {milestone.year}
      </span>
      <h3 className="text-lg font-bold tracking-tight mb-3 uppercase">
        {milestone.title}
      </h3>
      <p className="text-xs leading-relaxed opacity-60 font-medium">
        {milestone.description}
      </p>
      
      {/* Visual Category Indicator */}
      <div className="absolute top-0 right-0 p-4">
        <div className="w-1 h-8 bg-secondary/30" />
      </div>
    </motion.div>
  );
};

export const InteractiveTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-primary text-primary-foreground py-24 sm:py-40 overflow-hidden" ref={containerRef}>
      <div className="px-6 sm:px-12 mb-20 text-center sm:text-left">
        <h2 className="text-xs uppercase tracking-[0.6em] font-black opacity-30 mb-4">
          Journey / காலவரிசை
        </h2>
        <p className="text-3xl sm:text-5xl font-black uppercase tracking-tighter max-w-4xl leading-[0.9]">
          The movement building of <span className="text-secondary">Eezham cinema</span>.
        </p>
      </div>

      {/* Desktop Horizontal Scroll Experience */}
      <div className="hidden sm:flex flex-nowrap overflow-x-auto pb-20 no-scrollbar items-start px-12">
        <div className="flex relative items-top">
          {/* Connecting Line */}
          <motion.div 
             className="absolute top-0 left-0 h-[2px] bg-secondary origin-left"
             style={{ scaleX: pathLength, width: "100%" }}
          />
          
          {milestones.map((ms, idx) => (
            <MilestoneCard key={ms.id} milestone={ms} index={idx} isMobile={false} />
          ))}
        </div>
      </div>

      {/* Mobile Vertical Experience */}
      <div className="sm:hidden px-6 relative">
        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-secondary/20" />
        <motion.div 
           className="absolute left-6 top-0 w-[2px] bg-secondary origin-top"
           style={{ scaleY: pathLength, height: "100%" }}
        />
        <div className="pl-12">
          {milestones.map((ms, idx) => (
            <MilestoneCard key={ms.id} milestone={ms} index={idx} isMobile={true} />
          ))}
        </div>
      </div>
    </section>
  );
};
