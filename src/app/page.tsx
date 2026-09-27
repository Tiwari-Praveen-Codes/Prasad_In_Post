"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroCover from "@/components/HeroCover";
import AboutSection from "@/components/AboutSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import ServicesOverview from "@/components/ServicesOverview";
import ShowcaseGallery from "@/components/ShowcaseGallery";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import VideoPlayerModal from "@/components/VideoPlayerModal";
import FloatingNav from "@/components/FloatingNav";
import { ShowcaseItem } from "@/data/portfolioData";

export default function Home() {
  const [activeModalShowcase, setActiveModalShowcase] = useState<ShowcaseItem | null>(null);
  const [selectedShowcaseCategory, setSelectedShowcaseCategory] = useState<string | null>(null);
  const [prefilledContactCategory, setPrefilledContactCategory] = useState<string>("Commercial Editing");

  const handleOpenPlayer = (showcase: ShowcaseItem) => {
    setActiveModalShowcase(showcase);
  };

  const handleClosePlayer = () => {
    setActiveModalShowcase(null);
  };

  const handleCommission = (category: string) => {
    setPrefilledContactCategory(category);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (id: string) => {
    setSelectedShowcaseCategory(id);
  };

  return (
    <main className="flex flex-col min-h-screen bg-surface">
      {/* Sticky Editorial Header */}
      <Header />

      {/* 01. Hero Section */}
      <HeroCover />

      {/* 02. About Section & Continuous Brand Slider */}
      <AboutSection />

      {/* Spotlight Project: Croma Commercial Advertisement */}
      <FeaturedProjectSection
        onOpenPlayer={handleOpenPlayer}
        onCommission={handleCommission}
      />

      {/* 03. What I Do / Services */}
      <ServicesOverview onSelectCategory={handleSelectService} />

      {/* 04. Selected Work Section (with 06 Project Description Examples) */}
      <ShowcaseGallery
        onOpenPlayer={handleOpenPlayer}
        onCommission={handleCommission}
        selectedCategory={selectedShowcaseCategory}
        onSelectCategory={setSelectedShowcaseCategory}
      />

      {/* 05. Experience Section: 100Billion Tech & 6S Marketers */}
      <ExperienceSection />

      {/* 07. Tools Section: Tools I Work With */}
      <ToolsSection />

      {/* 08. Contact Section & 09. Footer */}
      <ContactSection initialCategory={prefilledContactCategory} />

      {/* Interactive Video Player Modal */}
      <VideoPlayerModal
        isOpen={!!activeModalShowcase}
        showcase={activeModalShowcase}
        onClose={handleClosePlayer}
        onCommission={handleCommission}
      />

      {/* Floating Bottom Nav Pill Dock */}
      <FloatingNav />
    </main>
  );
}
