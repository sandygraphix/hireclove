import type { Metadata } from "next";
import { DM_Serif_Display, Inter, DM_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "HireClove Services LLP | Workforce Solutions & Talent Consulting",
  description: "Transforming Workforce Challenges into Business Opportunities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // ADDED: suppressHydrationWarning to both html and body
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative flex flex-col">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}