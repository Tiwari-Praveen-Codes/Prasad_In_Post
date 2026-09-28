"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowRight, Film, CheckCircle2, RotateCcw, Maximize2 } from "lucide-react";
import { ShowcaseItem, SELECTED_PROJECTS } from "@/data/portfolioData";

interface FeaturedProjectSectionProps {
  onOpenPlayer?: (showcase: ShowcaseItem) => void;
  onCommission?: (category: string) => void;
}

export const CROMA_FEATURED_DATA: ShowcaseItem = SELECTED_PROJECTS[0];

export default function FeaturedProjectSection({
  onOpenPlayer,
  onCommission,
}: FeaturedProjectSectionProps) {
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  return (
    <section
      id="featured-project"
      className="relative w-full py-16 sm:py-24 px-5 sm:px-8 bg-surface-container-low/80 border-t border-surface-container-high/60 overflow-hidden"
    >
      {/* Radiant Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 radiant-multi-glow blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-container-high/80 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-surface-container-high text-[10px] font-mono uppercase tracking-widest text-secondary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-deep animate-pulse" />
              <span>Spotlight Video Project</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-on-surface tracking-tight">
              Featured Project
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-wider">
            <Film className="w-3.5 h-3.5 text-terracotta-deep" />
            <span>Croma Commercial Advertisement</span>
          </div>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="rounded-3xl bg-surface-container-lowest border border-surface-container-high/80 p-6 sm:p-8 md:p-10 shadow-lg space-y-8 relative overflow-hidden group">
          {/* Main Visual Frame with Inline YouTube Video Support */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black shadow-2xl border border-on-surface/10">
            {isPlayingInline ? (
              <div className="relative w-full h-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${CROMA_FEATURED_DATA.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Croma Commercial Edit by Prasad Bhangane"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
                <button
                  onClick={() => setIsPlayingInline(false)}
                  className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 border border-white/20 backdrop-blur-md transition-transform active:scale-95"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Show Poster</span>
                </button>
              </div>
            ) : (
              <div
                onClick={() => setIsPlayingInline(true)}
                className="relative w-full h-full cursor-pointer group/frame"
              >
                <Image
                  src={CROMA_FEATURED_DATA.heroImage}
                  alt="Croma Commercial Advertisement by Prasad Bhangane"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover/frame:scale-[1.02]"
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Center Interactive Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-surface text-primary flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover/frame:scale-110 group-hover/frame:bg-terracotta-vibrant group-hover/frame:text-surface">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1 fill-current" />
                  </div>
                </div>

                {/* Corner Badges */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-black/80 border border-white/20 text-white backdrop-blur-md font-semibold uppercase tracking-wider">
                    CROMA • Commercial Advertisement
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 pointer-events-none">
                  <span className="text-[10px] font-mono px-3 py-1 rounded-md bg-white/20 border border-white/30 text-white backdrop-blur-md">
                    Click to Play Video • 4K
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Project Details Grid Following User Format */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-surface-container text-secondary font-medium">
                  01
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary font-semibold">
                  Commercial Advertisement
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight">
                Croma — Commercial Advertisement
              </h3>

              {/* Role badge */}
              <div className="py-1 px-3.5 rounded-lg bg-surface-container border border-surface-container-high w-fit font-mono text-xs text-on-surface">
                <strong className="text-secondary font-medium">My Role:</strong>{" "}
                <span className="font-semibold text-terracotta-deep">{CROMA_FEATURED_DATA.role}</span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-secondary font-light leading-relaxed">
                A commercial edit focused on product presentation, visual pacing, and promotional storytelling.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-mono text-[10px] px-3 py-1 rounded-lg bg-surface-container text-on-surface border border-surface-container-high">
                  Croma Retail
                </span>
                <span className="font-mono text-[10px] px-3 py-1 rounded-lg bg-surface-container text-on-surface border border-surface-container-high">
                  Commercial Edit
                </span>
                <span className="font-mono text-[10px] px-3 py-1 rounded-lg bg-surface-container text-on-surface border border-surface-container-high">
                  Product Presentation
                </span>
                <span className="font-mono text-[10px] px-3 py-1 rounded-lg bg-surface-container text-on-surface border border-surface-container-high">
                  Visual Pacing
                </span>
              </div>
            </div>

            {/* Right Column: Highlights & Actions */}
            <div className="md:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-surface-container border border-surface-container-highest space-y-4">
              <div>
                <div className="flex items-center gap-2 text-secondary font-mono text-[10px] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta-deep" />
                  <span>Key Deliverables</span>
                </div>
                <ul className="space-y-1.5 text-xs text-on-surface font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>4K Master Commercial Edit (16:9)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>High-Retention 9:16 Social Cutdowns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dynamic Lower-Thirds &amp; Sound Design</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-surface-container-high flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlayingInline(!isPlayingInline)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-on-surface font-semibold hover:text-terracotta-deep transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isPlayingInline ? "Playing Video" : "Play Video"}</span>
                  </button>

                  {onOpenPlayer && (
                    <button
                      onClick={() => onOpenPlayer(CROMA_FEATURED_DATA)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-secondary hover:text-on-surface transition-colors"
                      title="Open in Cinema Modal"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Modal</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={() => onCommission && onCommission("Commercial Editing")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-surface text-xs font-sans uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-all active:scale-95 shadow-sm"
                >
                  <span>Start Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
