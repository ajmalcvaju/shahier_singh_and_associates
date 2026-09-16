"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Scale, BookOpen, Shield, Award } from "lucide-react";
import StrategyCallModal from "@/components/StrategyCallModal";

export default function PeoplePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const people = [
    {
      name: "Adv. M. Shahier Singh",
      role: "Senior Advocate & Founder Managing Partner",
      practice: "Corporate & Constitutional Law",
      image: "/images/shahier_real.png",
      education: "LL.M. (Harvard Law School), B.A. LL.B. (NLSIU Bangalore)",
      admissions: "Supreme Court of India, Bar Council of Delhi, Bar Council of Kerala",
      bio: "Founder and Senior Advocate leading cross-border corporate disputes, constitutional challenges, and strategic litigation across the Supreme Court and High Courts of India.",
      email: "shahier.singh@shahiersingh.com",
    },
    {
      name: "Adv. T.H. Vijayan",
      role: "Senior Counsel & Trial Advisory",
      practice: "Appellate & Civil Advocacy",
      image: "/images/shahier.png",
      education: "LL.B. – Kerala Law Academy",
      admissions: "High Court of Kerala, Bar Council of Kerala",
      bio: "Doyen of trial advocacy with extensive experience presiding over complex land tenure, commercial contracts, civil appeals, and constitutional writs.",
      email: "th.vijayan@shahiersingh.com",
    },
    {
      name: "Adv. Sharan Shahier",
      role: "Partner – Corporate & High Court Litigation",
      practice: "Litigation & Due Diligence",
      image: "/images/sharan_shahier.png",
      education: "B.A. LL.B. (Hons.) – University Law College Bangalore | Diplomas in Cyber Law (GLC Mumbai), Securities Law (ILS Pune) & M&A",
      admissions: "High Court of Kerala, Bar Council of Kerala",
      bio: "With 16+ years of corporate litigation experience (formerly with Menon & Pai), Sharan leads high-stakes trial advocacy in the High Court of Kerala across Criminal, Civil, Corporate, Real Estate, Insolvency, Consumer Law, and Due Diligence. Has represented major public sector undertakings (BPCL, IOCL, HPCL, Air India, Cochin Port Trust, CSEZA, WAPCOS) and corporate leaders (Tata Tea, Orkla India, Thomas Cook, Brigade Group, Roche, Amrut Distilleries).",
      email: "sharan.shahier@shahiersingh.com",
    },
    {
      name: "Adv. P. Rajesh Kumar",
      role: "Senior Associate Advocate",
      practice: "Civil & Commercial Litigation",
      image: "/images/shahier.png",
      education: "LL.B. – Government Law College Ernakulam",
      admissions: "High Court of Kerala, Subordinate Trial Courts",
      bio: "Specializes in high-value commercial trial enforcement, property law disputes, contract breach claims, and execution proceedings.",
      email: "p.rajeshkumar@shahiersingh.com",
    },
    {
      name: "Adv. K.M. Anilesh",
      role: "Senior Associate Advocate",
      practice: "Criminal Defense & White Collar",
      image: "/images/shahier.png",
      education: "B.A. LL.B. – Calicut University",
      admissions: "High Court of Kerala, District & Sessions Courts",
      bio: "Extensive courtroom experience defending complex financial crime matters, economic offense prosecutions, bail proceedings, and corporate investigations.",
      email: "km.anilesh@shahiersingh.com",
    },
    {
      name: "Adv. Shamjith. G.B",
      role: "Associate Advocate",
      practice: "Real Estate & Title Diligence",
      image: "/images/shahier.png",
      education: "LL.B. – Government Law College Calicut",
      admissions: "Bar Council of Kerala, High Court of Kerala",
      bio: "Expert in commercial real estate due diligence, land acquisition regulations, municipal compliance, and property title litigation.",
      email: "shamjith.gb@shahiersingh.com",
    },
    {
      name: "Adv. Aneesh. M",
      role: "Associate Advocate",
      practice: "Insolvency & Banking Litigation",
      image: "/images/shahier.png",
      education: "LL.B. – University of Kerala",
      admissions: "NCLT Benches, High Court of Kerala",
      bio: "Focuses on corporate insolvency resolution processes (IBC), SARFAESI bank recovery enforcement, and debt recovery tribunal trials.",
      email: "aneesh.m@shahiersingh.com",
    },
    {
      name: "Adv. K.V. Sadique Ali",
      role: "Associate Advocate",
      practice: "Labour & Statutory Compliance",
      image: "/images/shahier.png",
      education: "B.B.A. LL.B. – MG University",
      admissions: "High Court of Kerala, Industrial Tribunals",
      bio: "Handles employment law compliance, trade union disputes, workplace regulatory enforcement, and service law writs.",
      email: "kv.sadiqueali@shahiersingh.com",
    },
    {
      name: "Adv. Neeraj Rehman",
      role: "Associate Advocate",
      practice: "Corporate Contracts & Advisory",
      image: "/images/shahier.png",
      education: "LL.B. – Government Law College Kozhikode",
      admissions: "Bar Council of Kerala",
      bio: "Specializes in commercial contract drafting, cross-border licensing agreements, intellectual property protection, and corporate secretarial compliance.",
      email: "neeraj.rehman@shahiersingh.com",
    },
    {
      name: "Adv. Shamna. V.K",
      role: "Associate Advocate",
      practice: "Consumer Law & Arbitration",
      image: "/images/shahier.png",
      education: "LL.B. – Calicut University Law Centre",
      admissions: "State Consumer Disputes Redressal Commission, High Court of Kerala",
      bio: "Represents corporate clients and individuals before Consumer Protection Commissions, domestic arbitration panels, and appellate courts.",
      email: "shamna.vk@shahiersingh.com",
    },
    {
      name: "Adv. Amrutha Raj",
      role: "Associate Advocate",
      practice: "Appellate Research & Brief Drafting",
      image: "/images/shahier.png",
      education: "LL.B. – Kerala Law Academy",
      admissions: "Bar Council of Kerala",
      bio: "Dedicated legal researcher and appellate draftsman specializing in constitutional writ petitions, statutory interpretation, and trial case strategy.",
      email: "amrutha.raj@shahiersingh.com",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="py-16 bg-[#120B07] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
            Official Roll of Advocates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Our Advocates & Senior Counsel
          </h1>
          <p className="text-sm text-[#A39382] max-w-2xl mx-auto">
            Distinguished trial advocates and legal specialists representing clients in the High Court of Kerala, Supreme Court of India, and commercial tribunals.
          </p>
        </div>
      </section>

      {/* People Grid */}
      <section className="py-16 bg-[#0E0906]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {people.map((person, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-[#170E09] border border-[#3D291D] hover:border-[#D4AF37] overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full bg-[#170E09] overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#170E09] via-[#170E09]/30 to-transparent pointer-events-none z-10" />
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="inline-block text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#27190F] border border-[#523A2A]">
                      {person.practice}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C8B8A6]">{person.role}</p>
                    <p className="text-xs text-[#8C7C6D] leading-relaxed pt-1">{person.bio}</p>

                    <div className="pt-3 border-t border-[#291B13] space-y-1.5 text-[11px] text-[#A39382]">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{person.education}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Scale className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{person.admissions}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full wood-btn-secondary py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#D4AF37] cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Contact Counsel</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
