"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Youtube } from "lucide-react";
import { useTheme } from "next-themes";

import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick, variant = "desktop" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "uppercase tracking-[0.4em] font-bold text-foreground transition-opacity hover:opacity-100",
        variant === "mobile" ? "text-2xl" : "text-[10px] sm:text-xs",
        isActive ? "opacity-100" : "opacity-60"
      )}
    >
      {label}
    </Link>
  );
};

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-14 h-7" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative w-14 h-7 rounded-full border transition-all duration-500 flex items-center px-1 cursor-pointer",
        isDark
          ? "bg-white/10 border-white/20"
          : "bg-black/10 border-black/20"
      )}
    >
      {/* Moon icon — left side */}
      <Moon
        size={11}
        className={cn(
          "absolute left-1.5 transition-opacity duration-300 text-foreground",
          isDark ? "opacity-70" : "opacity-20"
        )}
      />
      {/* Sun icon — right side */}
      <Sun
        size={11}
        className={cn(
          "absolute right-1.5 transition-opacity duration-300 text-foreground",
          isDark ? "opacity-20" : "opacity-70"
        )}
      />
      {/* Sliding thumb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className={cn(
          "w-5 h-5 rounded-full shadow-md transition-colors duration-500",
          isDark ? "bg-white ml-0" : "bg-charcoal ml-auto"
        )}
      />
    </button>
  );
};

const ChannelIcon: React.FC<{ handle: string }> = ({ handle }) => {
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const res = await fetch(`/api/youtube?handle=${handle}`);
        const data = await res.json();
        if (data.icon) setIconUrl(data.icon);
      } catch (e) {
        console.error("Icon fetch error:", e);
      }
    };
    fetchIcon();
  }, [handle]);

  if (!iconUrl) return <Youtube size={18} className="opacity-40" />;

  return (
    <div className="relative w-5 h-5 rounded-full overflow-hidden border border-foreground/10 grayscale hover:grayscale-0 transition-all">
       <Image 
          src={iconUrl} 
          alt={handle}
          fill
          className="object-cover"
       />
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F0F2F5] dark:bg-[#222222] flex flex-col items-center justify-center space-y-10 md:hidden px-6"
          >
            {/* Close Button in Overlay */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 sm:right-12 text-foreground p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col items-center space-y-8">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  {...link}
                  variant="mobile"
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>

            {/* Optional: Theme Toggle at bottom of mobile menu */}
            <div className="pt-10 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold mb-4 block text-center">Appearance</span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 px-6 sm:px-12 flex justify-between items-center transition-all duration-500 bg-background/80 backdrop-blur-sm border-b border-foreground/5",
          scrolled ? "py-5" : "py-8"
        )}
      >
        <Link
          href="/"
          className="relative h-12 sm:h-20 w-48 sm:w-80 transition-transform hover:scale-105 active:scale-95"
        >
          <Image
            src="/images/Kishanth Logo-01.png"
            alt="Ilanthiraiyan Logo"
            fill
            className="object-contain dark:mix-blend-normal mix-blend-multiply transition-colors"
            priority
          />
        </Link>

        {/* Desktop Links + Toggle + Socials */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          
          <div className="flex items-center space-x-6 border-l border-foreground/10 pl-10">
             {/* --- [CHANGE: Original YouTube Channel Icon 1: The NewBorn] --- */}
             <a 
               href="https://youtube.com/@thenewborn2589?si=qvZ7n2vVGvsx7J_4" 
               target="_blank" 
               rel="noopener noreferrer"
               className="transition-opacity hover:opacity-100"
               aria-label="NewBorn Cinema YouTube Channel"
             >
               <ChannelIcon handle="thenewborn2589" />
             </a>

             {/* --- [CHANGE: Original YouTube Channel Icon 2: Freedom Theatre] --- */}
             <a 
               href="https://youtube.com/@arangalayafreedomtheatre?si=Aip0U3JZkq8RlWvf" 
               target="_blank" 
               rel="noopener noreferrer"
               className="transition-opacity hover:opacity-100"
               aria-label="Arangalaya Freedom Theatre YouTube Channel"
             >
               <ChannelIcon handle="arangalayafreedomtheatre" />
             </a>

             <ThemeToggle />
          </div>
        </div>

        {/* Mobile: Toggle + Hamburger */}
        <div className="md:hidden flex items-center space-x-6">
          {/* --- [CHANGE: Mobile Original Channel Icons] --- */}
          <div className="flex items-center space-x-5">
             <a href="https://youtube.com/@thenewborn2589" target="_blank" rel="noopener noreferrer">
                <ChannelIcon handle="thenewborn2589" />
             </a>
             <a href="https://youtube.com/@arangalayafreedomtheatre" target="_blank" rel="noopener noreferrer">
                <ChannelIcon handle="arangalayafreedomtheatre" />
             </a>
          </div>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2 -mr-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
};
