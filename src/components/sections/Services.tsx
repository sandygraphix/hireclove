"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "🎯", title: "Permanent Recruitment", desc: "Beyond the CV — we assess culture fit, growth potential, and long-term contribution across every function, level, and industry.", label: "Core" },
  { icon: "👑", title: "Executive Search & Leadership", desc: "Confidential identification of CXOs, VPs, and Directors who drive culture, innovation, and organizational transformation.", label: "Leadership" },
  { icon: "⏱", title: "Contract Staffing", desc: "Flexible workforce solutions for project surges, product launches, and seasonal demand — with full compliance coverage.", label: "Agile" },
  { icon: "🔧", title: "Managed Workforce Solutions", desc: "End-to-end contingent labor management — sourcing, compliance, performance, and vendor consolidation, all unified.", label: "Enterprise" },
  { icon: "💼", title: "Payroll & Compliance", desc: "PF, ESI, gratuity, TDS — India's statutory complexity, handled with precision so your team stays focused on business.", label: "Compliance" },
  { icon: "🗺", title: "Talent Mapping & Intelligence", desc: "Proactive market research — mapping talent landscapes, benchmarking compensation, and identifying passive candidates before roles open.", label: "Intelligence" },
  { icon: "⚡", title: "Project Staffing", desc: "Rapid specialist deployment for critical business initiatives — new plant startups, product launches, or geographic expansion.", label: "On-Demand" },
  { icon: "💡", title: "HR Advisory & Consulting", desc: "Workforce transformation, org design, job architecture, competency frameworks, and people strategy — built for your future.", label: "Advisory" },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-warm py-[140px]">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="o-rule" />
            <span className="t-overline">What We Do</span>
            <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] text-[#1A1A1A] mt-4">Service Portfolio</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[17px] leading-[1.8] text-[#4B4B4B] mb-6">
              Integrated workforce solutions spanning the full talent lifecycle — from strategic planning and leadership search to day-to-day compliance and contingent management.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-orange border-b border-brand-orange pb-0.5 transition-all hover:gap-3.5">
              Discuss your requirement →
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-black rounded-[20px] p-8 md:p-14 mb-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] tracking-[2px] uppercase text-brand-orange mb-4">Flagship Service</div>
            <h3 className="font-serif text-[36px] text-white leading-[1.1] tracking-[-0.01em] mb-4">Recruitment Process Outsourcing (RPO)</h3>
            <p className="text-[15px] leading-[1.7] text-white/45 mb-7">
              Transfer your entire hiring function — or specific components — to our dedicated team. We embed into your organization, act as your talent brand, and systematically reduce cost-per-hire while dramatically improving quality and speed.
            </p>
            <div className="flex flex-wrap gap-2">
              {["End-to-End RPO", "Project RPO", "On-Demand RPO", "Embedded Recruiters", "Talent Brand Management"].map(tag => (
                <span key={tag} className="bg-white/5 border border-white/10 text-white/60 text-[12px] px-3.5 py-1.5 rounded-[50px]">{tag}</span>
              ))}
            </div>
          </div>
          <div className="text-left lg:text-center">
            <div className="font-serif text-[72px] text-brand-orange leading-none tracking-[-0.03em]">40<span className="text-[40px]">%</span></div>
            <div className="font-mono text-[10px] text-white/30 tracking-[1.5px] uppercase mt-2">avg. reduction in cost-per-hire</div>
            <div className="mt-5 text-[13px] text-white/30 leading-[1.6]">Delivered across enterprise clients in manufacturing, technology, and BFSI sectors.</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E5E3DE]">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="group relative bg-brand-warm p-7 md:p-9 transition-colors hover:bg-white overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 w-[2px] h-full bg-brand-orange scale-y-0 origin-top transition-transform duration-350 ease-out group-hover:scale-y-100" />
              <div className="text-[26px] mb-5">{svc.icon}</div>
              <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-2.5 tracking-[-0.01em]">{svc.title}</h3>
              <p className="text-[13px] leading-[1.65] text-[#4B4B4B] mb-4">{svc.desc}</p>
              <div className="font-mono text-[10px] text-brand-orange tracking-[1.5px] uppercase mt-4">{svc.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}