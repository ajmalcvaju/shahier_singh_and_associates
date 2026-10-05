"use client";

import Link from "next/link";
import { Scale, Mail, Phone, MapPin, Globe, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03060C]/95 backdrop-blur-md border-t-2 border-t-[#DFB76C]/50 border-b border-[#0B1528] text-[#CBD5E1] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#DFB76C]/20">
          
          {/* Column 1: Brand & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#0E1F42] to-[#081124] border border-[#DFB76C] flex items-center justify-center shadow-md group-hover:border-[#F7E7A9] transition-colors">
                <Scale className="w-5 h-5 text-[#DFB76C]" />
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider text-white block leading-tight">
                  SHAHIER SINGH
                </span>
                <span className="text-[10px] font-medium tracking-[0.25em] text-[#DFB76C] uppercase block">
                  & ASSOCIATES
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-md">
              A premier corporate and litigation counsel advising multinational corporations, sovereign funds, high-growth tech founders, and private equity sponsors across high-stakes domestic and cross-border transactions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1428] border border-[#DFB76C]/40 text-[11px] text-[#DFB76C] font-medium shadow-sm">
                <Shield className="w-3 h-3 text-[#DFB76C]" /> State Bar Council Approved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1428] border border-[#DFB76C]/40 text-[11px] text-[#DFB76C] font-medium shadow-sm">
                <Globe className="w-3 h-3 text-[#DFB76C]" /> 70+ Years Legacy
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#DFB76C] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              <li>
                <Link href="/" className="hover:text-[#F7E7A9] hover:translate-x-1 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F7E7A9] hover:translate-x-1 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:text-[#F7E7A9] hover:translate-x-1 transition-all inline-block">
                  Our People
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-[#F7E7A9] hover:translate-x-1 transition-all inline-block">
                  Our Alumni
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-[#F7E7A9] hover:translate-x-1 transition-all inline-block">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#F7E7A9] hover:translate-x-1 transition-all inline-block">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F7E7A9] hover:translate-x-1 transition-all inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 10 Practice Verticals */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#DFB76C] mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-[11px] text-[#94A3B8]">
              <li className="hover:text-[#DFB76C] transition-colors">Dispute Resolution & Litigation</li>
              <li className="hover:text-[#DFB76C] transition-colors">Corporate & Commercial Services</li>
              <li className="hover:text-[#DFB76C] transition-colors">Business Setup And Advisory</li>
              <li className="hover:text-[#DFB76C] transition-colors">Legal Retainer & On-Call Support</li>
              <li className="hover:text-[#DFB76C] transition-colors">Intellectual Property (IP)</li>
              <li className="hover:text-[#DFB76C] transition-colors">Real Estate & Infrastructure</li>
              <li className="hover:text-[#DFB76C] transition-colors">Corporate Advisory & Support</li>
              <li className="hover:text-[#DFB76C] transition-colors">Family & Matrimonial Law</li>
              <li className="hover:text-[#DFB76C] transition-colors">Criminal Litigation</li>
              <li className="hover:text-[#DFB76C] transition-colors">Civil Litigation</li>
            </ul>
          </div>

          {/* Column 4: Main Chambers & Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#DFB76C] mb-4">
              Main Chambers
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <p className="font-medium text-[#CBD5E1] flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-[#DFB76C] flex-shrink-0 mt-0.5" />
                  <span>Singhs, Wayanad Rd, West Nadakkave, East Nadakkave, Bilathikkulam, Kozhikode, Kerala 673011</span>
                </p>
              </div>
              <div>
                <p className="font-medium text-[#CBD5E1] flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#DFB76C]" />
                  <a href="tel:+919847325829" className="hover:text-[#DFB76C] transition-colors">+91 98473 25829</a>
                </p>
              </div>
              <div>
                <p className="font-medium text-[#CBD5E1] flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#DFB76C]" />
                  <a href="mailto:contact@shahiersingh.com" className="hover:text-[#DFB76C] transition-colors">contact@shahiersingh.com</a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <p>© {new Date().getFullYear()} Shahier Singh & Associates. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right">
            As per Bar Council rules, this website is intended solely for informational purposes and does not constitute legal solicitation or binding attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
