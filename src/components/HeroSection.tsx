"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, Award, ChevronRight, Sparkles, History, Gavel, ShieldCheck } from "lucide-react";
import StrategyCallModal from "./StrategyCallModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden sepia-hero-bg text-[#FFFDF8] py-12 lg:py-16 border-b-2 border-[#C59242]/40 shadow-2xl">
      {/* Hero Ambient Glow with Vintage Parchment Amber & Gold */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-gradient-to-b from-[#C59242]/25 via-[#8E5F2A]/15 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Decorative Warm Brass Accent Line */}
      <div className="absolute left-0 top-1/4 w-1.5 h-64 bg-gradient-to-b from-transparent via-[#C59242]/70 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Golden Scales & Gavel Image with 70 Years Experience Badge */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Golden Halo Glow behind Artwork */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#8E5F2A]/40 via-[#C59242]/35 to-[#C59242]/20 rounded-3xl blur-xl -z-10" />

            <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden archival-frame bg-[#1C0F08] group">
              <Image
                src="/images/hero_scales_sepia.jpg"
                alt="Antique Brass Scales of Justice, Law Treatises & Judge Gavel in Vintage Sepia Tone"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140B05]/90 via-transparent to-transparent" />
              
              {/* Floating Highlight Badge: 70+ Years Experience in Deep Midnight Navy */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#0B192C]/95 backdrop-blur-md border border-[#C59242]/60 shadow-2xl flex items-center gap-3 z-20">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1B365D] to-[#0B192C] border border-[#C59242]/60 flex items-center justify-center text-[#F5DE9C] shadow-inner">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-lg font-extrabold text-[#FFFDF8] block leading-none">
                    70+ YEARS
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#DFC48C]">
                    Legal & Judicial Lineage
                  </span>
                </div>
              </div>

              {/* Badge Overlay at bottom of image in Deep Midnight Navy */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B192C]/95 backdrop-blur-md border border-[#C59242]/60 text-center shadow-2xl z-20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="h-[1px] w-6 bg-[#C59242]" />
                  <span className="font-cinzel text-xs font-bold tracking-widest text-[#F5DE9C] uppercase block">
                    EQUITY • INTEGRITY • ADVOCACY
                  </span>
                  <span className="h-[1px] w-6 bg-[#C59242]" />
                </div>
                <span className="text-[11px] text-[#DFC48C] block mt-0.5 font-medium">
                  70 Years of High-Stakes Litigation & Full-Service Legal Representation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Subtitle, CTA Buttons & Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge with 70 Years Highlight & Navy/Gold Border */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C59242]/70 bg-[#0B192C] text-[#FFFDF8] text-xs font-semibold uppercase tracking-widest shadow-lg shimmer-active">
              <Sparkles className="w-3.5 h-3.5 text-[#F5DE9C]" />
              <span>70+ Years of Legal Lineage • High-Stakes Litigation & Full-Service Advocacy</span>
            </div>

            {/* Main Headline in Prestigious Navy */}
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] text-[#0A192F]">
              A LEGACY OF TRUSTED <br className="hidden sm:block" />
              LEGAL ADVOCACY TO <br className="hidden sm:block" />
              <span className="inline-block px-3.5 sm:px-4.5 py-1 sm:py-1.5 rounded-xl bg-[#0B192C] text-[#FFFDF8] border-2 border-[#C59242] shadow-[0_6px_20px_rgba(11,25,44,0.35)] font-black tracking-wider my-1 relative group">
                <span className="bg-gradient-to-r from-[#FFFDF8] via-[#F5DE9C] to-[#FFFDF8] bg-clip-text text-transparent">
                  PROTECT YOUR RIGHTS
                </span>
              </span> <br className="hidden sm:block" />
              & RESOLVE DISPUTES.
            </h1>

            {/* Subtitle in Refined Deep Navy */}
            <p className="text-sm sm:text-base text-[#1E3A5F] leading-relaxed max-w-xl font-medium">
              Backed by over <strong className="text-[#0A192F] font-bold">70 years of combined judicial and litigation experience</strong>, our advocates represent individuals, families, and business enterprises across trial courts, High Courts, and the Supreme Court with unyielding integrity.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={() => setIsModalOpen(true)}
                className="wood-btn-primary px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>SCHEDULE A STRATEGY CALL</span>
                <ChevronRight className="w-4 h-4 text-[#F5DE9C] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <Link
                href="/expertise"
                className="hero-btn-secondary px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-center flex items-center justify-center gap-2"
              >
                <span>EXPLORE PRACTICE AREAS</span>
              </Link>
            </div>

            {/* Credentials / Stat Bar in Deep Midnight Navy */}
            <div className="pt-3">
              <div className="rounded-2xl p-3 sm:p-4 grid grid-cols-3 gap-2 sm:gap-4 border-1.5 border-[#C59242]/45 bg-[#0B192C] shadow-xl">
                {/* Stat 1 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#142842]/60 sm:bg-transparent border sm:border-0 border-[#C59242]/20 text-center sm:text-left sm:border-r sm:border-[#C59242]/30 sm:pr-2">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-gradient-to-br from-[#1B365D] to-[#0B192C] border border-[#C59242]/50 flex items-center justify-center flex-shrink-0 text-[#F5DE9C] shadow-sm">
                    <History className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-[#FFFDF8] block leading-tight">70+ Years</span>
                    <span className="text-[9px] sm:text-[11px] text-[#DFC48C] block mt-0.5 font-medium">Judicial Practice</span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#142842]/60 sm:bg-transparent border sm:border-0 border-[#C59242]/20 text-center sm:text-left sm:border-r sm:border-[#C59242]/30 sm:pr-2">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-gradient-to-br from-[#1B365D] to-[#0B192C] border border-[#C59242]/50 flex items-center justify-center flex-shrink-0 text-[#F5DE9C] shadow-sm">
                    <Gavel className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-[#FFFDF8] block leading-tight">1,000+ Disputes</span>
                    <span className="text-[9px] sm:text-[11px] text-[#DFC48C] block mt-0.5 font-medium">Advocated</span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#142842]/60 sm:bg-transparent border sm:border-0 border-[#C59242]/20 text-center sm:text-left">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-gradient-to-br from-[#1B365D] to-[#0B192C] border border-[#C59242]/50 flex items-center justify-center flex-shrink-0 text-[#F5DE9C] shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-[#FFFDF8] block leading-tight">Supreme & High</span>
                    <span className="text-[9px] sm:text-[11px] text-[#DFC48C] block mt-0.5 font-medium">Court Advocates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Engraved Plaque Statement in Deep Midnight Navy */}
            <div className="pt-1">
              <div className="rounded-xl bg-[#0B192C] border border-[#C59242]/45 p-3 text-center shadow-md relative overflow-hidden">
                <span className="font-cinzel text-[11px] font-bold tracking-[0.18em] text-[#F5DE9C] uppercase">
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
