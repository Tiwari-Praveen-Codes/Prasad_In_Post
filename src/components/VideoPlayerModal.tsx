"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, X, Sparkles } from "lucide-react";
import { ShowcaseItem } from "@/data/portfolioData";

interface VideoPlayerModalProps {
  showcase: ShowcaseItem | null;
  isOpen: boolean;
  onClose: () => void;
  onCommission: (category: string) => void;
}

export default function VideoPlayerModal({
  showcase,
  isOpen,
  onClose,
  onCommission,
}: VideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(24);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Simulate progress when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 100);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen || !showcase) return null;

  const currentSeconds = Math.floor((progress / 100) * 88);
  const formattedTime = `00:${String(Math.floor(currentSeconds / 60)).padStart(2, "0")}:${String(
    currentSeconds % 60
  ).padStart(2, "0")}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${showcase.title} Preview Player`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
    >
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Ambient Radiant Multi-color Grading Glow behind player */}
      <div className="absolute w-[90%] max-w-4xl h-[70%] rounded-3xl radiant-grading-glow blur-3xl opacity-60 pointer-events-none" />

      {/* Main Player Container */}
      <div className="relative z-10 w-full max-w-4xl bg-cinema-black border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-cinema-card/90 backdrop-blur-md">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wider truncate">
                {showcase.title}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-cinema-muted uppercase tracking-widest truncate">
                {showcase.specCode} • 4K DCI COLOR GRADED
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-white/80">
              <Sparkles className="w-3 h-3 text-terracotta-vibrant" />
              <span>Master Reel</span>
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Canvas / Poster Frame or YouTube Embed */}
        {showcase.youtubeVideoId ? (
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${showcase.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
              title={showcase.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <div
            className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center cursor-pointer group"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Image
              src={showcase.heroImage}
              alt={showcase.title}
              fill
              className={`object-cover transition-transform duration-700 ${
                isPlaying ? "scale-100" : "scale-105 filter brightness-75"
              }`}
              sizes="(max-width: 1200px) 100vw, 1000px"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Big Center Play Indicator when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transition-transform transform scale-100">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-black" />
                </div>
              </div>
            )}

            {/* Aspect Ratio Badge */}
            <div className="absolute top-4 right-4 pointer-events-none">
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-black/70 border border-white/15 text-white/90 backdrop-blur-md">
                {showcase.aspectRatio}
              </span>
            </div>

            {/* Timecode overlay */}
            <div className="absolute bottom-4 left-4 pointer-events-none">
              <div className="font-mono text-xs text-white/90 bg-black/60 px-2.5 py-1 rounded backdrop-blur-md border border-white/10">
                {formattedTime} <span className="text-white/40">/ 00:01:28</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Control & Action Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-cinema-card border-t border-white/10 flex items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-3">
            {!showcase.youtubeVideoId && (
              <>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-transform active:scale-95"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-transform active:scale-95"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-white/60" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </>
            )}

            <span className="font-mono text-xs text-cinema-muted">
              {showcase.clients.slice(0, 2).join(" • ")}
            </span>
          </div>

          {/* Commission CTA button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onCommission(showcase.category);
              }}
              className="px-4 sm:px-6 py-2 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-transform active:scale-95 shadow-md"
            >
              {showcase.ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
