"use client";

import React from "react";
import { ArrowRight, Award, Film, Sparkles } from "lucide-react";
import { PORTFOLIO_INFO, FEATURED_BRANDS } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-16 sm:py-24 px-5 sm:px-8 bg-surface">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Top Section: Editorial Heading + Narrative Card */}
        <div className="relative flex flex-col items-center text-center space-y-8">
          {/* Editorial Heading */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary font-medium">
              About The Editor
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight">
              {PORTFOLIO_INFO.aboutHeading}
            </h2>
            <div className="w-12 h-[1px] bg-on-surface/20 mx-auto" />
          </div>

          {/* Narrative Box with Full Copy & Short Summary */}
          <div className="w-full text-left relative bg-surface-container-lowest/90 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-sm border border-surface-container-highest space-y-8">
            {/* Lead Short Version Pill/Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary-container/50 border border-secondary-container flex items-start gap-3.5">
              <Film className="w-5 h-5 text-terracotta-deep shrink-0 mt-0.5" />
              <p className="font-sans text-xs sm:text-sm font-medium text-on-surface leading-relaxed">
                {PORTFOLIO_INFO.aboutShort}
              </p>
            </div>

            {/* 3 Paragraphs of Full Copy */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-on-surface/90 leading-relaxed font-light">
              {PORTFOLIO_INFO.aboutBioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Metrics & Action Footer */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-surface-container-high/70">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-sm">
                  <Award className="w-6 h-6 text-terracotta-deep" />
                </div>
                <div>
                  <div className="font-editorial text-3xl sm:text-4xl text-on-surface leading-none">
                    {PORTFOLIO_INFO.experienceYears}
                  </div>
                  <div className="font-sans text-[11px] sm:text-xs text-secondary uppercase tracking-widest font-medium">
                    Years in Post-Production
                  </div>
                </div>
              </div>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-on-surface font-semibold hover:text-terracotta-deep transition-colors"
              >
                <span>Explore What I Do</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Continuous Left-to-Right Horizontal Brand Slider */}
        <div className="w-full pt-6 border-t border-surface-container-high/60 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-secondary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-deep" />
              <span>Featured Clients &amp; Brands</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-secondary/60">
              Collaboration History
            </span>
          </div>

          {/* Marquee Wrapper */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

            <div className="brand-slider-track">
              {/* Group 1 */}
              <div className="flex items-center gap-3 shrink-0 pr-3">
                {[...FEATURED_BRANDS, ...FEATURED_BRANDS].map((brand, idx) => (
                  <div
                    key={`brand-1-${brand.id}-${idx}`}
                    className="h-12 px-5 bg-surface-container-lowest border border-surface-container-high/80 rounded-full shadow-sm flex items-center gap-3 hover:border-on-surface-variant/40 transition-colors whitespace-nowrap cursor-default"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: brand.featuredColor }}
                    />
                    <span className="font-editorial text-sm font-semibold tracking-wider text-on-surface">
                      {brand.name}
                    </span>
                    <span className="font-mono text-[9px] text-secondary/60 uppercase">
                      {brand.number}
                    </span>
                  </div>
                ))}
              </div>

              {/* Group 2 (Duplicate for Seamless Infinite Loop) */}
              <div className="flex items-center gap-3 shrink-0 pr-3" aria-hidden="true">
                {[...FEATURED_BRANDS, ...FEATURED_BRANDS].map((brand, idx) => (
                  <div
                    key={`brand-2-${brand.id}-${idx}`}
                    className="h-12 px-5 bg-surface-container-lowest border border-surface-container-high/80 rounded-full shadow-sm flex items-center gap-3 hover:border-on-surface-variant/40 transition-colors whitespace-nowrap cursor-default"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: brand.featuredColor }}
                    />
                    <span className="font-editorial text-sm font-semibold tracking-wider text-on-surface">
                      {brand.name}
                    </span>
                    <span className="font-mono text-[9px] text-secondary/60 uppercase">
                      {brand.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
