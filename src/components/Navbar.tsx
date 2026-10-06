"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Phone, Menu, X, Calendar, ChevronRight } from "lucide-react";
import StrategyCallModal from "./StrategyCallModal";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our People", path: "/people" },
    { name: "Our Alumni", path: "/alumni" },
    { name: "Expertise", path: "/expertise" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Advisory Strip */}
      <div className="hidden md:flex bg-[#140B05] border-b border-[#C59242]/20 text-[#D5C7B5] text-[11px] py-1.5 px-4 sm:px-8 justify-between items-center z-40 relative">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#FFFDF8] font-semibold">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C59242] animate-pulse"></span>
            70+ Years of Legal Excellence • Full-Service Advocates & Trial Chambers
          </span>
          <span className="hidden lg:inline text-[#C59242]/50">|</span>
          <span className="hidden lg:inline text-[#A8988B] font-medium">Kozhikode, Kerala</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:+919847325829" className="flex items-center gap-1.5 text-[#D5C7B5] hover:text-[#C59242] transition-colors font-medium">
            <Phone className="w-3 h-3 text-[#C59242]" />
            <span className="font-semibold">+91 98473 25829</span>
          </a>
          <span className="text-[#C59242]/50">|</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[#C59242] hover:text-[#FFFFFF] font-bold transition-colors flex items-center gap-1"
          >
            Direct Intake →
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#1A0E07]/98 backdrop-blur-xl border-b border-[#C59242]/30 py-2.5 shadow-2xl"
            : "bg-[#140B05]/95 backdrop-blur-md border-b border-[#C59242]/20 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#2D180B] to-[#140B05] border border-[#C59242] flex items-center justify-center shadow-md group-hover:border-[#F5DE9C] group-hover:shadow-[0_0_15px_rgba(197,146,66,0.5)] transition-all">
              <Scale className="w-5 h-5 text-[#C59242] group-hover:rotate-6 transition-transform" />
            </div>
            <div>
              <span className="font-cinzel text-base sm:text-lg font-extrabold tracking-wider text-[#FFFFFF] block leading-tight group-hover:text-[#F3DFA2] transition-colors">
                SHAHIER SINGH
              </span>
              <span className="text-[9px] font-medium tracking-[0.22em] text-[#C59242] uppercase block">
                & ASSOCIATES • LEGAL COUNSEL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all rounded-lg ${
                    isActive
                      ? "text-[#140B05] bg-gradient-to-r from-[#DFB76C] to-[#C59242] border border-[#F5DE9C] shadow-md font-bold"
                      : "text-[#D5C7B5] hover:text-[#FFFFFF] hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#140B05] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Strategy Call Button */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="wood-btn-primary px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 group whitespace-nowrap shadow-lg cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#140B05]" />
              <span>Schedule Call</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#140B05] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#24130A] border border-[#C59242]/40 text-[#D5C7B5] hover:text-[#FFFFFF] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A0E07] border-b border-[#C59242]/30 px-4 pt-3 pb-6 space-y-1.5 mt-3 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? "text-[#140B05] bg-gradient-to-r from-[#DFB76C] to-[#C59242] font-bold"
                      : "text-[#D5C7B5] hover:text-[#FFFFFF] hover:bg-white/10"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#140B05]" />}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#C59242]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full wood-btn-primary py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#140B05]" />
                <span>Schedule Strategy Call</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
