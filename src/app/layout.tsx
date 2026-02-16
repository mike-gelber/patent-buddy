import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patent Buddy — Discover If Your Idea Is Patentable",
  description:
    "Patent Buddy helps inventors and entrepreneurs assess whether their idea is patentable. Get a free patentability assessment and understand next steps.",
  keywords: [
    "patent",
    "patentability",
    "invention",
    "intellectual property",
    "patent search",
    "patent assessment",
  ],
  openGraph: {
    title: "Patent Buddy — Discover If Your Idea Is Patentable",
    description:
      "Get a free patentability assessment for your invention. Understand patent criteria, search prior art, and learn next steps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
