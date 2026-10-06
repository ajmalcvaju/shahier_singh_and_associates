"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Building, Globe } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    officeLocation: "Kozhikode Chambers (Headquarters)",
    matterType: "High-Stakes Litigation",
    message: "",
  });

  const offices = [
    {
      city: "Kozhikode Chambers (Headquarters)",
      address: "Singhs, Wayanad Rd, West Nadakkave, East Nadakkave, Bilathikkulam, Kozhikode, Kerala 673011",
      phone: "+91 98473 25829",
      email: "contact@shahiersingh.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `*Shahier Singh & Associates - Legal Case Briefing*
----------------------------------------
*Full Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Company/Entity:* ${formData.organization || "N/A"}
*Practice Area:* ${formData.matterType}
*Preferred Location:* ${formData.officeLocation}

*Legal Matter Overview:*
${formData.message}`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919847325829?text=${encodedMsg}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="relative py-20 sepia-hero-bg border-b-2 border-[#C59242]/40 shadow-lg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFFDF8] px-4.5 py-1.5 rounded-full bg-[#0B192C] border border-[#C59242] shadow-md shimmer-active inline-block">
            <span className="bg-gradient-to-r from-[#FFFDF8] via-[#F5DE9C] to-[#FFFDF8] bg-clip-text text-transparent">
              Direct Intake
            </span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Contact Counsel Chamber
          </h1>
          <p className="text-sm sm:text-base text-[#1E3A5F] font-medium max-w-2xl mx-auto leading-relaxed">
            Connect with our intake partner for high-stakes transaction advisory, court representation, or urgent international arbitration matters.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column (Left) */}
            <div className="lg:col-span-7">
              <div className="luxury-card bg-white rounded-2xl p-8 sm:p-10 border-2 border-[#C59242]/60 shadow-xl">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-1">
                  Confidential Case Briefing
                </h2>
                <p className="text-xs text-[#4A3B32] mb-6">
                  All communications sent via this form are strictly protected under Attorney-Client Privilege.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="h-16 w-16 bg-[#FAF6F0] border border-[#C59242] rounded-full flex items-center justify-center text-[#C59242] mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Briefing Received</h3>
                    <p className="text-xs text-[#4A3B32] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Shahier Singh & Associates. A senior intake partner will review your inquiry and contact you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Adv. Vikramaditya"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-[#D5C7B5] bg-[#FAF8F5] p-3 text-xs text-[#1A1A1A] placeholder-[#8C7E75] focus:border-[#C59242] focus:bg-white focus:ring-1 focus:ring-[#C59242] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Corporate Email *</label>
                        <input
                          required
                          type="email"
                          placeholder="v.aditya@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-[#D5C7B5] bg-[#FAF8F5] p-3 text-xs text-[#1A1A1A] placeholder-[#8C7E75] focus:border-[#C59242] focus:bg-white focus:ring-1 focus:ring-[#C59242] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+91 (011) 4050 6070"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-[#D5C7B5] bg-[#FAF8F5] p-3 text-xs text-[#1A1A1A] placeholder-[#8C7E75] focus:border-[#C59242] focus:bg-white focus:ring-1 focus:ring-[#C59242] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Company / Entity</label>
                        <input
                          type="text"
                          placeholder="Apex Holdings Corp"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full rounded-lg border border-[#D5C7B5] bg-[#FAF8F5] p-3 text-xs text-[#1A1A1A] placeholder-[#8C7E75] focus:border-[#C59242] focus:bg-white focus:ring-1 focus:ring-[#C59242] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Preferred Chamber Location</label>
                        <select
                          value={formData.officeLocation}
                          onChange={(e) => setFormData({ ...formData, officeLocation: e.target.value })}
                          className="w-full rounded-lg border border-[#D5C7B5] bg-[#FAF8F5] p-3 text-xs text-[#1A1A1A] focus:border-[#C59242] focus:bg-white focus:ring-1 focus:ring-[#C59242] focus:outline-none"
                        >
                          <option value="Kozhikode Chambers (Headquarters)">Kozhikode Chambers (Headquarters)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Legal Practice Area</label>
                        <select
                          value={formData.matterType}
                          onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                          className="w-full rounded-lg border border-[#D5C7B5] bg-[#FAF8F5] p-3 text-xs text-[#1A1A1A] focus:border-[#C59242] focus:bg-white focus:ring-1 focus:ring-[#C59242] focus:outline-none"
                        >
                          <option value="Corporate & M&A">Corporate & M&A</option>
                          <option value="High-Stakes Litigation">High-Stakes Litigation</option>
                          <option value="Intellectual Property">Intellectual Property</option>
                          <option value="Taxation & Restructuring">Taxation & Restructuring</option>
                          <option value="International Arbitration">International Arbitration</option>
                          <option value="Private Equity & VC">Private Equity & VC</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Overview of Legal Inquiry / Filing *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please state jurisdiction, key timeline, financial scale, and objectives..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-[#D5C7B5] bg-[#FAF8F5] p-3 text-xs text-[#1A1A1A] placeholder-[#8C7E75] focus:border-[#C59242] focus:bg-white focus:ring-1 focus:ring-[#C59242] focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#5C4D44]">
                      <ShieldCheck className="w-4 h-4 text-[#C59242]" />
                      <span>Attorney-Client Privilege applies immediately to submitted details.</span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full wood-btn-primary py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xl cursor-pointer"
                      >
                        Transmit Confidential Briefing
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Chambers & Location Map Column (Right) */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Main Chambers Location
              </h2>

              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="luxury-card bg-white rounded-2xl p-6 space-y-3.5 border-2 border-[#C59242]/60 hover:border-[#C59242] shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="font-serif text-base font-bold text-[#1A1A1A] flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#C59242] flex-shrink-0" />
                        {office.city}
                      </h3>
                      <a
                        href="https://maps.app.goo.gl/9PYeEWRaZENYdksD9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#8E5F2A] hover:underline flex items-center gap-1 self-start sm:self-auto uppercase tracking-wider"
                      >
                        Open Maps <Globe className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-[#4A3B32] leading-relaxed flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C59242] flex-shrink-0 mt-0.5" />
                      {office.address}
                    </p>
                    <div className="pt-2 border-t border-[#E8DFD0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                      <a href={`tel:${office.phone}`} className="text-[#8E5F2A] hover:underline flex items-center gap-1 font-semibold">
                        <Phone className="w-3 h-3" /> {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="text-[#4A3B32] hover:text-[#8E5F2A] flex items-center gap-1">
                        <Mail className="w-3 h-3" /> {office.email}
                      </a>
                    </div>
                  </div>
                ))}

                {/* Embedded Map directly inside Right Column */}
                <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden archival-frame shadow-xl bg-[#FAF8F5] border-2 border-[#C59242]/40">
                  <iframe
                    title="Shahier Singh & Associates - Kozhikode Chambers Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3912.8831920036764!2d75.77318888885497!3d11.269995999999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65ecca7ae7583%3A0x23ce3ad41bc28560!2sShahier%20Singh%20%26%20Associates!5e0!3m2!1sen!2sus!4v1789369443052!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
