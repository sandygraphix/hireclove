"use client";

import { motion } from "framer-motion";

const pillars = [
  { num: "01", title: "Market Intelligence", desc: "Real-time salary benchmarks, talent availability mapping, and competitive hiring analysis — so every decision is grounded in market reality." },
  { num: "02", title: "Strategic Partnership", desc: "We operate as an extension of your leadership team, aligning every workforce decision to your business objectives, culture, and long-term growth." },
  { num: "03", title: "Tailored Solutions", desc: "No templates, no one-size-fits-all. From single specialist hires to enterprise-wide RPO transformations, every engagement is architected from first principles." },
  { num: "04", title: "Compliance Confidence", desc: "We navigate India's complex labor regulations, statutory requirements, and employment compliance obligations — so you can hire without risk." }
];

export default function About() {
  return (
    <section id="about" className="bg-brand-offwhite py-[140px]">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-[120px] items-start">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}>
            <span className="o-rule" />
            <span className="t-overline mb-[28px] inline-block">Who We Are</span>
            <h2 className="font-serif text-[clamp(36px,4vw,58px)] leading-[1.08] tracking-[-0.02em] text-[#1A1A1A] mb-[28px]">
              A Workforce Partner,<br/>Not Just a Recruiter
            </h2>
            <p className="text-[17px] leading-[1.8] text-[#4B4B4B] mb-10">
              HireClove Services LLP is a workforce solutions and talent consulting firm. We combine market intelligence, deep industry expertise, talent analytics, and human insight to deliver measurable outcomes — building the workforce ecosystems that power organizational growth.
            </p>
            <p className="text-[17px] leading-[1.8] text-[#4B4B4B] mb-10">
              We do not simply fill vacancies. We help organizations of every scale — from high-growth startups to multinationals — build future-ready teams capable of meeting today's demands and tomorrow's opportunities.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-orange border-b border-brand-orange pb-0.5 transition-all hover:gap-3.5">
              Start a conversation →
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}>
            <div className="flex flex-col">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex gap-7 items-start py-8 border-b border-[#E5E3DE] first:border-t transition-all hover:pl-2">
                  <span className="font-mono text-[11px] text-brand-orange tracking-[1px] pt-1 min-w-[28px]">{pillar.num}</span>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#1A1A1A] mb-1.5 tracking-[-0.01em]">{pillar.title}</h4>
                    <p className="text-[14px] leading-[1.7] text-[#4B4B4B]">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-2 gap-8 mt-12 bg-brand-charcoal rounded-[20px] p-10">
              {[
                { num: "500", suffix: "+", label: "Roles Placed" },
                { num: "18", suffix: "+", label: "Sectors" },
                { num: "95", suffix: "%", label: "Retention" },
                { num: "72", suffix: "hr", label: "First Shortlist" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-serif text-[44px] text-white leading-none tracking-[-0.02em]">
                    {stat.num}<span className="text-brand-orange">{stat.suffix}</span>
                  </div>
                  <div className="font-mono text-[10px] text-white/35 tracking-[1.5px] uppercase mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}