"use client";

import Link from "next/link";
import { Scale, Mail, Phone, MapPin, Globe, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0604] border-t border-[#291B13] text-[#A39382] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#20150F]">
          
          {/* Column 1: Brand & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#4A3324] to-[#1E130B] border border-[#6E4D38] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider text-white block leading-tight">
                  SHAHIER SINGH
                </span>
                <span className="text-[10px] font-medium tracking-[0.25em] text-[#A39382] uppercase block">
                  & ASSOCIATES
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#8C7C6D] leading-relaxed max-w-md">
              A premier corporate and litigation counsel advising multinational corporations, sovereign funds, high-growth tech founders, and private equity sponsors across high-stakes domestic and cross-border transactions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F140D] border border-[#422C1E] text-[11px] text-[#D4AF37]">
                <Shield className="w-3 h-3" /> State Bar Council Approved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F140D] border border-[#422C1E] text-[11px] text-[#D4AF37]">
                <Globe className="w-3 h-3" /> 70+ Years Legacy
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:text-[#D4AF37] transition-colors">
                  Our People
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-[#D4AF37] transition-colors">
                  Our Alumni
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-[#D4AF37] transition-colors">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#D4AF37] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 10 Practice Verticals */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-1.5 text-[11px] text-[#8C7C6D]">
              <li>Dispute Resolution & Litigation</li>
              <li>Corporate & Commercial Services</li>
              <li>Business Setup And Advisory</li>
              <li>Legal Retainer & On-Call Support</li>
              <li>Intellectual Property (IP)</li>
              <li>Real Estate & Infrastructure</li>
              <li>Corporate Advisory & Support</li>
              <li>Family & Matrimonial Law</li>
              <li>Criminal Litigation</li>
              <li>Civil Litigation</li>
            </ul>
          </div>

          {/* Column 4: Main Chambers & Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Main Chambers
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <p className="font-medium text-white flex items-start gap-1.5 leading-snug">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>Singhs, Wayanad Rd, West Nadakkave, East Nadakkave, Bilathikkulam, Kozhikode, Kerala 673011</span>
                </p>
              </div>
              <div>
                <p className="font-medium text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href="tel:+919847325829" className="hover:text-[#D4AF37] transition-colors">+91 98473 25829</a>
                </p>
              </div>
              <div>
                <p className="font-medium text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href="mailto:contact@shahiersingh.com" className="hover:text-[#D4AF37] transition-colors">contact@shahiersingh.com</a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#6E5F52]">
          <p>© {new Date().getFullYear()} Shahier Singh & Associates. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right">
            As per Bar Council rules, this website is intended solely for informational purposes and does not constitute legal solicitation or binding attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
