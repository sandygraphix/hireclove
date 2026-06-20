import type { Metadata } from "next";
import { DM_Serif_Display, Inter, DM_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" });

// 1. ENTERPRISE METADATA CONFIGURATION
export const metadata: Metadata = {
  metadataBase: new URL("https://hireclove.com"),
  title: {
    default: "HireClove Services LLP | Workforce Solutions & Talent Consulting",
    template: "%s | HireClove",
  },
  description: "Transforming workforce challenges into business opportunities. HireClove provides premium executive search, permanent staffing, and RPO services in India.",
  keywords: ["Workforce Solutions", "Talent Consulting", "Executive Search", "Permanent Staffing", "RPO Services", "Recruitment Agency India", "HireClove"],
  authors: [{ name: "HireClove Services LLP" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hireclove.com",
    title: "HireClove Services LLP | Workforce Solutions",
    description: "Transforming workforce challenges into business opportunities. Premium executive search and staffing solutions.",
    siteName: "HireClove",
    images: [
      {
        url: "/og-image.jpg", // We need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "HireClove Services LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HireClove Services LLP",
    description: "Transforming workforce challenges into business opportunities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // 2. GOOGLE RICH SNIPPETS (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HireClove Services LLP",
    url: "https://hireclove.com",
    logo: "https://hireclove.com/logo.png", // Add your logo to the public folder
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-920-532-4877",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hauz Khas",
      addressRegion: "New Delhi",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Injecting JSON-LD into the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative flex flex-col">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
