"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SELECTED_PROJECTS, ShowcaseItem } from "@/data/portfolioData";

interface ShowcaseGalleryProps {
  onOpenPlayer: (showcase: ShowcaseItem) => void;
  onCommission: (category: string) => void;
  selectedCategory?: string | null;
  onSelectCategory?: (id: string | null) => void;
}

export default function ShowcaseGallery({
  onOpenPlayer,
  onCommission,
  selectedCategory,
  onSelectCategory,
}: ShowcaseGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? SELECTED_PROJECTS
      : SELECTED_PROJECTS.filter(
          (item) => item.id === activeFilter || item.category === activeFilter
        );

  return (
    <section
      id="selected-work"
      className="relative w-full bg-cinema-black text-white py-20 sm:py-28 px-5 sm:px-8"
    >
      {/* Background Subtle Cinematic Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-96 radiant-multi-glow blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Curated Projects • 2024–2026</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl text-white tracking-tight">
              Selected Work
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              A selection of projects across commercial editing, motion design, social content, real estate, events, and visual experimentation.
            </p>
          </div>

          {/* Interactive Project Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 md:pt-0 max-w-xl">
            <button
              onClick={() => {
                setActiveFilter("all");
                if (onSelectCategory) onSelectCategory(null);
              }}
              className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                activeFilter === "all" && !selectedCategory
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              All Works (06)
            </button>
            {SELECTED_PROJECTS.map((item) => {
              const isActive = activeFilter === item.id || selectedCategory === item.id;
              return (
                <button
                  key={`pill-${item.id}`}
                  onClick={() => {
                    setActiveFilter(item.id);
                    if (onSelectCategory) onSelectCategory(item.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "bg-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {item.number} • {item.title.split("—")[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Projects List - Follows Format: PROJECT NAME, Industry / Project Type, My Role, Short description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`showcase-${project.id}`}
              className="scroll-mt-24 rounded-3xl bg-cinema-card/90 border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              {/* Subtle Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-deep/10 rounded-full blur-3xl pointer-events-none -z-0" />

              {/* Top Meta: Number + Industry / Project Type */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/10 text-white font-medium">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-terracotta-deep font-semibold uppercase">
                    {project.industryType || project.category}
                  </span>
                </div>

                {/* PROJECT NAME */}
                <h3 className="font-editorial text-2xl sm:text-3xl text-white tracking-tight">
                  {project.title}
                </h3>

                {/* My Role */}
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-300">
                  <span className="text-zinc-500 font-medium">My Role:</span>
                  <span className="text-white font-semibold">{project.role || "Video Editing • Motion Design • VFX"}</span>
                </div>

                {/* Short description of the project and your contribution */}
                <p className="text-sm text-zinc-300 font-light leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>

              {/* Visual Preview / Reel Frame */}
              <div className="relative z-10 space-y-4">
                {project.reels && project.reels.length > 0 ? (
                  <div className={`grid ${project.reels.length === 3 ? "grid-cols-3" : "grid-cols-4"} gap-2.5 sm:gap-3 w-full`}>
                    {project.reels.map((reel) => (
                      <div
                        key={reel.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenPlayer({
                            ...project,
                            title: `${project.title} — ${reel.title}`,
                            description: reel.description || project.description,
                            heroImage: reel.thumbnail,
                            youtubeVideoId: reel.youtubeVideoId || project.youtubeVideoId,
                          });
                        }}
                        className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black border border-white/10 shadow-xl cursor-pointer group/reel hover:border-terracotta-vibrant/60 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <Image
                          src={reel.thumbnail}
                          alt={reel.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover/reel:scale-110 filter brightness-90 group-hover/reel:brightness-100"
                          sizes="(max-width: 768px) 33vw, 200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                        {/* Center Interactive Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover/reel:scale-110 group-hover/reel:bg-terracotta-vibrant group-hover/reel:text-white">
                            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 fill-current" />
                          </div>
                        </div>

                        {/* 9:16 Tag */}
                        <div className="absolute top-2 left-2 pointer-events-none flex items-center gap-1">
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/75 border border-white/15 text-white/90 backdrop-blur-md">
                            9:16
                          </span>
                          {reel.tag && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-terracotta-deep/80 text-white font-semibold backdrop-blur-md">
                              {reel.tag}
                            </span>
                          )}
                        </div>

                        {/* Reel Title at Bottom */}
                        <div className="absolute bottom-2 inset-x-2 pointer-events-none text-center">
                          <span className="inline-block text-[10px] sm:text-xs font-mono text-white font-medium truncate max-w-full drop-shadow">
                            {reel.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    onClick={() => onOpenPlayer(project)}
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl cursor-pointer group/frame"
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover/frame:scale-[1.03] filter brightness-90 group-hover/frame:brightness-100"
                      sizes="(max-width: 1200px) 100vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Center Interactive Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover/frame:scale-110 group-hover/frame:bg-terracotta-vibrant group-hover/frame:text-white">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Corner Badges */}
                    <div className="absolute bottom-3 left-3 pointer-events-none">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/80 border border-white/15 text-white/90 backdrop-blur-md">
                        {project.aspectRatio}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 pointer-events-none">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/20 border border-white/25 text-white backdrop-blur-md">
                        Watch Reel
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
                  <button
                    onClick={() => onOpenPlayer(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-zinc-300 hover:text-white font-medium transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Preview</span>
                  </button>

                  <button
                    onClick={() => onCommission(project.category)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-transform active:scale-95 shadow-md"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
