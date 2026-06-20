"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  { 
    id: "tech", name: "Technology & Digital", 
    desc: "From early-stage SaaS startups to large-scale digital transformation programs, we source the technical talent that powers India's digital economy.", 
    icon: "💻", 
    chips: [
      { icon: "💻", text: "Information Technology" }, { icon: "🧑‍💻", text: "Software Development" }, 
      { icon: "🤖", text: "Artificial Intelligence" }, { icon: "📊", text: "Data Analytics & ML" }, 
      { icon: "🛡", text: "Cybersecurity" }, { icon: "☁", text: "Cloud Computing" }, 
      { icon: "🌐", text: "SaaS Platforms" }, { icon: "🔄", text: "Digital Transformation" }, 
      { icon: "📱", text: "IT Services & BPO" }
    ] 
  },
  { 
    id: "eng", name: "Engineering & Industrial", 
    desc: "Deep domain expertise across core manufacturing, heavy industry, and the emerging smart-factory landscape across India.", 
    icon: "⚙", 
    chips: [
      { icon: "🏭", text: "Manufacturing" }, { icon: "⚙", text: "Heavy Engineering" }, 
      { icon: "🦾", text: "Industrial Automation" }, { icon: "🔬", text: "Process Industries" }, 
      { icon: "🖥", text: "Smart Manufacturing" }, { icon: "🏗", text: "Industrial Equipment" }
    ] 
  },
  { 
    id: "const", name: "Construction & Infrastructure", 
    desc: "Specialists in EPC, real estate, smart city, and large-scale infrastructure project staffing across the full project lifecycle.", 
    icon: "🏗", 
    chips: [
      { icon: "🏗", text: "EPC Projects" }, { icon: "🛣", text: "Infrastructure Development" }, 
      { icon: "🌆", text: "Smart Cities" }, { icon: "🏢", text: "Commercial Construction" }, 
      { icon: "🏘", text: "Residential Construction" }, { icon: "📋", text: "Project Management" }, 
      { icon: "🏠", text: "Real Estate" }
    ] 
  },
  { 
    id: "auto", name: "Automotive & Mobility", 
    desc: "From traditional OEMs to the fast-emerging EV and mobility technology ecosystem — a sector where talent is the defining variable.", 
    icon: "🚙", 
    chips: [
      { icon: "🚙", text: "Automotive OEMs" }, { icon: "🔩", text: "Auto Components" }, 
      { icon: "⚡", text: "Electric Vehicles" }, { icon: "🛵", text: "Mobility Solutions" }, 
      { icon: "🚌", text: "Transportation Technologies" }
    ] 
  },
  { 
    id: "energy", name: "Energy & Utilities", 
    desc: "Serving both traditional energy majors and the rapidly growing renewables sector across solar, wind, grid, and energy infrastructure.", 
    icon: "⚡", 
    chips: [
      { icon: "☀", text: "Solar Power" }, { icon: "💨", text: "Wind Energy" }, 
      { icon: "🛢", text: "Oil & Gas" }, { icon: "⚡", text: "Power Generation" }, 
      { icon: "🌱", text: "Renewable Energy" }, { icon: "🔌", text: "Utilities & Grid" }
    ] 
  },
  { 
    id: "bfsi", name: "BFSI & FinTech", 
    desc: "Talent for India's banking, insurance, and financial services sector — from branch operations to digital-native FinTech platforms.", 
    icon: "🏦", 
    chips: [
      { icon: "🏦", text: "Banking" }, { icon: "💳", text: "FinTech" }, 
      { icon: "📑", text: "Insurance" }, { icon: "💹", text: "Wealth Management" }, 
      { icon: "📈", text: "Investment Services" }, { icon: "🏛", text: "Financial Institutions" }
    ] 
  },
  { 
    id: "health", name: "Healthcare & Life Sciences", 
    desc: "Clinical, pharmaceutical, biotech, and healthcare technology roles — where precision in hiring is not just good practice but essential.", 
    icon: "🏥", 
    chips: [
      { icon: "🏥", text: "Hospitals & Clinics" }, { icon: "💊", text: "Pharmaceuticals" }, 
      { icon: "🧬", text: "Biotechnology" }, { icon: "🩺", text: "Medical Devices" }, 
      { icon: "💻", text: "Healthcare Technology" }, { icon: "🔬", text: "Clinical Research" }
    ] 
  },
  { 
    id: "logi", name: "Logistics & Supply Chain", 
    desc: "As India's logistics infrastructure scales, demand for capable supply chain talent has never been more acute — we fill that gap.", 
    icon: "📦", 
    chips: [
      { icon: "📦", text: "Warehousing" }, { icon: "🚛", text: "Transportation" }, 
      { icon: "🔗", text: "Supply Chain Operations" }, { icon: "✈", text: "Freight & Distribution" }, 
      { icon: "🏬", text: "3PL / 4PL Logistics" }
    ] 
  },
  { 
    id: "more", name: "More Sectors", 
    desc: "Our reach extends across virtually every major economic sector in India — here's a snapshot of additional industries we serve.", 
    icon: "➕", 
    chips: [
      { icon: "📡", text: "Telecommunications" }, { icon: "✈", text: "Aviation & Aerospace" }, 
      { icon: "🛍", text: "Retail & E-Commerce" }, { icon: "🎓", text: "Education & EdTech" }, 
      { icon: "🎮", text: "Media & Gaming" }, { icon: "🌾", text: "Agriculture & Agritech" }, 
      { icon: "🏛", text: "Government & Public Sector" }, { icon: "🤖", text: "Robotics & Industry 4.0" }, 
      { icon: "🌿", text: "Climate Tech & Sustainability" }
    ] 
  }
];

export default function IndustriesTab() {
  const [active, setActive] = useState(industries[0]);

  return (
    <section id="industries" className="bg-brand-offwhite py-[140px]">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <div className="mb-16">
          <span className="o-rule" />
          <span className="t-overline">Sectors We Serve</span>
          <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] text-[#1A1A1A] mt-4">Industry-Deep<br/>Expertise</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-20 items-start">
          <div className="lg:sticky lg:top-[100px]">
            <div className="font-mono text-[10px] text-brand-midgray tracking-[2px] uppercase mb-5">Select a sector</div>
            <div className="flex flex-row flex-wrap lg:flex-col gap-1">
              {industries.map((ind) => (
                <button 
                  key={ind.id} 
                  onClick={() => setActive(ind)}
                  className={`text-left text-[14px] font-medium px-4 py-3 rounded-[6px] transition-all border-l-2 lg:border-b-0 border-b-2 ${active.id === ind.id ? "text-brand-orange bg-[rgba(232,88,26,0.06)] border-brand-orange" : "text-brand-midgray border-transparent hover:text-[#1A1A1A] hover:bg-black/5"}`}
                >
                  {ind.name}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div key={active.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <h3 className="font-serif text-[36px] text-[#1A1A1A] tracking-[-0.01em] mb-2">{active.name}</h3>
                <p className="text-[15px] text-[#4B4B4B] leading-[1.7] mb-9">{active.desc}</p>
                <div className="flex flex-wrap gap-2.5">
                  {active.chips.map((chip, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white border border-[#E5E3DE] px-4 py-3 rounded-[6px] text-[14px] font-medium text-[#1A1A1A] transition-all hover:border-brand-orange hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(232,88,26,0.1)] cursor-default">
                      <span className="text-[16px]">{chip.icon}</span> {chip.text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}