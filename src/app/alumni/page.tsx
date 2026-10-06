import Image from "next/image";

export default function AlumniPage() {
  const alumniSpotlights = [
    {
      name: "Justice Devendra Sharma",
      formerRole: "Partner (2002–2011)",
      currentRole: "High Court Judge (Retd.) & Arbitrator",
      sector: "Judicial Bench",
      quote: "The rigorous legal drafting and analytical discipline instilled during my years at Shahier Singh & Associates laid the foundation for my judicial career.",
    },
    {
      name: "Priya Sundaram",
      formerRole: "Senior Associate (2012–2017)",
      currentRole: "General Counsel, Global Tech Corp",
      sector: "Corporate Leadership",
      quote: "From handling cross-border tech licensing to IP trials, the firm taught us to anticipate business risk long before entering the boardroom.",
    },
    {
      name: "Karan Singhania",
      formerRole: "Partner – Private Equity (2010–2018)",
      currentRole: "Managing Director, Apex Capital Partners",
      sector: "Private Equity",
      quote: "The strategic instincts developed at the firm continue to guide how we negotiate multi-hundred-million-dollar fund acquisitions today.",
    },
    {
      name: "Dr. Evelyn Vance",
      formerRole: "Senior Counsel (2015–2021)",
      currentRole: "Professor of Commercial Law, Oxford University",
      sector: "Academia & Research",
      quote: "Shahier Singh & Associates remains a beacon of legal scholarship and formidable courtroom advocacy across international jurisdictions.",
    },
  ];

  const alumniStats = [
    { number: "180+", label: "Global Alumni Worldwide" },
    { number: "14", label: "Judicial Appointments & Bench Members" },
    { number: "45+", label: "Fortune 500 General Counsels" },
    { number: "25+", label: "Founders & Venture Capital Partners" },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Header */}
      <section className="relative py-20 sepia-hero-bg border-b border-[#8C6A3C]/35 shadow-md overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FAF5EB] px-4 py-1.5 rounded-full bg-[#1C120A] border border-[#8C6A3C]/50 shadow-md inline-block">
            Enduring Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#140E08]">
            Our Alumni Network
          </h1>
          <p className="text-sm sm:text-base text-[#2E2014] font-medium max-w-2xl mx-auto leading-relaxed">
            Our former advocates and partners shape legal jurisprudence, lead multinational legal departments, preside on judicial benches, and direct sovereign investment funds around the globe.
          </p>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-12 bg-white border-b border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniStats.map((stat, index) => (
              <div key={index} className="bg-white border-2 border-[#C59242]/60 hover:border-[#C59242] shadow-sm hover:shadow-md rounded-2xl p-6 text-center transition-all">
                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold gold-text-gradient">{stat.number}</h3>
                <p className="text-xs text-[#4A3B32] mt-1 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Spotlights */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8E5F2A] px-4 py-1.5 rounded-full bg-white border border-[#C59242]/50 shadow-sm shimmer-active">
              Voices of Distinction
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
              Alumni Hall of Distinction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumniSpotlights.map((alumnus, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 space-y-5 relative flex flex-col justify-between border-2 border-[#C59242]/60 hover:border-[#C59242] shadow-[0_4px_16px_rgba(42,22,12,0.06)] hover:shadow-[0_16px_36px_rgba(197,146,66,0.20)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="space-y-3.5">
                  <span className="inline-block text-[11px] font-semibold text-[#8E5F2A] uppercase tracking-wider px-3 py-1 rounded bg-[#FAF6F0] border border-[#C59242]/30">
                    {alumnus.sector}
                  </span>
                  <p className="text-xs sm:text-sm italic text-[#4A3B32] leading-relaxed font-serif">
                    &ldquo;{alumnus.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFD0]">
                  <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">{alumnus.name}</h4>
                  <p className="text-xs text-[#8E5F2A] font-semibold">{alumnus.currentRole}</p>
                  <p className="text-[11px] text-[#5C4D44]">{alumnus.formerRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
