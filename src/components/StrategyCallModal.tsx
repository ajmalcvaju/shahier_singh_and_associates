"use client";

import { useState } from "react";
import { X, User, Mail, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function StrategyCallModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "Dispute Resolution & Litigation",
    preferredDate: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `*Shahier Singh & Associates - Strategy Session Request*
----------------------------------------
*Full Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Practice Area:* ${formData.practice}

*Overview / Notes:*
${formData.notes || "Strategy Session Consultation"}`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919847325829?text=${encodedMsg}`;
    window.location.href = whatsappUrl;

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-[#4D3525] bg-[#160E09] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-[#26170E] p-2 text-[#A39382] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-serif text-white font-bold mb-2">Strategy Session Confirmed</h3>
                <p className="text-[#A39382] max-w-md mx-auto">
                  Thank you for reaching out to Shahier Singh & Associates. Our senior partner intake team will review your matter and contact you within 2 business hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/30 rounded-full bg-[#20150F]">
                    Confidential Consultation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-2">
                    Schedule a Strategy Call
                  </h2>
                  <p className="text-sm text-[#A39382]">
                    Connect directly with senior legal counsel to discuss high-stakes transactions, litigation, or regulatory strategy.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-[#7A6A5C]" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Alexander Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Corporate Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-[#7A6A5C]" />
                        <input
                          required
                          type="email"
                          placeholder="vance@corporation.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-[#7A6A5C]" />
                        <input
                          type="tel"
                          placeholder="+91 98473 25829"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Practice Area of Interest</label>
                      <select
                        value={formData.practice}
                        onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                        className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] py-2.5 px-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                      >
                        <option value="Dispute Resolution & Litigation">Dispute Resolution & Litigation</option>
                        <option value="Corporate & Commercial Services">Corporate & Commercial Services</option>
                        <option value="Business Setup And Advisory">Business Setup And Advisory</option>
                        <option value="Legal Retainer & On-Call Support">Legal Retainer & On-Call Support</option>
                        <option value="Intellectual Property (IP)">Intellectual Property (IP)</option>
                        <option value="Real Estate & Infrastructure">Real Estate & Infrastructure</option>
                        <option value="Corporate Advisory & Regulatory Support">Corporate Advisory & Regulatory Support</option>
                        <option value="Family & Matrimonial Law">Family & Matrimonial Law</option>
                        <option value="Criminal Litigation">Criminal Litigation</option>
                        <option value="Civil Litigation">Civil Litigation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Brief Overview of Legal Matter</label>
                    <textarea
                      rows={3}
                      placeholder="Outline transaction size, jurisdiction, key objectives or court filing details..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-sm text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#7A6A5C] pt-1">
                    <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                    <span>All communications protected by Attorney-Client Privilege.</span>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full wood-btn-primary py-3.5 px-6 rounded-lg text-sm font-semibold uppercase tracking-wider text-white shadow-lg"
                    >
                      Request Confidential Strategy Session
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
