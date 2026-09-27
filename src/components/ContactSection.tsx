"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Copy, Check, MessageSquare, ArrowRight, CheckCircle2, Instagram, Youtube, Linkedin, ExternalLink } from "lucide-react";
import { PORTFOLIO_INFO } from "@/data/portfolioData";

interface ContactSectionProps {
  initialCategory?: string;
}

const PROJECT_TYPE_OPTIONS = [
  "Commercial Editing",
  "Social Media Content",
  "Motion Design & VFX",
  "Corporate Content",
  "Real Estate Visuals",
  "Event Films",
  "Talking Head",
];

export default function ContactSection({ initialCategory }: ContactSectionProps) {
  const [selectedType, setSelectedType] = useState<string>("Commercial Editing");
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialCategory) {
      const matched = PROJECT_TYPE_OPTIONS.find((t) =>
        t.toLowerCase().includes(initialCategory.toLowerCase())
      );
      if (matched) setSelectedType(matched);
      else setSelectedType(initialCategory);
    }
  }, [initialCategory]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 px-5 sm:px-8 bg-surface border-t border-surface-container-high/60"
    >
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Section Heading & Tagline */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high border border-surface-container-highest text-[10px] font-mono uppercase tracking-widest text-secondary font-medium">
            <span>Direct Inquiries</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight">
            {PORTFOLIO_INFO.contactHeading}
          </h2>

          {/* Alternative Tagline Hook */}
          <p className="font-editorial italic text-base sm:text-lg text-terracotta-deep font-medium">
            {PORTFOLIO_INFO.contactTagline}
          </p>

          <p className="max-w-xl mx-auto font-sans text-xs sm:text-sm text-secondary font-light leading-relaxed">
            {PORTFOLIO_INFO.contactCopy}
          </p>
        </div>

        {/* Direct Quick Actions: Email & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Email Card with Copy Button */}
          <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl shadow-sm flex items-center justify-between border border-surface-container-high/80 hover:border-on-surface-variant/30 transition-all">
            <a
              href={`mailto:${PORTFOLIO_INFO.email}`}
              className="flex items-center gap-3.5 min-w-0 flex-1 group"
            >
              <div className="w-11 h-11 rounded-full bg-secondary-container flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-on-secondary-container" />
              </div>
              <div className="min-w-0">
                <p className="font-sans text-[10px] uppercase tracking-wider text-secondary font-medium">
                  Direct Email
                </p>
                <p className="font-sans text-xs sm:text-sm text-on-surface font-semibold truncate group-hover:text-terracotta-deep transition-colors">
                  {PORTFOLIO_INFO.email}
                </p>
              </div>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-transform active:scale-90 shrink-0 ml-2"
              aria-label="Copy Email"
              title="Copy Email"
              type="button"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4 text-secondary" />
              )}
            </button>
          </div>

          {/* WhatsApp Direct Link */}
          <a
            href={PORTFOLIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl shadow-sm flex items-center justify-between border border-surface-container-high/80 hover:border-on-surface-variant/30 active:scale-[0.99] transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 text-terracotta-deep" />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wider text-secondary font-medium">
                  Quick Message
                </p>
                <p className="font-sans text-xs sm:text-sm text-on-surface font-semibold group-hover:text-terracotta-deep transition-colors">
                  Chat on WhatsApp
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-secondary group-hover:text-on-surface transition-colors" />
          </a>
        </div>

        {/* Streamlined Quick Inquiry Form */}
        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm space-y-6 border border-surface-container-high/80">
          <div className="space-y-1">
            <h3 className="font-editorial text-2xl sm:text-3xl text-on-surface">
              Project Brief
            </h3>
            <p className="font-sans text-xs sm:text-sm text-secondary font-light">
              Tell me briefly about your project, expected timeline, and scope.
            </p>
          </div>

          {/* Project Type Pills */}
          <div className="space-y-2">
            <label className="block font-sans text-[10px] uppercase tracking-widest text-secondary font-medium">
              Service Discipline
            </label>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPE_OPTIONS.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-full font-sans text-xs transition-all duration-200 active:scale-95 ${
                    selectedType === type
                      ? "bg-primary text-surface font-medium shadow-sm"
                      : "bg-surface-container text-secondary hover:text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="client-name"
                    className="block font-sans text-[10px] uppercase tracking-widest text-secondary font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    id="client-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface placeholder:text-secondary/50 font-sans text-sm focus:outline-none focus:bg-surface-container-high transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="client-contact"
                    className="block font-sans text-[10px] uppercase tracking-widest text-secondary font-medium"
                  >
                    Email or Phone *
                  </label>
                  <input
                    id="client-contact"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="alex@brand.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface placeholder:text-secondary/50 font-sans text-sm focus:outline-none focus:bg-surface-container-high transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="project-notes"
                  className="block font-sans text-[10px] uppercase tracking-widest text-secondary font-medium"
                >
                  Project Scope &amp; Vision *
                </label>
                <textarea
                  id="project-notes"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about footage format, turnaround deadline, delivery dimensions (16:9, 9:16)..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface placeholder:text-secondary/50 font-sans text-sm focus:outline-none focus:bg-surface-container-high transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-surface font-sans font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:bg-neutral-800 active:scale-[0.99] transition-all disabled:opacity-70"
              >
                <span>{isSubmitting ? "Sending..." : PORTFOLIO_INFO.contactButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-secondary-container/80 border border-secondary-container text-on-secondary-container space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-terracotta-deep" />
                <h4 className="font-display font-bold text-base text-on-surface">
                  Message Sent Successfully
                </h4>
              </div>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                Thank you for reaching out, {name}! Prasad will review your project brief for{" "}
                <strong className="text-on-surface font-semibold">{selectedType}</strong> and get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setMessage("");
                }}
                className="text-xs font-sans uppercase tracking-wider text-terracotta-deep font-semibold underline hover:no-underline pt-2 inline-block"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

        {/* 9. Requested Editorial Footer */}
        <footer className="pt-10 pb-20 flex flex-col items-center justify-center space-y-5 text-center border-t border-surface-container-high/60">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-black border border-on-surface-variant/20 shadow-md flex items-center justify-center shrink-0">
            <Image
              src="/images/brand-logo.jpg"
              alt={`${PORTFOLIO_INFO.name} Logo`}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="space-y-1.5">
            <h4 className="font-editorial text-2xl sm:text-3xl text-on-surface tracking-tight">
              {PORTFOLIO_INFO.name}
            </h4>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-medium">
              {PORTFOLIO_INFO.title}
            </p>
            <p className="font-mono text-xs text-terracotta-deep font-medium pt-1">
              {PORTFOLIO_INFO.specialties}
            </p>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <a
              href={PORTFOLIO_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <span className="text-on-surface-variant/30 text-xs">•</span>
            <a
              href={PORTFOLIO_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </a>
            <span className="text-on-surface-variant/30 text-xs">•</span>
            <a
              href={PORTFOLIO_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="font-sans text-[11px] text-secondary/60 tracking-wider pt-2">
            © 2025 {PORTFOLIO_INFO.name}. All creative works and edits reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
