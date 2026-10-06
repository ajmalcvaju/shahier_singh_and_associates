import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Landmark, History, Scale, Users, Sparkles, Building2, MapPin } from "lucide-react";

export default function AboutPage() {
  const architecturalStages = [
    {
      year: "1953",
      name: "Starlight Bungalow",
      subtitle: "Where it all started",
      desc: "The founding legal chambers established in 1953, where the family's first-generation advocates began serving clients with constitutional and civil law advisory.",
    },
    {
      year: "1969",
      name: "Shahier Bungalow",
      subtitle: "The first upgrade",
      desc: "Expanded into a dedicated legal estate in 1969 to house expanding litigation research libraries, partner chambers, and associate desks.",
    },
    {
      year: "2022",
      name: "The Reformed, Refined Singhs",
      subtitle: "Modern state-of-the-art complex",
      desc: "Transformed into a premier modern legal facility featuring international arbitration suites, high-tech client conference rooms, and digital IP labs.",
    },
  ];

  const milestones = [
    { year: "1953", title: "First Generation Legal Practice", desc: "Lineage established by Senior Jurist at Starlight Bungalow, championing constitutional rights." },
    { year: "1969", title: "Establishment of Shahier Bungalow Chambers", desc: "Upgraded headquarters to accommodate expanding civil, criminal, and trial litigation teams." },
    { year: "2022", title: "The Reformed, Refined Singhs Complex", desc: "Unveiled state-of-the-art modern headquarters integrating digital IP defense, international arbitration, and trial chambers." },
  ];

  const values = [
    {
      title: "Judicial Precision",
      desc: "Every contract, pleading, and advisory memorandum undergoes rigorous multi-partner audit to eliminate legal vulnerability.",
      icon: Scale,
    },
    {
      title: "Absolute Confidentiality",
      desc: "We protect sensitive client intelligence, trial strategies, and private proceedings with maximum security.",
      icon: Shield,
    },
    {
      title: "Strategic Alignment",
      desc: "We do not merely cite law; we align legal remedies with our clients' strategic enterprise objectives and risk appetite.",
      icon: Landmark,
    },
    {
      title: "Unwavering Integrity",
      desc: "Our reputation before the High Courts, Tribunals, and Supreme Court rests on steadfast ethical advocacy.",
      icon: Award,
    },
  ];

  return (
    <div className="space-y-0 bg-white">
      {/* Header Banner */}
      <section className="relative py-20 sepia-hero-bg border-b-2 border-[#C59242]/40 shadow-lg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFFDF8] px-4.5 py-1.5 rounded-full bg-[#0B192C] border border-[#C59242] shadow-md shimmer-active inline-block">
            <span className="bg-gradient-to-r from-[#FFFDF8] via-[#F5DE9C] to-[#FFFDF8] bg-clip-text text-transparent">
              70+ Years Family Lineage
            </span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            About Shahier Singh & Associates
          </h1>
          <p className="text-sm sm:text-base text-[#1E3A5F] font-medium max-w-2xl mx-auto leading-relaxed">
            Built upon three generations of courtroom mastery and legal scholarship, we provide authoritative legal counsel protecting client interests worldwide.
          </p>
        </div>
      </section>

      {/* 3 Generations Legacy Featured Section */}
      <section className="py-20 bg-white border-b border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Artwork Frame Column (Left) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[520px] w-full rounded-2xl overflow-hidden archival-frame bg-white shadow-xl group">
                <Image
                  src="/images/three_generations.png"
                  alt="The Legal Legacy - Three Generations Portrait Artwork"
                  fill
                  unoptimized
                  className="object-contain bg-[#FAF7F0] p-3 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#C59242] shadow-xl text-center">
                  <span className="font-cinzel text-sm font-bold tracking-widest text-[#8E5F2A] uppercase block">
                    THE LEGAL LEGACY
                  </span>
                  <span className="text-[11px] text-[#5C4D44] block mt-0.5 font-serif font-medium">
                    Three Generations of Legal & Judicial Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Column (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C59242]/50 bg-[#FAF6F0] text-[#8E5F2A] text-xs font-semibold uppercase tracking-widest shadow-sm shimmer-active">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Multi-Generational Heritage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
                Three Generations of Unwavering Advocacy, Honor & Legal Scholarship
              </h2>

              <p className="text-sm text-[#4A3B32] leading-relaxed">
                The story of Shahier Singh & Associates spans over seven decades of continuous legal practice. Rooted in the principles established by the family's founding patriarch in 1953, carried forward by Senior Advocate Shahier Singh, and expanded by third-generation partners, our chambers embody an unbroken chain of courtroom mastery.
              </p>

              <div className="space-y-4 pt-2">
                <div className="rounded-xl luxury-card bg-white p-4.5 flex items-start gap-4">
                  <div className="h-9 w-9 rounded-lg bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center text-[#8E5F2A] flex-shrink-0 font-serif font-bold text-sm shadow-inner">
                    G1
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A]">First Generation – Constitutional Foundation (1953)</h4>
                    <p className="text-xs text-[#5C4D44] leading-relaxed mt-0.5">Senior Advocates and District Bench Jurists establishing fundamental civil and constitutional jurisprudence.</p>
                  </div>
                </div>

                <div className="rounded-xl luxury-card bg-white p-4.5 flex items-start gap-4">
                  <div className="h-9 w-9 rounded-lg bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center text-[#8E5F2A] flex-shrink-0 font-serif font-bold text-sm shadow-inner">
                    G2
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A]">Second Generation – High-Stakes Trial & Advocacy Powerhouse (1969)</h4>
                    <p className="text-xs text-[#5C4D44] leading-relaxed mt-0.5">Senior Advocate Shahier Singh pioneering full-spectrum trial advocacy, commercial disputes, and Supreme Court litigation.</p>
                  </div>
                </div>

                <div className="rounded-xl luxury-card bg-white p-4.5 flex items-start gap-4">
                  <div className="h-9 w-9 rounded-lg bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center text-[#8E5F2A] flex-shrink-0 font-serif font-bold text-sm shadow-inner">
                    G3
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A]">Third Generation – Modern Complex & Global Practice (2022)</h4>
                    <p className="text-xs text-[#5C4D44] leading-relaxed mt-0.5">Integrating modern tech law, IP defense, multi-jurisdictional trial advocacy, and specialized legal practice verticals.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Architectural & Chambers Journey (1953 - 2022) Featured Section */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8E5F2A] px-4 py-1.5 rounded-full bg-white border border-[#C59242]/50 shadow-sm shimmer-active">
              Evolution of Our Chambers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Architectural Journey: From 1953 to Today
            </h2>
            <p className="text-sm text-[#4A3B32]">
              How our chambers evolved from the original 1953 Starlight Bungalow into a modern, refined legal headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Artwork Frame Column (Left) */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[550px] w-full rounded-2xl overflow-hidden archival-frame bg-white shadow-xl group">
                <Image
                  src="/images/chambers_history.jpg"
                  alt="Architectural Journey: 1953 Starlight Bungalow, 1969 Shahier Bungalow, 2022 Refined Singhs"
                  fill
                  unoptimized
                  className="object-contain bg-[#FAF7F0] p-3 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#C59242] shadow-xl text-center">
                  <span className="font-cinzel text-xs font-bold tracking-widest text-[#8E5F2A] uppercase block">
                    CHAMBERS EVOLUTION DIAGRAM
                  </span>
                  <span className="text-[10px] text-[#5C4D44] block mt-0.5 font-medium">
                    1953 Starlight Bungalow • 1969 Shahier Bungalow • 2022 Refined Singhs
                  </span>
                </div>
              </div>
            </div>

            {/* Stage Cards Column (Right) */}
            <div className="lg:col-span-6 space-y-6">
              {architecturalStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="luxury-card bg-white rounded-2xl p-6 space-y-2.5 group shadow-sm hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8E5F2A] uppercase tracking-wider px-3 py-1 rounded bg-[#FAF6F0] border border-[#C59242]/40">
                      {stage.year}
                    </span>
                    <span className="text-xs italic text-[#8E5F2A] font-medium">{stage.subtitle}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#8E5F2A] transition-colors">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-[#4A3B32] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-white border-b border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8E5F2A] px-4 py-1.5 rounded-full bg-[#FAF6F0] border border-[#C59242]/50 shadow-sm shimmer-active">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
              The Four Pillars of Our Firm
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="luxury-card bg-white rounded-2xl p-7 space-y-4 text-center flex flex-col items-center shadow-sm hover:shadow-xl">
                  <div className="h-14 w-14 rounded-2xl bg-[#FAF6F0] border border-[#C59242]/40 flex items-center justify-center text-[#8E5F2A] shadow-inner group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">{v.title}</h3>
                  <p className="text-xs text-[#4A3B32] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8E5F2A] px-4 py-1.5 rounded-full bg-white border border-[#C59242]/50 shadow-sm shimmer-active">
              Evolution of Excellence
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
              Key Milestones in Our Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-[#C59242]/40 ml-4 sm:ml-32 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white border-2 border-[#C59242] group-hover:scale-125 transition-transform shadow-md" />
                <span className="sm:absolute sm:-left-32 sm:top-1 font-serif text-sm font-extrabold gold-text-gradient block mb-1 sm:mb-0">
                  {m.year}
                </span>
                <div className="rounded-xl luxury-card bg-white p-5.5 space-y-2 shadow-sm hover:shadow-xl">
                  <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">{m.title}</h4>
                  <p className="text-xs text-[#4A3B32] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
