import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahier Singh & Associates | Corporate Legal Counsel & Advocates",
  description: "A legacy of trusted legal counsel to build and protect your business. Premier M&A, high-stakes litigation, IP, tax and corporate legal advisory firm.",
  keywords: ["Shahier Singh & Associates", "Law Firm", "Corporate Legal Counsel", "Litigation Advocates", "M&A Law Firm", "Delhi Law Firm", "Mumbai Law Firm"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0D0805] text-[#F5EBE1] min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
