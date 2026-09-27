"use client";

import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "cover", label: "Cover", href: "#cover" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "selected-work", label: "Work", href: "#selected-work" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "tools", label: "Tools", href: "#tools" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("cover");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 flex justify-center px-4 pb-safe pointer-events-none"
      aria-label="Floating navigation dock"
    >
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-surface/90 backdrop-blur-xl border border-surface-container-high shadow-lg shadow-black/5 overflow-x-auto max-w-full">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex items-center justify-center h-9 sm:h-10 px-3 sm:px-4 rounded-full font-sans text-[11px] sm:text-xs tracking-wider transition-all duration-300 shrink-0 ${
                isActive
                  ? "bg-primary text-surface font-semibold shadow-sm scale-100"
                  : "text-secondary hover:text-on-surface hover:bg-surface-container-high/60"
              }`}
            >
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
