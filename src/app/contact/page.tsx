"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/patty-moore/Navbar";
import { HeroTypography } from "@/components/patty-moore/HeroTypography";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-foreground selection:text-background cursor-crosshair transition-colors duration-500">
      <Navbar />

      <div className="pt-20 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side: Cinematic Form */}
        <section className="flex flex-col justify-center px-6 sm:px-16 z-20 pb-20 lg:pb-0">
          <HeroTypography
            text="GET IN TOUCH"
            subtitle="LET'S CREATE TOGETHER"
            className="min-h-0 pt-16 pb-8 sm:pb-12"
          />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-8 sm:space-y-12 px-4 sm:px-0"
          >
            <div className="flex flex-col space-y-3">
              <label className="text-[10px] uppercase tracking-[0.5em] font-black opacity-70">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-foreground/10 py-3 sm:py-4 text-lg sm:text-2xl font-bold tracking-tight focus:border-foreground outline-none transition-colors w-full"
                placeholder="..."
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-[10px] uppercase tracking-[0.5em] font-black opacity-70">
                Your Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-foreground/10 py-3 sm:py-4 text-base sm:text-xl font-bold tracking-tight focus:border-foreground outline-none transition-colors w-full"
                placeholder="name@organization.com"
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-[10px] uppercase tracking-[0.5em] font-black opacity-70">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-foreground/10 py-3 sm:py-4 text-lg sm:text-xl font-bold tracking-tight focus:border-foreground outline-none transition-colors min-h-[100px] resize-none w-full"
                placeholder="..."
              />
            </div>

            <div className="flex flex-col space-y-4 pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`text-xs sm:text-sm uppercase tracking-[0.5em] sm:tracking-[1em] font-black transition-opacity ${
                  status === "loading" ? "opacity-50 cursor-not-allowed" : "hover:opacity-50"
                }`}
              >
                {status === "loading" ? "TRANSMITTING..." : "INITIATE COLLABORATION"}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-500"
                  >
                    Your message has been transmitted successfully.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-500"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>

          {/* Atmospheric Baseline — appeared below form on mobile, absolute on desktop */}
          <div className="mt-16 lg:hidden flex flex-col space-y-8 opacity-30 px-4 pb-12">
            <div className="flex flex-col space-y-2">
              <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Location / இடம்</span>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium leading-relaxed">
                Vavuniya,<br />Sri Lanka
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Email / மின்னஞ்சல்</span>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium break-all">
                Ilanthiraiyanfilm@gmail.com
              </p>
            </div>
          </div>
        </section>

        {/* Right Side: Cinematic Image */}
        <section className="relative h-[40vh] lg:h-screen w-full overflow-hidden opacity-40 order-first lg:order-last">
          <Image
            src="/images/work-3.png"
            alt="Director vision"
            fill
            className="object-cover grayscale brightness-50"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent hidden lg:block" />
        </section>
      </div>

      {/* Desktop-only absolute baseline — aligned with main section padding */}
      <div className="hidden lg:flex absolute bottom-12 left-6 sm:left-16 space-x-12 opacity-30">
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Location / இடம்</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Vavuniya, Sri Lanka</span>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Email / மின்னஞ்சல்</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Ilanthiraiyanfilm@gmail.com</span>
        </div>
      </div>
    </main>
  );
}
