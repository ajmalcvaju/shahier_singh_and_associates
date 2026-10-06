"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import StrategyCallModal from "@/components/StrategyCallModal";
import { 
  Gavel, 
  Building2, 
  Rocket, 
  ShieldCheck, 
  Award, 
  Landmark, 
  FileCheck, 
  HeartHandshake, 
  ShieldAlert, 
  Scale, 
  ArrowRight, 
  CheckCircle,
  Newspaper,
  FileText
} from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const practiceHighlights = [
    {
      title: "Dispute Resolution & Litigation",
      icon: Gavel,
      desc: "High-stakes trial advocacy before Supreme Court, High Courts, NCLT, and International Arbitration tribunals.",
    },
    {
      title: "Corporate & Commercial Services",
      icon: Building2,
      desc: "Architecting cross-border contracts, joint ventures, business transfers, and commercial agreements.",
    },
    {
      title: "Business Setup And Advisory",
      icon: Rocket,
      desc: "End-to-end entity incorporation, regulatory clearances under FEMA, founder structuring, and compliance.",
    },
    {
      title: "Legal Retainer & On-Call Support",
      icon: ShieldCheck,
      desc: "Dedicated 24/7 general counsel retainer services for organizations, SMEs, and global enterprises.",
    },
    {
      title: "Intellectual Property (IP)",
      icon: Award,
      desc: "Protecting transformative patents, global trademark portfolios, trade secrets, and software licensing.",
    },
    {
      title: "Real Estate & Infrastructure",
      icon: Landmark,
      desc: "Title due diligence, RERA compliance, EPC infrastructure contracts, and commercial leasing suits.",
    },
    {
      title: "Corporate Advisory & Regulatory Support",
      icon: FileCheck,
      desc: "Governance advisory, SEBI disclosures, RBI FEMA compounding, and regulatory risk auditing.",
    },
    {
      title: "Family & Matrimonial Law",
      icon: HeartHandshake,
      desc: "High-net-worth family business settlements, estate planning, matrimonial litigation, and custody suits.",
    },
    {
      title: "Criminal Litigation",
      icon: ShieldAlert,
      desc: "White-collar defense, Enforcement Directorate (PMLA) trials, CBI/SFIO investigations, and bail advocacy.",
    },
    {
      title: "Civil Litigation",
      icon: Scale,
      desc: "Property suits, specific performance enforcement, Order 37 debt recovery, and civil writs across courts.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Managing Partner & 3-Generation Family Lineage Spotlight */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Dual Images Column (Left) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Photo 1: Managing Partner Shahier Singh */}
              <div className="relative h-[420px] w-full rounded-2xl overflow-hidden archival-frame group bg-white shadow-xl">
                <Image
                  src="/images/shahier_real.png"
                  alt="Shahier Singh - Senior Advocate"
                  fill
                  unoptimized
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E07]/85 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#C59242] shadow-xl text-center">
                  <h4 className="font-serif text-base font-bold text-[#1A1A1A]">Shahier Singh</h4>
                  <p className="text-[11px] text-[#8E5F2A] font-bold tracking-wide">Senior Advocate & Lead Trial Counsel</p>
                </div>
              </div>

              {/* Photo 2: Three Generations Artwork */}
              <div className="relative h-[420px] w-full rounded-2xl overflow-hidden archival-frame bg-white group shadow-xl">
                <Image
                  src="/images/three_generations.png"
                  alt="The Legal Legacy - 3 Generations Sketch Artwork"
                  fill
                  unoptimized
                  className="object-contain bg-[#FAF7F0] p-3 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E07]/75 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#C59242] shadow-xl text-center">
                  <h4 className="font-cinzel text-xs font-bold text-[#8E5F2A] uppercase tracking-wider">THE LEGAL LEGACY</h4>
                  <p className="text-[10px] text-[#5C4D44] font-medium">70+ Years Family Lineage</p>
                </div>
              </div>

            </div>

            {/* Text Column (Right) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8E5F2A] px-4 py-1.5 rounded-full bg-[#FAF6F0] border border-[#C59242]/50 shadow-sm shimmer-active">
                70+ Years Judicial & Trial Lineage
              </span>
              <div className="relative">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
                  "In high-stakes legal battles and complex trials, outcome is not negotiable. Integrity and preparation decide victory."
                </h2>
              </div>
              <p className="text-sm text-[#4A3B32] leading-relaxed">
                Spanning three generations of trial advocates and judicial bench members, Shahier Singh & Associates has earned a commanding reputation for championing high-stakes legal disputes and complex litigation. We approach every matter with judicial rigor, strategic precision, and relentless client dedication.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 w-full">
                <div className="flex items-start gap-3 p-4 rounded-xl luxury-card bg-white">
                  <div className="h-9 w-9 rounded-lg bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center flex-shrink-0 text-[#8E5F2A] shadow-inner mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#8E5F2A]" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-[#1A1A1A]">Uncompromising Confidentiality</h5>
                    <p className="text-[11px] text-[#5C4D44] leading-normal mt-0.5">Discreet, strategic defense tailored for high-profile leaders, families, and organizations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl luxury-card bg-white">
                  <div className="h-9 w-9 rounded-lg bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center flex-shrink-0 text-[#8E5F2A] shadow-inner mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#8E5F2A]" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-[#1A1A1A]">Multi-Jurisdictional Trial Reach</h5>
                    <p className="text-[11px] text-[#5C4D44] leading-normal mt-0.5">Advocating for clients across High Courts, District Courts, Supreme Court, and international tribunals.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
                <Link
                  href="/about"
                  className="wood-btn-primary px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center shadow-lg"
                >
                  Read 3-Generation Legacy
                </Link>
                <Link
                  href="/people"
                  className="wood-btn-secondary px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center hover:border-[#C59242]"
                >
                  Meet Counsel Team
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2.5 Historical Press Archives & Case Documentation Section */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E8DFD0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Description */}
            <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8E5F2A] px-4 py-1.5 rounded-full bg-white border border-[#C59242]/50 shadow-sm shimmer-active">
                Historical Press & Court Archives
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
                Seven Decades of Published Trial Victories & Court Reports
              </h2>
              <p className="text-sm text-[#4A3B32] leading-relaxed">
                Framed within our lead chamber walls rests a rich collage of historic newspaper reports documenting landmark criminal acquittals, high-profile civil trials, and judicial bench milestones—featuring our advocate team portraits across 1969, 2004, and the present era.
              </p>

              <div className="space-y-3 pt-2 w-full">
                <div className="flex items-start gap-3.5 p-4 rounded-xl luxury-card bg-white border border-[#E8DFD0] hover:border-[#C59242]">
                  <div className="h-9 w-9 rounded-lg bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center flex-shrink-0 text-[#8E5F2A] shadow-inner mt-0.5">
                    <Newspaper className="w-4 h-4 text-[#8E5F2A]" />
                  </div>
                  <span className="text-xs text-[#2B1A0E] font-medium text-left leading-relaxed">
                    Front-page trial coverage across national & regional daily newspapers
                  </span>
                </div>
                <div className="flex items-start gap-3.5 p-4 rounded-xl luxury-card bg-white border border-[#E8DFD0] hover:border-[#C59242]">
                  <div className="h-9 w-9 rounded-lg bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center flex-shrink-0 text-[#8E5F2A] shadow-inner mt-0.5">
                    <Award className="w-4 h-4 text-[#8E5F2A]" />
                  </div>
                  <span className="text-xs text-[#2B1A0E] font-medium text-left leading-relaxed">
                    Historic advocate group portraits from 1969, 2004, and 2022 team sessions
                  </span>
                </div>
                <div className="flex items-start gap-3.5 p-4 rounded-xl luxury-card bg-white border border-[#E8DFD0] hover:border-[#C59242]">
                  <div className="h-9 w-9 rounded-lg bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center flex-shrink-0 text-[#8E5F2A] shadow-inner mt-0.5">
                    <FileText className="w-4 h-4 text-[#8E5F2A]" />
                  </div>
                  <span className="text-xs text-[#2B1A0E] font-medium text-left leading-relaxed">
                    Unbroken legacy of trial defense in High Courts & Supreme Court
                  </span>
                </div>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start w-full">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E5F2A] hover:text-[#5C3D27] transition-colors"
                >
                  Explore Chambers History & Lineage <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Framed Archival Collage Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden archival-frame bg-white shadow-2xl group">
                <div className="relative w-full h-[360px] sm:h-[460px] rounded-t-2xl overflow-hidden bg-[#FDFBF7]">
                  <Image
                    src="/images/news.jpeg"
                    alt="Shahier Singh & Associates Historical Press Archives & Advocate Group Portraits Collage"
                    fill
                    unoptimized
                    className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5 text-center bg-gradient-to-b from-white to-[#FAF6EE] border-t border-[#C59242] space-y-1">
                  <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#8E5F2A] uppercase tracking-wider">
                    CHAMBERS ARCHIVAL PRESS WALL & ADVOCATE PORTRAITS (1969 - 2022)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#5C4D44]">
                    Decades of landmark trial news clippings alongside 3 generations of advocate team portraits.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Practice Verticals Grid (10 Core Verticals) */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8E5F2A] px-4 py-1.5 rounded-full bg-white border border-[#C59242]/60 shadow-sm shimmer-active">
              Core Practice Verticals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Our Expertise & Legal Practice Areas
            </h2>
            <p className="text-sm text-[#4A3B32]">
              Full-spectrum legal advocacy across 10 specialized practice areas, backed by 70+ years of judicial lineage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceHighlights.map((practice, index) => {
              const IconComponent = practice.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-white p-7 sm:p-8 text-center flex flex-col items-center justify-between border-2 border-[#C59242]/70 hover:border-[#C59242] shadow-[0_4px_16px_rgba(42,22,12,0.08)] hover:shadow-[0_16px_36px_rgba(197,146,66,0.22)] transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#F3E8D3] border-2 border-[#C59242]/70 flex items-center justify-center text-[#8E5F2A] mb-5 group-hover:scale-110 group-hover:border-[#C59242] transition-all shadow-sm">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#8E5F2A] transition-colors leading-snug">
                      {practice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed mb-6">
                      {practice.desc}
                    </p>
                  </div>
                  <Link
                    href={`/expertise?index=${index}#detail-panel`}
                    className="w-full py-3 px-5 rounded-xl bg-[#FAF6F0] hover:bg-[#8E5F2A] text-[#8E5F2A] hover:text-white border-1.5 border-[#C59242]/80 hover:border-[#8E5F2A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
                  >
                    <span>Learn Practice Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Landmark Trial & Case Highlights & Stat Grid */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8E5F2A] px-4 py-1.5 rounded-full bg-white border border-[#C59242]/50 shadow-sm shimmer-active">
              Track Record
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Landmark Cases & Trial Victories
            </h2>
          </div>

          {/* 4-Card Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "70+",
                label: "Years Experience",
                badge: "ESTABLISHED 1953",
                isGoldNumber: true,
                hasGoldBorder: true,
              },
              {
                number: "4000+",
                label: "Clients Represented",
                badge: "ADVOCACY & LITIGATION",
                isGoldNumber: false,
                hasGoldBorder: false,
              },
              {
                number: "7500+",
                label: "Successful Cases",
                badge: "TRIAL & DISPUTES",
                isGoldNumber: false,
                hasGoldBorder: false,
              },
              {
                number: "99.5%",
                label: "Success Rate",
                badge: "FAVORABLE OUTCOMES",
                isGoldNumber: false,
                hasGoldBorder: false,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-2 border-2 border-[#C59242]/70 bg-white hover:border-[#C59242] shadow-[0_4px_16px_rgba(42,22,12,0.08)] hover:shadow-[0_16px_36px_rgba(197,146,66,0.22)]"
              >
                <div className="flex flex-col items-center">
                  <h3
                    className={`font-serif text-4xl sm:text-5xl font-extrabold tracking-tight ${
                      stat.isGoldNumber
                        ? "gold-text-gradient font-black"
                        : "text-[#1A1A1A]"
                    }`}
                  >
                    {stat.number}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#4A3B32] mt-2 mb-6 text-center">
                    {stat.label}
                  </p>
                </div>
                <span className="inline-block px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider rounded-full bg-[#FAF6F0] text-[#8E5F2A] border border-[#C59242]/40 uppercase shadow-sm">
                  {stat.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Strategy Call Banner CTA */}
      <section className="py-16 bg-gradient-to-r from-[#140B05] via-[#2A160C] to-[#140B05] border-y-2 border-[#C59242]/50 relative overflow-hidden shadow-2xl">
        {/* Subtle radial ambient bloom */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-25" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="h-16 w-16 rounded-2xl bg-[#361D0F] border border-[#C59242] flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-9 h-9 text-[#F5DE9C]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Require Strategic Legal Representation?
          </h2>
          <p className="text-sm sm:text-base text-[#E8DCB8] max-w-xl mx-auto leading-relaxed">
            Schedule an initial confidential consultation with our Senior Partners to assess risk, discuss strategy, and safeguard your rights.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block wood-btn-primary px-9 py-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-2xl cursor-pointer"
            >
              Contact Counsel Chamber
            </button>
          </div>
        </div>
      </section>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
