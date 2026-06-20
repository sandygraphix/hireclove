"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Speed to Shortlist", value: "2× faster", width: "92%" },
  { label: "Offer Acceptance Rate", value: "89%", width: "89%" },
  { label: "90-Day Retention", value: "94%", width: "94%" },
  { label: "Compliance Accuracy", value: "99.8%", width: "99.8%" },
];

export default function WhyUs() {
  return (
    <section className="bg-brand-offwhite py-[140px]">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[120px] items-start">
          <div>
            <span className="o-rule" />
            <span className="t-overline">The Difference</span>
            <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] text-[#1A1A1A] mt-4">Why HireClove<br/>Outperforms</h2>
            <p className="text-[18px] leading-[1.75] text-[#4B4B4B] mt-5 mb-12">We view talent through a business lens. Every hiring decision impacts revenue, productivity, customer experience, and innovation capacity.</p>
            
            <div className="flex flex-col">
              {["Strategic Business Alignment", "Deep Sector Knowledge", "Access to Passive Talent", "Zero Compliance Risk"].map((item, i) => (
                <div key={i} className="flex gap-6 items-start py-6 border-b border-[#E5E3DE] first:border-t transition-all hover:pl-2">
                  <span className="font-mono text-[10px] text-brand-orange tracking-[1px] pt-1 min-w-[24px]">0{i + 1}</span>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1A1A1A] mb-1.5">{item}</h4>
                    <p className="text-[13.5px] leading-[1.65] text-[#4B4B4B]">Built upon our core consultative approach, delivering measurable outcomes rather than transactional placements.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-brand-black rounded-[20px] p-8 md:p-12">
              <div className="font-mono text-[10px] text-white/30 tracking-[2px] uppercase mb-9">HireClove vs Industry Average</div>
              
              {stats.map((stat, i) => (
                <div key={i} className="mb-7 last:mb-0">
                  <div className="flex justify-between mb-2.5">
                    <span className="text-[13.5px] text-white/70 font-medium">{stat.label}</span>
                    <span className="font-mono text-[12px] text-brand-orange">{stat.value}</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: stat.width }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1.4, ease: "easeOut", delay: i * 0.2 }}
                      className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-lt rounded-full" 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-brand-orange rounded-[20px] p-10 flex flex-wrap items-center justify-between gap-6">
              <p className="text-[18px] font-bold text-white leading-[1.4] max-w-[320px]">Ready to build a workforce that drives business performance?</p>
              <button className="bg-white text-brand-orange font-bold text-[14px] px-6 py-3.5 rounded-[7px] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">Let's Talk →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}