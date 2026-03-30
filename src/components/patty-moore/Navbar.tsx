"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

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
    { href: "/accolades", label: "Accolades" },
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-6 sm:px-12 flex justify-between items-center transition-all duration-500 bg-background/80 backdrop-blur-sm border-b border-foreground/5",
        scrolled ? "py-5" : "py-8"
      )}
    >
      <Link
        href="/"
        className="text-xs uppercase tracking-[0.5em] font-black text-foreground"
      >
        P.MOORE
      </Link>

      {/* Desktop Links + Toggle */}
      <div className="hidden md:flex items-center space-x-10">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile: Toggle + Hamburger */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center space-y-12 md:hidden px-6"
          >
            {links.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                variant="mobile"
                onClick={() => setIsOpen(false)}
              />
            ))}
            <div className="mt-8">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
