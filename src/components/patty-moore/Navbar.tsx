"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
        "uppercase tracking-[0.4em] font-bold text-white transition-opacity hover:opacity-100",
        variant === "mobile" ? "text-2xl" : "text-[10px] sm:text-xs",
        isActive ? "opacity-100" : "opacity-60"
      )}
    >
      {label}
    </Link>
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
        "fixed top-0 left-0 w-full z-50 px-6 sm:px-12 flex justify-between items-center transition-all duration-500 bg-charcoal/80 backdrop-blur-sm",
        scrolled ? "py-5" : "py-8"
      )}
    >
      <Link
        href="/"
        className="text-xs uppercase tracking-[0.5em] font-black text-white"
      >
        P.MOORE
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-10">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center space-y-12 md:hidden px-6"
          >
            {links.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                variant="mobile"
                onClick={() => setIsOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
