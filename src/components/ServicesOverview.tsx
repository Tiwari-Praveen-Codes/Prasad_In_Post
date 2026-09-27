"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/portfolioData";

interface ServicesOverviewProps {
  onSelectCategory?: (id: string) => void;
}

export default function ServicesOverview({ onSelectCategory }: ServicesOverviewProps) {
  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-24 px-5 sm:px-8 bg-surface-container-low/60 border-t border-b border-surface-container-high/60"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary font-medium">
              Capabilities &amp; Craft (01–07)
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-on-surface tracking-tight">
              What I Do / Services
            </h2>
          </div>
          <p className="max-w-md font-sans text-xs sm:text-sm text-secondary font-light">
            Comprehensive post-production services designed to elevate raw footage and concepts into purposeful, high-retention visual stories.
          </p>
        </div>

        {/* Services List with Exact Updated Descriptions */}
        <div className="grid grid-cols-1 gap-3.5">
          {SERVICES.map((item) => (
            <a
              key={item.id}
              href="#selected-work"
              onClick={(e) => {
                if (onSelectCategory) {
                  e.preventDefault();
                  onSelectCategory(item.id);
                  const el = document.getElementById("selected-work");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-surface-container-high/80 transition-all duration-300 hover:bg-surface-container-lowest hover:border-on-surface-variant/30 hover:shadow-md active:scale-[0.99]"
            >
              {/* Left Column: Number + Title + Description */}
              <div className="flex flex-col gap-1.5 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-secondary/50 font-medium">
                    {item.number}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold tracking-wider text-on-surface uppercase group-hover:text-terracotta-deep transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed pl-6 sm:pl-7 font-light">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Tags & Arrow */}
              <div className="mt-4 sm:mt-0 pl-6 sm:pl-0 flex items-center gap-2 self-end sm:self-center shrink-0">
                <span className="inline-flex px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-sans text-[11px] font-medium">
                  {item.categoryTag}
                </span>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-surface transition-all">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bespoke Inquiry Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-high/70 border border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-surface flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6 text-terracotta-vibrant" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-on-surface">
                Have a project or campaign in mind?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-secondary font-light">
                Share your footage, creative brief, or concept to discuss tailored workflows and timelines.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary text-surface font-sans text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-all text-center shrink-0 shadow-md active:scale-95"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
