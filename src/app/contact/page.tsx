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
      <section className="py-20 bg-[#120B07] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
            Direct Intake
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Contact Counsel Chamber
          </h1>
          <p className="text-sm text-[#A39382] max-w-2xl mx-auto leading-relaxed">
            Connect with our intake partner for high-stakes transaction advisory, court representation, or urgent international arbitration matters.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-[#0E0906]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column (Left) */}
            <div className="lg:col-span-7">
              <div className="wood-badge rounded-2xl p-8 border border-[#523A2A]">
                <h2 className="font-serif text-2xl font-bold text-white mb-1">
                  Confidential Case Briefing
                </h2>
                <p className="text-xs text-[#A39382] mb-6">
                  All communications sent via this form are strictly protected under Attorney-Client Privilege.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="h-16 w-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">Briefing Received</h3>
                    <p className="text-xs text-[#A39382] max-w-md mx-auto">
                      Thank you for contacting Shahier Singh & Associates. A senior intake partner will review your inquiry and contact you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Adv. Vikramaditya"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Corporate Email *</label>
                        <input
                          required
                          type="email"
                          placeholder="v.aditya@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+91 (011) 4050 6070"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Company / Entity</label>
                        <input
                          type="text"
                          placeholder="Apex Holdings Corp"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Preferred Chamber Location</label>
                        <select
                          value={formData.officeLocation}
                          onChange={(e) => setFormData({ ...formData, officeLocation: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                        >
                          <option value="Kozhikode Chambers (Headquarters)">Kozhikode Chambers (Headquarters)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Legal Practice Area</label>
                        <select
                          value={formData.matterType}
                          onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
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
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Overview of Legal Inquiry / Filing *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please state jurisdiction, key timeline, financial scale, and objectives..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#7A6A5C]">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>Attorney-Client Privilege applies immediately to submitted details.</span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full wood-btn-primary py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white"
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
              <h2 className="font-serif text-2xl font-bold text-white">
                Main Chambers Location
              </h2>

              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="wood-badge rounded-xl p-5 border border-[#3D291D] space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                        {office.city}
                      </h3>
                      <a
                        href="https://maps.app.goo.gl/9PYeEWRaZENYdksD9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-[#D4AF37] hover:underline flex items-center gap-1 self-start sm:self-auto"
                      >
                        Open Maps <Globe className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-[#A39382] leading-relaxed flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#7A6A5C] flex-shrink-0 mt-0.5" />
                      {office.address}
                    </p>
                    <div className="pt-2 border-t border-[#291B13] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                      <a href={`tel:${office.phone}`} className="text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold">
                        <Phone className="w-3 h-3" /> {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="text-[#8C7C6D] hover:text-white flex items-center gap-1">
                        <Mail className="w-3 h-3" /> {office.email}
                      </a>
                    </div>
                  </div>
                ))}

                {/* Embedded Map directly inside Right Column */}
                <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border-2 border-[#593E2B] shadow-2xl wood-badge">
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
