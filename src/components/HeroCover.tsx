"use client";

import React from "react";
import { ArrowDown, MessageSquare, Sparkles } from "lucide-react";
import { PORTFOLIO_INFO } from "@/data/portfolioData";

export default function HeroCover() {
  return (
    <section
      id="cover"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 pt-24 pb-24 overflow-hidden bg-surface"
    >
      {/* Cinematic Ambient Glow Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft terracotta warm glow */}
        <div className="absolute -top-24 -left-24 w-80 sm:w-[32rem] h-80 sm:h-[32rem] rounded-full bg-terracotta-vibrant/20 blur-3xl animate-pulse-glow" />
        {/* Peach / light reflection glow */}
        <div className="absolute top-20 -right-24 w-72 sm:w-[30rem] h-72 sm:h-[30rem] rounded-full bg-tertiary-fixed-dim/30 blur-3xl" />
        {/* Warm cream diffused radial base */}
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-secondary-container/40 blur-3xl" />
        {/* Editorial soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-surface pointer-events-none" />
      </div>

      {/* Main Editorial Typography Block */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-surface-container-highest shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-on-surface">
            {PORTFOLIO_INFO.eyebrow}
          </span>
        </div>

        {/* Main Heading & Personal Brand Hook */}
        <div className="flex flex-col items-center space-y-3">
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-on-surface font-normal leading-[1.08]">
            <span className="italic">Turning Ideas</span>
            <br />
            <span className="font-normal">Into Visual Stories.</span>
          </h1>

          {/* Distinctive Heading Tagline */}
          <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-sans tracking-widest uppercase text-terracotta-deep font-semibold">
            <span className="w-6 h-[1px] bg-terracotta-deep/40 hidden sm:inline-block" />
            <span>{PORTFOLIO_INFO.heroSubheading}</span>
            <span className="w-6 h-[1px] bg-terracotta-deep/40 hidden sm:inline-block" />
          </div>
        </div>

        {/* Delicate Hairline Divider */}
        <div className="w-16 sm:w-24 h-[1px] bg-on-surface/20" />

        {/* Supporting Copy */}
        <p className="max-w-2xl text-secondary text-sm sm:text-base md:text-lg leading-relaxed font-light px-4">
          {PORTFOLIO_INFO.heroBio}
        </p>

        {/* Call to Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#selected-work"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-primary text-surface font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container border border-surface-container-highest font-sans text-xs uppercase tracking-widest text-on-surface font-semibold transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-secondary" />
            <span>Start a Conversation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
