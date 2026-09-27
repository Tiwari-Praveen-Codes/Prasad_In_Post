"use client";

import React from "react";
import { Briefcase, Building2, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full py-16 sm:py-24 px-5 sm:px-8 bg-surface border-t border-surface-container-high/60"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high border border-surface-container-highest text-[10px] font-mono uppercase tracking-widest text-secondary font-medium">
            <Briefcase className="w-3.5 h-3.5 text-terracotta-deep" />
            <span>Track Record &amp; Roles</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight">
            Experience &amp; Collaboration
          </h2>
          <div className="w-12 h-[1px] bg-on-surface/20 mx-auto" />
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.company}
              className="relative p-6 sm:p-7 rounded-3xl bg-surface-container-lowest/90 backdrop-blur-md border border-surface-container-high/80 shadow-sm flex flex-col justify-between space-y-4 hover:border-on-surface-variant/30 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <Building2 className="w-5 h-5 text-terracotta-deep" />
                  </div>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-surface-container text-secondary font-medium">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-on-surface tracking-tight">
                    {exp.company}
                  </h3>

                  <p className="font-editorial italic text-sm sm:text-base text-terracotta-deep font-medium">
                    {exp.role}
                  </p>
                </div>

                {exp.period && (
                  <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-surface-container border border-surface-container-high text-secondary uppercase tracking-wider font-semibold w-fit">
                    {exp.period}
                  </span>
                )}

                <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed font-light pt-1">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-container-high/70 flex items-center gap-2 text-xs font-mono text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Commercial Responsibilities</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
