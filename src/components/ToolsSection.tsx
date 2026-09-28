"use client";

import React from "react";
import { Wrench, Sparkles, Film, Layers, Palette, Wand2, Sliders } from "lucide-react";
import { TOOLS_LIST } from "@/data/portfolioData";

export default function ToolsSection() {
  const getToolIcon = (iconType: string) => {
    switch (iconType) {
      case "pr":
        return <Film className="w-5 h-5 text-[#9999FF]" />;
      case "ae":
        return <Layers className="w-5 h-5 text-[#9999FF]" />;
      case "ps":
        return <Palette className="w-5 h-5 text-[#31A8FF]" />;
      case "ai":
        return <Wand2 className="w-5 h-5 text-[#FF9A00]" />;
      case "davinci":
        return <Sliders className="w-5 h-5 text-terracotta-deep" />;
      case "genai":
      default:
        return <Sparkles className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section
      id="tools"
      className="relative w-full py-16 sm:py-24 px-5 sm:px-8 bg-surface-container-low/50 border-t border-surface-container-high/60"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high border border-surface-container-highest text-[10px] font-mono uppercase tracking-widest text-secondary font-medium">
            <Wrench className="w-3.5 h-3.5 text-terracotta-deep" />
            <span>Production Software</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight">
            Tools I Work With
          </h2>
          <div className="w-12 h-[1px] bg-on-surface/20 mx-auto" />
          <p className="max-w-md mx-auto font-sans text-xs sm:text-sm text-secondary font-light">
            Industry-standard post-production suite utilized for editing, motion design, compositing, and color grading.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {TOOLS_LIST.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/80 shadow-sm flex items-start gap-4 hover:border-on-surface-variant/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center shrink-0 border border-surface-container-high">
                {getToolIcon(tool.iconType)}
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-editorial font-bold text-base text-on-surface truncate">
                  {tool.name}
                </h3>
                <p className="font-sans text-xs text-secondary font-light leading-snug">
                  {tool.category}
                </p>
                {tool.level && (
                  <span className="inline-block pt-1 font-mono text-[10px] text-terracotta-deep uppercase tracking-wider font-semibold">
                    {tool.level}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
