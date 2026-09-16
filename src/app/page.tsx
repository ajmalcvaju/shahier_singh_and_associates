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
      <section className="py-20 bg-[#0E0906] relative overflow-hidden border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Dual Images Column (Left) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Photo 1: Managing Partner Shahier Singh */}
              <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-[#593E2B] shadow-2xl group">
                <Image
                  src="/images/shahier_real.png"
                  alt="Shahier Singh - Senior Advocate"
                  fill
                  unoptimized
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D08] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl wood-badge border border-[#D4AF37]/30 text-center">
                  <h4 className="font-serif text-base font-bold text-white">Shahier Singh</h4>
                  <p className="text-[11px] text-[#D4AF37]">Senior Advocate & Lead Trial Counsel</p>
                </div>
              </div>

              {/* Photo 2: Three Generations Artwork */}
              <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border-2 border-[#6E4D38] shadow-2xl wood-badge group">
                <Image
                  src="/images/three_generations.png"
                  alt="The Legal Legacy - 3 Generations Sketch Artwork"
                  fill
                  unoptimized
                  className="object-contain bg-[#160E0A] p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D08] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl wood-badge border border-[#D4AF37]/40 text-center">
                  <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-wider">THE LEGAL LEGACY</h4>
                  <p className="text-[10px] text-[#E2D5C7]">70+ Years Family Lineage</p>
                </div>
              </div>

            </div>

            {/* Text Column (Right) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
                70+ Years Judicial & Trial Lineage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                "In high-stakes legal battles and complex trials, outcome is not negotiable. Integrity and preparation decide victory."
              </h2>
              <p className="text-sm text-[#A39382] leading-relaxed">
                Spanning three generations of trial advocates and judicial bench members, Shahier Singh & Associates has earned a commanding reputation for championing high-stakes legal disputes and complex litigation. We approach every matter with judicial rigor, strategic precision, and relentless client dedication.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 w-full">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#160E0A] border border-[#3D291D] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center flex-shrink-0 text-[#D4AF37] mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-white">Uncompromising Confidentiality</h5>
                    <p className="text-[11px] text-[#A39382] leading-normal mt-0.5">Discreet, strategic defense tailored for high-profile leaders, families, and organizations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#160E0A] border border-[#3D291D] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center flex-shrink-0 text-[#D4AF37] mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-white">Multi-Jurisdictional Trial Reach</h5>
                    <p className="text-[11px] text-[#A39382] leading-normal mt-0.5">Advocating for clients across High Courts, District Courts, Supreme Court, and international tribunals.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
                <Link
                  href="/about"
                  className="wood-btn-primary px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-center"
                >
                  Read 3-Generation Legacy
                </Link>
                <Link
                  href="/people"
                  className="wood-btn-secondary px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-center"
                >
                  Meet Counsel Team
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2.5 Historical Press Archives & Case Documentation Section */}
      <section className="py-20 bg-[#0B0704] border-b border-[#291B13] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Description */}
            <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
                Historical Press & Court Archives
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Seven Decades of Published Trial Victories & Court Reports
              </h2>
              <p className="text-sm text-[#A39382] leading-relaxed">
                Framed within our lead chamber walls rests a rich collage of historic newspaper reports documenting landmark criminal acquittals, high-profile civil trials, and judicial bench milestones—featuring our advocate team portraits across 1969, 2004, and the present era.
              </p>

              <div className="space-y-3 pt-2 w-full">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#160E0A] border border-[#3D291D] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center flex-shrink-0 text-[#D4AF37] mt-0.5">
                    <Newspaper className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs text-[#E2D5C7] font-medium text-left leading-relaxed">
                    Front-page trial coverage across national & regional daily newspapers
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#160E0A] border border-[#3D291D] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center flex-shrink-0 text-[#D4AF37] mt-0.5">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs text-[#E2D5C7] font-medium text-left leading-relaxed">
                    Historic advocate group portraits from 1969, 2004, and 2022 team sessions
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#160E0A] border border-[#3D291D] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center flex-shrink-0 text-[#D4AF37] mt-0.5">
                    <FileText className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs text-[#E2D5C7] font-medium text-left leading-relaxed">
                    Unbroken legacy of trial defense in High Courts & Supreme Court
                  </span>
                </div>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start w-full">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:underline"
                >
                  Explore Chambers History & Lineage <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Framed Archival Collage Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#523A2A] bg-[#120B07] shadow-2xl group">
                <div className="relative w-full h-[360px] sm:h-[460px] rounded-t-2xl overflow-hidden bg-[#0D0805]">
                  <Image
                    src="/images/news.jpeg"
                    alt="Shahier Singh & Associates Historical Press Archives & Advocate Group Portraits Collage"
                    fill
                    unoptimized
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center bg-[#1A110B] border-t border-[#3D291D] space-y-1">
                  <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                    CHAMBERS ARCHIVAL PRESS WALL & ADVOCATE PORTRAITS (1969 - 2022)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#A39382]">
                    Decades of landmark trial news clippings alongside 3 generations of advocate team portraits.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Practice Verticals Grid (10 Core Verticals) */}
      <section className="py-20 bg-[#120B07] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3 py-1 rounded-full bg-[#1F140D] border border-[#472E1E]">
              Core Practice Verticals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Our Expertise & Legal Practice Areas
            </h2>
            <p className="text-sm text-[#A39382]">
              Full-spectrum legal advocacy across 10 specialized practice areas, backed by 70+ years of judicial lineage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceHighlights.map((practice, index) => {
              const IconComponent = practice.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-[#19100A] p-7 border border-[#3D291D] hover:border-[#D4AF37] transition-all duration-300 shadow-xl hover:-translate-y-1 text-center flex flex-col items-center justify-between"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-xl bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {practice.title}
                    </h3>
                    <p className="text-xs text-[#A39382] leading-relaxed mb-4">
                      {practice.desc}
                    </p>
                  </div>
                  <Link
                    href={`/expertise?index=${index}#detail-panel`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37] hover:underline justify-center"
                  >
                    Learn Practice Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Landmark Trial & Case Highlights & Stat Grid */}
      <section className="py-20 bg-[#150D08] border-t border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3 py-1 rounded-full bg-[#1F140D] border border-[#472E1E]">
              Track Record
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Landmark Cases & Trial Victories
            </h2>
          </div>

          {/* 4-Card Stat Grid (Styled to match website's dark mahogany & gold luxury theme) */}
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
                className={`rounded-2xl p-7 flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1.5 wood-badge ${
                  stat.hasGoldBorder
                    ? "border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/15"
                    : "border border-[#4A3425] hover:border-[#D4AF37]/60 shadow-xl"
                }`}
              >
                <div className="flex flex-col items-center">
                  <h3
                    className={`font-serif text-4xl sm:text-5xl font-extrabold tracking-tight ${
                      stat.isGoldNumber
                        ? "gold-text-gradient text-[#D4AF37]"
                        : "text-white"
                    }`}
                  >
                    {stat.number}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#E2D5C7] mt-2 mb-6 text-center">
                    {stat.label}
                  </p>
                </div>
                <span className="inline-block px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider rounded-full bg-[#24170E] text-[#D4AF37] border border-[#593E2B] uppercase">
                  {stat.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Strategy Call Banner CTA */}
      <section className="py-16 bg-gradient-to-r from-[#21140B] via-[#352113] to-[#21140B] border-y border-[#523A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Award className="w-12 h-12 text-[#D4AF37] mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Require Strategic Legal Representation?
          </h2>
          <p className="text-sm text-[#E2D5C7] max-w-xl mx-auto">
            Schedule an initial confidential consultation with our Senior Partners to assess risk, discuss strategy, and safeguard your rights.
          </p>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block wood-btn-primary px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-2xl cursor-pointer"
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
