"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface DataItem {
  id: string;
  label: string;
  value: string;
  description?: string;
  metadata?: string;
}

interface DataListProps {
  title?: string;
  items: DataItem[];
  columns?: 1 | 2;
  className?: string;
}

const ItemReveal: React.FC<{ item: DataItem; index: number }> = ({ 
  item, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="group flex flex-col py-6 sm:py-8 last:pb-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex flex-col space-y-1">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] opacity-40 font-bold">
            {item.label}
          </span>
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {item.value}
          </h4>
        </div>
        
        {item.metadata && (
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium opacity-60">
            {item.metadata}
          </span>
        )}
      </div>
      
      {item.description && (
        <p className="mt-4 text-sm sm:text-base opacity-70 leading-relaxed font-normal max-w-2xl">
          {item.description}
        </p>
      )}
    </motion.div>
  );
};

/**
 * DataList Component
 * 
 * High-density informational display for records, biographies, or press metadata.
 */
export const DataList: React.FC<DataListProps> = ({
  title,
  items,
  columns = 1,
  className,
}) => {
  return (
    <div className={cn("p-6 sm:p-12 space-y-12", className)}>
      {title && (
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm uppercase tracking-[0.6em] font-black opacity-30 sticky top-12"
        >
          {title}
        </motion.h2>
      )}

      <div className={cn(
        "grid gap-4",
        columns === 2 ? "grid-cols-1 lg:grid-cols-2 lg:gap-x-20" : "grid-cols-1"
      )}>
        {items.map((item, index) => (
          <ItemReveal key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
