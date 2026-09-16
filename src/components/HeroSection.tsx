"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, Award, ChevronRight, Sparkles, History, Gavel, ShieldCheck } from "lucide-react";
import StrategyCallModal from "./StrategyCallModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D0805] text-white py-12 lg:py-16">
      {/* Hero Background Image with Balanced Dark Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.png"
          alt="Shahier Singh & Associates - Legal Counsel Library"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105"
        />
        {/* Layered Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0805]/95 via-[#0D0805]/80 to-[#0D0805]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0805] via-transparent to-[#0D0805]/70" />
      </div>

      {/* Decorative Golden Ambient Accent Line */}
      <div className="absolute left-0 top-1/4 w-1 h-64 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Golden Scales & Gavel Image with 70 Years Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-[#523A2A] shadow-2xl wood-badge group">
              <Image
                src="/images/hero_scales.png"
                alt="Golden Scales of Justice & Legal Books"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0906] via-transparent to-transparent opacity-85" />
              
              {/* Floating Highlight Badge: 70+ Years Experience */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#20140C]/95 backdrop-blur-md border border-[#D4AF37] shadow-2xl flex items-center gap-3 z-20">
                <div className="h-10 w-10 rounded-lg bg-[#3A2416] border border-[#6E4D38] flex items-center justify-center text-[#D4AF37]">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-lg font-extrabold text-white gold-text-gradient block leading-none">
                    70+ YEARS
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Legal & Judicial Lineage
                  </span>
                </div>
              </div>

              {/* Glassmorphic Badge Overlay at bottom of image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#1B110B]/90 backdrop-blur-md border border-[#D4AF37]/40 text-center shadow-2xl z-20">
                <span className="font-cinzel text-xs font-bold tracking-widest text-[#D4AF37] uppercase block">
                  EQUITY • INTEGRITY • ADVOCACY
                </span>
                <span className="text-[11px] text-[#C8B8A6] block mt-0.5">
                  70 Years of High-Stakes Litigation & Full-Service Legal Representation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Subtitle, CTA Buttons & Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge with 70 Years Highlight */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#593E2B] bg-[#1E130B]/90 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>70+ Years of Legal Lineage • High-Stakes Litigation & Full-Service Advocacy</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] text-white drop-shadow-md">
              A LEGACY OF TRUSTED <br className="hidden sm:block" />
              LEGAL ADVOCACY TO <br className="hidden sm:block" />
              <span className="gold-text-gradient">PROTECT YOUR RIGHTS</span> <br className="hidden sm:block" />
              & RESOLVE DISPUTES.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#D5C6B7] leading-relaxed max-w-xl font-light">
              Backed by over <strong className="text-[#D4AF37] font-semibold">70 years of combined judicial and litigation experience</strong>, our advocates represent individuals, families, and business enterprises across trial courts, High Courts, and the Supreme Court with unyielding integrity.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={() => setIsModalOpen(true)}
                className="wood-btn-primary px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-center flex items-center justify-center gap-2 group shadow-2xl"
              >
                <span>SCHEDULE A STRATEGY CALL</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/expertise"
                className="wood-btn-secondary px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-center flex items-center justify-center gap-2"
              >
                <span>EXPLORE PRACTICE AREAS</span>
              </Link>
            </div>

            {/* Credentials / Stat Bar */}
            <div className="pt-4">
              <div className="wood-badge rounded-2xl p-3 sm:p-4 grid grid-cols-3 gap-2 sm:gap-4 border border-[#523A2A]/60">
                {/* Stat 1 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#1A100A] sm:bg-transparent border sm:border-0 border-[#3D291D] text-center sm:text-left sm:border-r sm:border-[#3D291D] sm:pr-2">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                    <History className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs font-semibold text-white block leading-tight">70+ Years</span>
                    <span className="text-[9px] sm:text-[11px] text-[#A39382] block mt-0.5">Judicial Practice</span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#1A100A] sm:bg-transparent border sm:border-0 border-[#3D291D] text-center sm:text-left sm:border-r sm:border-[#3D291D] sm:pr-2">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                    <Gavel className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs font-semibold text-white block leading-tight">1,000+ Disputes</span>
                    <span className="text-[9px] sm:text-[11px] text-[#A39382] block mt-0.5">Advocated</span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#1A100A] sm:bg-transparent border sm:border-0 border-[#3D291D] text-center sm:text-left">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs font-semibold text-white block leading-tight">Supreme & High</span>
                    <span className="text-[9px] sm:text-[11px] text-[#A39382] block mt-0.5">Court Advocates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Engraved Wooden Plaque Statement */}
            <div className="pt-1">
              <div className="rounded-xl bg-gradient-to-r from-[#20150F] via-[#332218] to-[#20150F] border border-[#4D3525] p-3 text-center shadow-inner">
                <span className="font-cinzel text-[11px] font-bold tracking-[0.18em] text-[#E6DACB] uppercase">
                  70 YEARS OF UNYIELDING LEGAL ADVOCACY TO SAFEGUARD YOUR RIGHTS & INTERESTS
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
