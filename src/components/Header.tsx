"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { PORTFOLIO_INFO } from "@/data/portfolioData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 pt-safe ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-on-surface-variant/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-16 px-5 sm:px-8 flex items-center justify-between">
        {/* Creator Brand / Monogram */}
        <a
          href="#cover"
          className="group flex items-center gap-2.5 text-on-surface transition-opacity hover:opacity-80"
          aria-label="Back to cover"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black border border-on-surface-variant/20 shadow-sm flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
            <Image
              src="/images/brand-logo.jpg"
              alt={`${PORTFOLIO_INFO.name} Logo`}
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial font-bold text-xs sm:text-sm tracking-[0.18em] uppercase">
              {PORTFOLIO_INFO.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-terracotta-deep font-semibold">
              Prasad in Post
            </span>
          </div>
        </a>

        {/* Desktop Quick Links */}
        <nav className="hidden md:flex items-center gap-6 font-sans text-xs uppercase tracking-widest text-on-surface-variant">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#selected-work" className="hover:text-primary transition-colors">
            Work
          </a>
          <a href="#experience" className="hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#tools" className="hover:text-primary transition-colors">
            Tools
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Status Indicator & Quick Contact */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Projects</span>
          </div>

          <a
            href="#contact"
            className="w-8 h-8 rounded-full bg-surface-container border border-surface-container-high flex items-center justify-center text-on-surface transition-transform hover:scale-105 active:scale-95"
            aria-label="Contact Prasad"
          >
            <User className="w-4 h-4 text-secondary" />
          </a>
        </div>
      </div>
    </header>
  );
}
