"use client";

import { motion } from "framer-motion";

const jobs = [
  { title: "Senior Talent Acquisition Specialist", loc: "Faridabad / Gurugram", exp: "5–8 years", tag: "Hybrid", tagColor: "text-brand-orange bg-[rgba(232,88,26,0.1)]" },
  { title: "RPO Delivery Lead", loc: "Delhi NCR", exp: "7–12 years", tag: "On-site", tagColor: "text-[#6366f1] bg-[rgba(99,102,241,0.1)]" },
  { title: "Executive Search Consultant", loc: "Pan India", exp: "6–10 years", tag: "Hybrid", tagColor: "text-brand-orange bg-[rgba(232,88,26,0.1)]" },
  { title: "HR Advisory Consultant", loc: "Remote / NCR", exp: "4–7 years", tag: "Remote", tagColor: "text-[#16a34a] bg-[rgba(34,197,94,0.1)]" }
];

export default function Careers() {
  return (
    <section id="careers" className="bg-brand-warm py-[140px]">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <span className="o-rule" />
          <span className="t-overline">Join HireClove</span>
          <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] mt-4">Build a Career<br/>That Builds Careers</h2>
          <p className="text-[18px] text-[#4B4B4B] max-w-[580px] mt-5">
            We are a team of passionate workforce professionals who believe that matching the right people to the right opportunities is one of the most meaningful things a person can do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#E5E3DE] mb-20">
          {[
            { icon: "🌱", title: "Grow From Day One", desc: "Real client ownership, mentorship from industry veterans, and a learning culture where your development is genuinely invested in." },
            { icon: "🎯", title: "Purpose-Driven Work", desc: "Every placement changes someone's career trajectory. We attract people who take that responsibility seriously, and who find meaning in it." },
            { icon: "🤝", title: "Collaborative by Design", desc: "We share market intelligence, celebrate team outcomes, and genuinely support each other. No cutthroat competition." }
          ].map((item, i) => (
            <div key={i} className="bg-brand-warm p-9 md:p-12 transition-colors hover:bg-white cursor-default">
              <div className="text-[28px] mb-6">{item.icon}</div>
              <h4 className="text-[18px] font-bold text-[#1A1A1A] mb-2.5 tracking-[-0.01em]">{item.title}</h4>
              <p className="text-[14px] leading-[1.7] text-[#4B4B4B]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="font-mono text-[10px] text-brand-midgray tracking-[2px] uppercase mb-5">Current Openings</div>
        <div className="flex flex-col gap-[1px] bg-[#E5E3DE]">
          {jobs.map((job, i) => (
            <div key={i} className="group bg-brand-warm p-7 md:px-8 flex flex-wrap items-center justify-between gap-6 transition-all hover:bg-white hover:pl-10 cursor-pointer">
              <div>
                <div className="text-[16px] font-bold text-[#1A1A1A] mb-1.5 tracking-[-0.01em]">{job.title}</div>
                <div className="flex flex-wrap gap-5 font-mono text-[11px] text-brand-midgray tracking-[0.5px]">
                  <span>📍 {job.loc}</span>
                  <span>💼 {job.exp}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full tracking-[0.5px] ${job.tagColor}`}>{job.tag}</span>
                <button className="bg-brand-black text-white text-[13px] font-semibold px-5 py-2 rounded-[6px] transition-colors group-hover:bg-brand-orange">Apply →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}