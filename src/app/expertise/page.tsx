"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  CheckCircle2, 
  ChevronRight 
} from "lucide-react";
import StrategyCallModal from "@/components/StrategyCallModal";

function ExpertiseContent() {
  const searchParams = useSearchParams();
  const [selectedPractice, setSelectedPractice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const practices = [
    {
      title: "Dispute Resolution & Litigation",
      icon: Gavel,
      tagline: "We provide strong and strategic representation across various judicial and quasi-judicial forums, ensuring our clients’ interests are effectively protected in complex and high-stakes disputes.",
      details: [
        { title: "Civil & Commercial Disputes", text: "Handling contractual breaches, recovery suits, property disputes, and complex commercial litigation before appropriate courts and forums." },
        { title: "Criminal Litigation", text: "Specialized expertise in bail applications, criminal trials, criminal appeals, and representation in serious criminal offences including murder appeals." },
        { title: "Preventive Detention Matters", text: "Challenging detention orders under the Kerala Anti-Social Activities (Prevention) Act (KAAPA) and the Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act (PITNDPS)." },
        { title: "High Court Practice", text: "Representation in diverse civil and criminal matters before the High Court of Kerala, including writ petitions and appellate proceedings." },
        { title: "Appellate Practice", text: "Handling appeals in various forums including customs appeals and challenges before specialized appellate authorities." },
        { title: "Tribunal Representation", text: "Professional advocacy before tribunals such as the National Company Law Tribunal (NCLT), Debt Recovery Tribunal (DRT), and the Kerala Administrative Tribunal (KAT)." },
        { title: "Corporate & Insolvency Matters", text: "Representation in NCLT proceedings including Corporate Insolvency Resolution Process (CIRP), shareholder oppression, and mismanagement cases." },
        { title: "Consumer Protection", text: "Assisting clients in resolving consumer disputes and grievances before consumer forums." },
        { title: "Domestic Arbitration", text: "Representation in both ad-hoc and institutional arbitration proceedings, including interim relief applications and enforcement of arbitral awards." },
      ],
      mandates: "High-stakes trial advocacy, constitutional writ petitions, and arbitration representation across Kerala High Court, NCLT, DRT, and Appellate Forums.",
    },
    {
      title: "Corporate & Commercial Services",
      icon: Building2,
      tagline: "Our team assists businesses in navigating the complex legal landscape of modern commerce.",
      details: [
        { title: "Contractual Expertise", text: "Professional Contract Drafting and comprehensive Document Vetting to mitigate risk." },
        { title: "Intellectual Property Rights (IPR)", text: "End-to-end services for Intellectual Property Rights (IPR) Registration and aggressive protection through litigation." },
        { title: "Regulatory Compliance", text: "Ensuring your business remains compliant with evolving state and central regulations." },
      ],
      mandates: "Structuring robust commercial contracts, safeguarding IP assets, and maintaining full regulatory compliance.",
    },
    {
      title: "Business Setup And Advisory",
      icon: Rocket,
      tagline: "We act as a strategic partner for entrepreneurs, facilitating a smooth transition from idea to operational entity.",
      details: [
        { title: "Entity Selection & Structuring", text: "Expert guidance on choosing the right legal form for your business." },
        { title: "Business Registration", text: "Comprehensive assistance with licensing, registrations, and foundational compliance." },
        { title: "Financial & Tax Setup", text: "Strategic banking setup, tax registration, and proactive tax planning." },
      ],
      mandates: "Guided numerous tech ventures and startups through incorporation, cap table setup, and statutory tax setup.",
    },
    {
      title: "Legal Retainer & On-Call Support",
      icon: ShieldCheck,
      tagline: "For businesses that require ongoing legal oversight without the overhead of an in-house department.",
      details: [
        { title: "Retainer-Based Services", text: "Get dedicated support through an On-Call Associate for immediate legal consultations, daily compliance checks, and priority document reviews." },
        { title: "Why Choose Us?", text: "We combine deep statutory knowledge with a results-oriented approach, leveraging our expertise in both traditional litigation and modern corporate law to help you achieve your goals." },
      ],
      mandates: "Serving as ongoing external General Counsel and On-Call Legal Partner for corporate boards and growing enterprises.",
    },
    {
      title: "Intellectual Property (IP)",
      icon: Award,
      tagline: "Comprehensive protection, strategic portfolio management, filing, defense, and aggressive enforcement for trademarks, copyrights, and brand assets.",
      details: [
        { title: "Trademark & Copyright Registration", text: "End-to-end filing and prosecution for brand names, logos, and creative works." },
        { title: "IP Strategy", text: "Advisory on brand protection, portfolio management, and monetization strategies." },
        { title: "Filing & Prosecution", text: "Managing applications, renewals, and maintenance before the IP offices." },
        { title: "Defending & Objections", text: "Handling responses to examination reports and representing clients in show-cause hearings." },
        { title: "IP Enforcement", text: "Filing and defending opposition proceedings, infringement suits, and passing-off actions." },
      ],
      mandates: "End-to-end IP prosecution, trademark enforcement, show-cause hearings, and preliminary trial injunctions for brand assets.",
    },
    {
      title: "Real Estate & Infrastructure",
      icon: Landmark,
      tagline: "Verification of ownership history, property registration services, comprehensive RERA advisory & litigation for homebuyers and developers, and RERA Appellate Tribunal advocacy.",
      details: [
        { title: "Due Diligence & Title Search", text: "Verification of ownership history (30+ years) and encumbrance checks." },
        { title: "Registration Services", text: "Drafting and registering Sale Deeds, Lease Deeds, and Mortgages." },
        { title: "RERA Litigation & Advisory (Homebuyers)", text: "Filing complaints for delay in possession, seeking refunds with interest, and compensation for structural defects or misleading advertisements." },
        { title: "RERA Litigation & Advisory (Developers)", text: "Project registration, drafting RERA-compliant Allotment Letters/Agreements for Sale, and defending against regulatory complaints." },
        { title: "Appeals", text: "Representation before the RERA Appellate Tribunal and subsequent appeals to the High Court." },
      ],
      mandates: "Advised real estate developers on project registration & title verification, and represented homebuyers before RERA Authorities & High Court.",
    },
    {
      title: "Corporate Advisory & Regulatory Support",
      icon: FileCheck,
      tagline: "Advisory on MNC entry strategies, FEMA compliance, PSU public procurement norms, regulatory audits, and commercial contract negotiations.",
      details: [
        { title: "MNC Support", text: "Advisory on entry strategies, FEMA compliance, and cross-border structural advice." },
        { title: "PSU-Specific Compliance", text: "Navigating public procurement norms, government tenders, and administrative law requirements." },
        { title: "Regulatory Audits", text: "Ensuring 100% compliance with local and central labor laws, environmental norms, and secretarial standards." },
        { title: "Contract Management", text: "Vetting and negotiating JV agreements, Master Service Agreements (MSAs), and Vendor Contracts." },
      ],
      mandates: "Engineered comprehensive regulatory compliance architecture, FEMA filings, and public procurement strategy for institutional enterprises.",
    },
    {
      title: "Family & Matrimonial Law",
      icon: HeartHandshake,
      tagline: "Comprehensive legal support for domestic disputes, prioritizing both legal excellence and the sensitive nature of family dynamics.",
      details: [
        { title: "Mutual Consent Divorce", text: "Streamlining the process for parties who have reached an amicable settlement to ensure a swift and smooth transition." },
        { title: "Contested (Unilateral) Divorce", text: "Robust representation in cases involving cruelty, desertion, adultery, or other statutory grounds." },
        { title: "Appellate Advocacy (Mat Appeals)", text: "Handling Matrimonial Appeals before High Courts to challenge or defend orders passed by Family Courts." },
        { title: "Custody & Guardianship", text: "Navigating complex child custody battles, visitation rights, and wardship issues with the 'best interests of the child' as the primary focus." },
        { title: "Return of Gold & Assets", text: "Legal action for the recovery of Stridhan, dowry articles, and personal ornaments." },
        { title: "Maintenance & Alimony", text: "Litigation involving interim and permanent maintenance for spouses and children under relevant personal laws and Section 125 CrPC / BNSS." },
        { title: "Domestic Violence & Protection", text: "Seeking or defending against protection orders and residency rights." },
      ],
      mandates: "Advocated in complex matrimonial appeals before the High Court, custody disputes, and high-net-worth settlement agreements.",
    },
    {
      title: "Criminal Litigation",
      icon: ShieldAlert,
      tagline: "Specialized defense in white-collar crimes, PMLA, ED/CBI proceedings, and bail advocacy.",
      details: [
        { title: "White-Collar & Economic Offence Defense", text: "Prevention of Money Laundering Act (PMLA), ED proceedings, CBI, ACB, and SFIO investigation defense." },
        { title: "Bail & Serious Offence Advocacy", text: "Anticipatory bail petitions, murder appeals, criminal trials, and High Court criminal proceedings." },
      ],
      mandates: "Secured anticipatory bail and discharge for corporate executives and key individuals in high-profile proceedings.",
    },
    {
      title: "Civil Litigation",
      icon: Scale,
      tagline: "Property suits, specific performance claims, debt recovery, and writ petitions.",
      details: [
        { title: "Commercial & Civil Claims", text: "Specific performance suits, summary suits under Order 37 CPC, and Commercial Court proceedings." },
        { title: "Property & Recovery Suits", text: "Injunction petitions, stay applications, landlord-tenant disputes, and execution of civil decrees." },
      ],
      mandates: "Successfully executed major civil decree recovery suits across multi-state jurisdictions.",
    },
  ];

  useEffect(() => {
    const idxParam = searchParams.get("index");
    if (idxParam !== null) {
      const parsed = parseInt(idxParam, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < practices.length) {
        setSelectedPractice(parsed);
      }
    }
  }, [searchParams, practices.length]);

  const handleSelectPractice = (idx: number) => {
    setSelectedPractice(idx);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const detailElem = document.getElementById("detail-panel");
      if (detailElem) {
        detailElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const current = practices[selectedPractice];
  const CurrentIcon = current.icon;

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="py-20 bg-[#120B07] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
            Practice Mastery
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Our Expertise & Legal Practice Areas
          </h1>
          <p className="text-sm text-[#A39382] max-w-2xl mx-auto leading-relaxed">
            Full-spectrum legal advocacy across 10 core practice verticals, combining 70+ years of judicial lineage with pragmatic commercial solutions.
          </p>
        </div>
      </section>

      {/* Main Practice Interactive Layout */}
      <section className="py-16 bg-[#0E0906]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Practice Tabs (Left Column) */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-semibold text-[#7A6A5C] uppercase tracking-wider block mb-3 px-2">
                Select Practice Vertical (10 Core Areas):
              </span>
              <div className="space-y-2 max-h-[700px] overflow-y-auto pr-1">
                {practices.map((p, idx) => {
                  const Icon = p.icon;
                  const isSelected = selectedPractice === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectPractice(idx)}
                      className={`w-full p-3.5 rounded-xl text-left flex items-center justify-between transition-all border cursor-pointer ${
                        isSelected
                          ? "bg-[#25170E] border-[#D4AF37] text-white shadow-lg ring-1 ring-[#D4AF37]/40"
                          : "bg-[#160E09] border-[#3D291D] text-[#A39382] hover:text-white hover:bg-[#1F140D]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? "bg-[#3A2416] text-[#D4AF37]" : "bg-[#1E130B] text-[#7A6A5C]"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-serif text-xs sm:text-sm font-bold leading-tight">{p.title}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isSelected ? "text-[#D4AF37] translate-x-1" : "text-[#5C4D40]"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Practice Detail View (Right Column) */}
            <div id="detail-panel" className="lg:col-span-7">
              <div className="wood-badge rounded-2xl p-8 border border-[#523A2A] space-y-6 sticky top-24">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-[#291B13]">
                  <div className="h-14 w-14 rounded-2xl bg-[#2A1C12] border border-[#6E4D38] flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <CurrentIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {current.title}
                    </h2>
                    <p className="text-xs text-[#D4AF37] font-medium mt-1 leading-relaxed">
                      {current.tagline}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#A39382]">
                    Key Capabilities & Advisory Scope
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {current.details.map((item, i) => {
                      const title = typeof item === "string" ? null : item.title;
                      const text = typeof item === "string" ? item : item.text;
                      return (
                        <div key={i} className="flex items-start gap-3 rounded-xl bg-[#19100A] p-4 border border-[#3D291D]">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            {title && (
                              <h5 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wide">
                                {title}
                              </h5>
                            )}
                            <p className="text-xs text-[#E2D5C7] leading-relaxed">{text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Mandate Highlight Card */}
                <div className="rounded-xl bg-gradient-to-r from-[#20150F] to-[#140D08] p-5 border border-[#523A2A]">
                  <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Representative Mandate Highlight
                  </span>
                  <p className="text-xs text-white italic font-serif">
                    "{current.mandates}"
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="wood-btn-secondary w-full px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-center block"
                  >
                    Submit Confidential Briefing
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default function ExpertisePage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-[#D4AF37] bg-[#0E0906]">
        Loading Practice Areas...
      </div>
    }>
      <ExpertiseContent />
    </Suspense>
  );
}
