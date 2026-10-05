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
      <div className="hidden md:flex bg-[#050811]/95 backdrop-blur-md border-b border-[#DFB76C]/20 text-[#CBD5E1] text-[11px] py-1.5 px-4 sm:px-8 justify-between items-center z-40 relative">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#F8FAFC] font-semibold">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#DFB76C] animate-pulse"></span>
            70+ Years of Legal Excellence • Full-Service Advocates & Trial Chambers
          </span>
          <span className="hidden lg:inline text-[#DFB76C]/50">|</span>
          <span className="hidden lg:inline text-[#94A3B8] font-medium">Kozhikode, Kerala</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:+919847325829" className="flex items-center gap-1.5 text-[#CBD5E1] hover:text-[#DFB76C] transition-colors font-medium">
            <Phone className="w-3 h-3 text-[#DFB76C]" />
            <span className="font-semibold">+91 98473 25829</span>
          </a>
          <span className="text-[#DFB76C]/50">|</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[#DFB76C] hover:text-[#FFFFFF] font-bold transition-colors flex items-center gap-1"
          >
            Direct Intake →
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#081022]/95 backdrop-blur-xl border-b border-[#DFB76C]/30 py-2.5 shadow-2xl"
            : "bg-[#060B18]/90 backdrop-blur-md border-b border-[#DFB76C]/20 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0B1528] to-[#050811] border border-[#DFB76C] flex items-center justify-center shadow-md group-hover:border-[#F5DE9C] group-hover:shadow-[0_0_15px_rgba(223,183,108,0.5)] transition-all">
              <Scale className="w-5 h-5 text-[#DFB76C] group-hover:rotate-6 transition-transform" />
            </div>
            <div>
              <span className="font-cinzel text-base sm:text-lg font-extrabold tracking-wider text-[#FFFFFF] block leading-tight group-hover:text-[#DFB76C] transition-colors">
                SHAHIER SINGH
              </span>
              <span className="text-[9px] font-medium tracking-[0.22em] text-[#DFB76C] uppercase block">
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
                      ? "text-[#050811] bg-gradient-to-r from-[#DFB76C] to-[#C99A45] border border-[#F5DE9C] shadow-md font-bold"
                      : "text-[#CBD5E1] hover:text-[#FFFFFF] hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#050811] rounded-full" />
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
              <Calendar className="w-3.5 h-3.5 text-[#050811]" />
              <span>Schedule Call</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#050811] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0B1528] border border-[#DFB76C]/40 text-[#CBD5E1] hover:text-[#FFFFFF] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1224] border-b border-[#DFB76C]/30 px-4 pt-3 pb-6 space-y-1.5 mt-3 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? "text-[#050811] bg-gradient-to-r from-[#DFB76C] to-[#C99A45] font-bold"
                      : "text-[#CBD5E1] hover:text-[#FFFFFF] hover:bg-white/10"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#050811]" />}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#DFB76C]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full wood-btn-primary py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#050811]" />
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
