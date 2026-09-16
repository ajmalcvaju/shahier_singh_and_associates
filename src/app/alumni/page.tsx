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
      <section className="py-20 bg-[#120B07] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
            Enduring Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Our Alumni Network
          </h1>
          <p className="text-sm text-[#A39382] max-w-2xl mx-auto leading-relaxed">
            Our former advocates and partners shape legal jurisprudence, lead multinational legal departments, preside on judicial benches, and direct sovereign investment funds around the globe.
          </p>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-12 bg-[#0E0906] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniStats.map((stat, index) => (
              <div key={index} className="wood-badge rounded-xl p-6 text-center border border-[#3D291D]">
                <h3 className="font-serif text-3xl font-extrabold text-[#D4AF37]">{stat.number}</h3>
                <p className="text-xs text-[#A39382] mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Spotlights */}
      <section className="py-20 bg-[#0E0906]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Voices of Distinction
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Alumni Hall of Distinction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumniSpotlights.map((alumnus, idx) => (
              <div
                key={idx}
                className="wood-badge rounded-2xl p-8 border border-[#3D291D] space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#27190F] border border-[#523A2A]">
                    {alumnus.sector}
                  </span>
                  <p className="text-xs italic text-[#E2D5C7] leading-relaxed">
                    "{alumnus.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#291B13]">
                  <h4 className="font-serif text-lg font-bold text-white">{alumnus.name}</h4>
                  <p className="text-xs text-[#D4AF37] font-medium">{alumnus.currentRole}</p>
                  <p className="text-[11px] text-[#7A6A5C]">{alumnus.formerRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
