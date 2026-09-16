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
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="relative py-20 bg-[#120B07] border-b border-[#291B13] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/office.png"
            alt="Office background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120B07] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
            70+ Years Family Lineage
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
            About Shahier Singh & Associates
          </h1>
          <p className="text-sm sm:text-base text-[#A39382] max-w-2xl mx-auto leading-relaxed">
            Built upon three generations of courtroom mastery and legal scholarship, we provide authoritative legal counsel protecting client interests worldwide.
          </p>
        </div>
      </section>

      {/* 3 Generations Legacy Featured Section */}
      <section className="py-20 bg-[#0A0604] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Artwork Frame Column (Left) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[520px] w-full rounded-2xl overflow-hidden border-2 border-[#6E4D38] shadow-2xl wood-badge group">
                <Image
                  src="/images/three_generations.png"
                  alt="The Legal Legacy - Three Generations Portrait Artwork"
                  fill
                  unoptimized
                  className="object-contain bg-[#160E0A] p-2 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#1B110B]/95 backdrop-blur-md border border-[#D4AF37]/50 text-center">
                  <span className="font-cinzel text-sm font-bold tracking-widest text-[#D4AF37] uppercase block">
                    THE LEGAL LEGACY
                  </span>
                  <span className="text-[11px] text-[#E2D5C7] block mt-0.5 font-serif">
                    Three Generations of Legal & Judicial Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Column (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#593E2B] bg-[#1E130B] text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Multi-Generational Heritage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Three Generations of Unwavering Advocacy, Honor & Legal Scholarship
              </h2>

              <p className="text-sm text-[#A39382] leading-relaxed">
                The story of Shahier Singh & Associates spans over seven decades of continuous legal practice. Rooted in the principles established by the family's founding patriarch in 1953, carried forward by Senior Advocate Shahier Singh, and expanded by third-generation partners, our chambers embody an unbroken chain of courtroom mastery.
              </p>

              <div className="space-y-4 pt-2">
                <div className="rounded-xl bg-[#19100A] p-4 border border-[#3D291D] flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center text-[#D4AF37] flex-shrink-0 font-serif font-bold text-sm">
                    G1
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">First Generation – Constitutional Foundation (1953)</h4>
                    <p className="text-xs text-[#8C7C6D]">Senior Advocates and District Bench Jurists establishing fundamental civil and constitutional jurisprudence.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#19100A] p-4 border border-[#3D291D] flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center text-[#D4AF37] flex-shrink-0 font-serif font-bold text-sm">
                    G2
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">Second Generation – High-Stakes Trial & Advocacy Powerhouse (1969)</h4>
                    <p className="text-xs text-[#8C7C6D]">Senior Advocate Shahier Singh pioneering full-spectrum trial advocacy, commercial disputes, and Supreme Court litigation.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#19100A] p-4 border border-[#3D291D] flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center text-[#D4AF37] flex-shrink-0 font-serif font-bold text-sm">
                    G3
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">Third Generation – Modern Complex & Global Practice (2022)</h4>
                    <p className="text-xs text-[#8C7C6D]">Integrating modern tech law, IP defense, multi-jurisdictional trial advocacy, and specialized legal practice verticals.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Architectural & Chambers Journey (1953 - 2022) Featured Section */}
      <section className="py-20 bg-[#120B07] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
              Evolution of Our Chambers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Architectural Journey: From 1953 to Today
            </h2>
            <p className="text-sm text-[#A39382]">
              How our chambers evolved from the original 1953 Starlight Bungalow into a modern, refined legal headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Artwork Frame Column (Left) */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[550px] w-full rounded-2xl overflow-hidden border-2 border-[#6E4D38] shadow-2xl wood-badge group">
                <Image
                  src="/images/chambers_history.jpg"
                  alt="Architectural Journey: 1953 Starlight Bungalow, 1969 Shahier Bungalow, 2022 Refined Singhs"
                  fill
                  unoptimized
                  className="object-contain bg-[#19100A] p-2 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#1B110B]/95 backdrop-blur-md border border-[#D4AF37]/50 text-center">
                  <span className="font-cinzel text-xs font-bold tracking-widest text-[#D4AF37] uppercase block">
                    CHAMBERS EVOLUTION DIAGRAM
                  </span>
                  <span className="text-[10px] text-[#E2D5C7] block mt-0.5">
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
                  className="wood-badge rounded-2xl p-6 border border-[#3D291D] hover:border-[#D4AF37] transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#27190F] border border-[#523A2A]">
                      {stage.year}
                    </span>
                    <span className="text-xs italic text-[#7A6A5C]">{stage.subtitle}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-[#A39382] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-[#140C08] border-y border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              The Four Pillars of Our Firm
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="wood-badge rounded-2xl p-6 border border-[#3D291D] space-y-4 text-center flex flex-col items-center">
                  <div className="h-12 w-12 rounded-xl bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center text-[#D4AF37]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">{v.title}</h3>
                  <p className="text-xs text-[#A39382] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-20 bg-[#0E0906]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Evolution of Excellence
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Key Milestones in Our Journey
            </h2>
          </div>

          <div className="relative border-l border-[#3D291D] ml-4 sm:ml-32 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#19100A] border-2 border-[#D4AF37] group-hover:scale-125 transition-transform" />
                <span className="sm:absolute sm:-left-32 sm:top-1 font-serif text-sm font-bold text-[#D4AF37] block mb-1 sm:mb-0">
                  {m.year}
                </span>
                <div className="rounded-xl bg-[#18100A] p-5 border border-[#3D291D] space-y-2">
                  <h4 className="font-serif text-lg font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-[#A39382]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
