import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Shahier Singh & Associates | Advocates & Lawyers in Kozhikode, Kerala",
    template: "%s | Shahier Singh & Associates - Lawyers in Kozhikode",
  },
  description: "Leading Advocates & Legal Counsel in Kozhikode (Calicut), Kerala with 70+ years of judicial lineage. Expert representation in High Court practice, criminal trials, civil litigation, corporate law, and RERA disputes.",
  keywords: [
    "Advocates in Kozhikode",
    "Lawyers in Kozhikode",
    "Lawyers in Calicut",
    "Best Advocates in Kerala",
    "Shahier Singh & Associates",
    "High Court Advocates Kerala",
    "Criminal Defense Lawyers Kozhikode",
    "Civil Litigation Advocates Calicut",
    "Corporate Legal Counsel Kerala",
    "RERA Lawyers Kozhikode"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
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
