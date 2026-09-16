"use client";

import { useState } from "react";
import { Briefcase, Award, GraduationCap, CheckCircle2, User, Mail, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Senior Trial Counsel – High-Stakes Disputes");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    bar: "",
    notes: ""
  });

  const openPositions = [
    {
      title: "Senior Trial Counsel – High-Stakes Disputes",
      experience: "5–8 Years PQE",
      location: "Kozhikode Chambers",
      type: "Full-Time",
      description: "Leading trial defense, drafting court pleadings, and appearing before High Courts and tribunals for complex litigation matters.",
    },
    {
      title: "Associate – Civil & Criminal Litigation",
      experience: "3–5 Years PQE",
      location: "Kozhikode Chambers / Appellate Desk",
      type: "Full-Time",
      description: "Appearing before High Courts and Trial Courts in property, criminal, and civil writ suits, managing case research and evidence.",
    },
    {
      title: "Junior Advocate – Trial Advocacy & Pleadings",
      experience: "1–3 Years PQE",
      location: "Kozhikode Chambers",
      type: "Full-Time",
      description: "Drafting writ petitions, civil pleadings, conducting precedent research, and assisting senior counsel during court proceedings.",
    },
    {
      title: "Judicial Internship & Trainee Program 2026",
      experience: "Law Students (4th/5th Year)",
      location: "Kozhikode Chambers",
      type: "Seasonal / Trainee",
      description: "4-to-8 week immersive rotation across Courtroom Litigation, Trial Advocacy, and Legal Retainers with stipendiary compensation.",
    },
  ];

  const handleApplyClick = (title: string) => {
    setSelectedRole(title);
    setApplied(false);
    setResumeFile(null);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);

    const resumeDetails = resumeFile
      ? `*Attached Resume:* ${resumeFile.name} (${(resumeFile.size / 1024 / 1024).toFixed(2)} MB)`
      : "*Attached Resume:* Not uploaded";

    const messageText = `*Shahier Singh & Associates - Career Application*
----------------------------------------
*Position:* ${selectedRole}
*Full Name:* ${careerForm.name}
*Email:* ${careerForm.email}
*Phone:* ${careerForm.phone || "Not provided"}
*Bar/Law School:* ${careerForm.bar || "N/A"}
${resumeDetails}

*Cover Note:*
${careerForm.notes || "Career application submitted via portal"}`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919847325829?text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setApplied(false);
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="py-20 bg-[#120B07] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full bg-[#1F140D] border border-[#472E1E]">
            Join Our Firm
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Careers & Judicial Fellowships
          </h1>
          <p className="text-sm text-[#A39382] max-w-2xl mx-auto leading-relaxed">
            Shape the future of jurisprudence with a distinguished team of legal scholars, senior trial advocates, and corporate negotiators.
          </p>
        </div>
      </section>

      {/* Firm Culture */}
      <section className="py-16 bg-[#0E0906] border-b border-[#291B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="wood-badge rounded-2xl p-6 border border-[#3D291D] space-y-3 text-center flex flex-col items-center">
              <div className="h-10 w-10 rounded-xl bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center text-[#D4AF37]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Direct Mentorship</h3>
              <p className="text-xs text-[#A39382]">
                Work side-by-side with Senior Advocates on landmark Supreme Court trials and multi-billion-dollar corporate transactions.
              </p>
            </div>

            <div className="wood-badge rounded-2xl p-6 border border-[#3D291D] space-y-3 text-center flex flex-col items-center">
              <div className="h-10 w-10 rounded-xl bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center text-[#D4AF37]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Meritocratic Progression</h3>
              <p className="text-xs text-[#A39382]">
                Accelerated equity partner track based strictly on analytical mastery, client satisfaction, and advocacy performance.
              </p>
            </div>

            <div className="wood-badge rounded-2xl p-6 border border-[#3D291D] space-y-3 text-center flex flex-col items-center">
              <div className="h-10 w-10 rounded-xl bg-[#2A1C12] border border-[#593E2B] flex items-center justify-center text-[#D4AF37]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Global Practice</h3>
              <p className="text-xs text-[#A39382]">
                Participate in cross-border arbitration hearings in London & Singapore and multi-jurisdictional M&A transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-20 bg-[#0E0906]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Current Opportunities
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Open Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {openPositions.map((job, idx) => (
              <div
                key={idx}
                className="wood-badge rounded-2xl p-6 sm:p-8 border border-[#3D291D] flex flex-col md:flex-row items-center md:items-center justify-between gap-6 hover:border-[#D4AF37] transition-all text-center md:text-left"
              >
                <div className="space-y-2 max-w-2xl flex flex-col items-center md:items-start">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#27190F] border border-[#523A2A]">
                      {job.experience}
                    </span>
                    <span className="text-xs text-[#7A6A5C]">{job.location} • {job.type}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-xs text-[#A39382] leading-relaxed">{job.description}</p>
                </div>

                <div className="w-full md:w-auto flex justify-center md:justify-end">
                  <button
                    onClick={() => handleApplyClick(job.title)}
                    className="wood-btn-primary px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider inline-block text-center whitespace-nowrap cursor-pointer"
                  >
                    Apply For Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#523A2A] bg-[#160E09] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-[#26170E] p-2 text-[#A39382] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2 mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Submit Career Application</h3>
                <p className="text-xs text-[#A39382]">
                  Applying for: <span className="text-[#D4AF37] font-semibold">{selectedRole}</span>
                </p>
              </div>

              {applied ? (
                <div className="p-8 rounded-xl bg-[#20150F] border border-[#D4AF37] text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-white">Application Received</h4>
                  <p className="text-xs text-[#A39382] max-w-md mx-auto leading-relaxed">
                    Our Talent & Recruitment Committee will review your curriculum vitae and reach out if your profile matches our requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Adv. Rajesh Verma"
                        value={careerForm.name}
                        onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                        className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="verma@lawfirm.com"
                        value={careerForm.email}
                        onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                        className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98473 25829"
                        value={careerForm.phone}
                        onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })}
                        className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Bar Admission / Law School</label>
                      <input
                        type="text"
                        placeholder="Bar Council of Kerala (K/1024/2018)"
                        value={careerForm.bar}
                        onChange={(e) => setCareerForm({ ...careerForm, bar: e.target.value })}
                        className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Target Designation / Role Applied For *</label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="Senior Trial Counsel – High-Stakes Disputes">Senior Trial Counsel – High-Stakes Disputes</option>
                      <option value="Associate – Civil & Criminal Litigation">Associate – Civil & Criminal Litigation</option>
                      <option value="Junior Advocate – Trial Advocacy & Pleadings">Junior Advocate – Trial Advocacy & Pleadings</option>
                      <option value="Judicial Internship & Trainee Program 2026">Judicial Internship & Trainee Program 2026</option>
                      <option value="General Legal Retainer Counsel">General Legal Retainer Counsel</option>
                      <option value="Other Specialized Advocate Role">Other Specialized Advocate Role</option>
                    </select>
                  </div>

                  {/* Resume Upload Field */}
                  <div>
                    <label className="block text-xs font-medium text-[#C8B8A6] mb-1">
                      Upload Resume / Curriculum Vitae (PDF or DOCX)
                    </label>
                    <div className="relative border border-dashed border-[#593E2B] hover:border-[#D4AF37] rounded-xl bg-[#0F0A06] p-3.5 text-center cursor-pointer transition-colors group">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setResumeFile(e.target.files[0]);
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center justify-center gap-2.5">
                        <span className="text-[#D4AF37]">📄</span>
                        {resumeFile ? (
                          <span className="text-xs font-semibold text-[#D4AF37]">
                            ✓ {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        ) : (
                          <span className="text-xs text-[#A39382]">
                            Click or drag your CV file here <span className="text-[#5C4D40]">(PDF, DOC, DOCX up to 10MB)</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C8B8A6] mb-1">Cover Note & Key Mandates Handled</label>
                    <textarea
                      rows={3}
                      placeholder="Highlight your notable litigation drafting experience, corporate deal volume, or academic honors..."
                      value={careerForm.notes}
                      onChange={(e) => setCareerForm({ ...careerForm, notes: e.target.value })}
                      className="w-full rounded-lg border border-[#3D291D] bg-[#0F0A06] p-3 text-xs text-white placeholder-[#5C4D40] focus:border-[#D4AF37] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full wood-btn-primary py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                      <span>Submit Confidential Application</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
