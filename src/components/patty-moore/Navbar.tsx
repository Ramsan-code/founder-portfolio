"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={cn(
        "text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold transition-opacity hover:opacity-50",
        isActive ? "opacity-100" : "opacity-40"
      )}
    >
      {label}
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/accolades", label: "Accolades" },
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 sm:px-12 py-8 flex justify-between items-center pointer-events-none">
      <Link 
        href="/" 
        className="text-xs uppercase tracking-[0.5em] font-black text-white pointer-events-auto"
      >
        P.MOORE
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-10 pointer-events-auto">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </div>

      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden pointer-events-auto text-white"
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
            className="fixed inset-0 bg-charcoal flex flex-col items-center justify-center space-y-12 md:hidden pointer-events-auto px-6"
          >
            {links.map((link) => (
              <NavLink 
                key={link.href} 
                {...link} 
                onClick={() => setIsOpen(false)} 
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
