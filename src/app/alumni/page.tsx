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
      <section className="py-20 bg-[#0B1426]/60 backdrop-blur-md border-b border-[#DFB76C]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DFB76C] px-4 py-1.5 rounded-full bg-[#0D1B36]/80 border border-[#DFB76C]/50 shadow-md shimmer-active">
            Enduring Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Our Alumni Network
          </h1>
          <p className="text-sm text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            Our former advocates and partners shape legal jurisprudence, lead multinational legal departments, preside on judicial benches, and direct sovereign investment funds around the globe.
          </p>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-12 bg-transparent border-b border-[#DFB76C]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniStats.map((stat, index) => (
              <div key={index} className="luxury-card rounded-2xl p-6 text-center">
                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold gold-text-gradient">{stat.number}</h3>
                <p className="text-xs text-[#CBD5E1] mt-1 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Spotlights */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DFB76C] px-4 py-1.5 rounded-full bg-[#0D1B36]/80 border border-[#DFB76C]/50 shadow-md shimmer-active">
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
                className="luxury-card rounded-2xl p-8 space-y-5 relative flex flex-col justify-between border-t-2 border-t-[#DFB76C]/60 hover:border-t-[#F7E7A9]"
              >
                <div className="space-y-3.5">
                  <span className="inline-block text-[11px] font-semibold text-[#DFB76C] uppercase tracking-wider px-3 py-1 rounded bg-[#0D1B36] border border-[#DFB76C]/40">
                    {alumnus.sector}
                  </span>
                  <p className="text-xs sm:text-sm italic text-[#CBD5E1] leading-relaxed font-serif">
                    "{alumnus.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DFB76C]/20">
                  <h4 className="font-serif text-lg font-bold text-white">{alumnus.name}</h4>
                  <p className="text-xs text-[#DFB76C] font-semibold">{alumnus.currentRole}</p>
                  <p className="text-[11px] text-[#94A3B8]">{alumnus.formerRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
