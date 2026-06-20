"use client";

import { motion } from "framer-motion";
import { Compass, Radio, PenTool, Rocket, LineChart } from "lucide-react";

const steps = [
  { id: "Step 01", icon: <Compass size={24} />, title: "Workforce Discovery", desc: "Business goals, org structure, talent gaps, growth plans, and market dynamics — all mapped before a single recommendation is made." },
  { id: "Step 02", icon: <Radio size={24} />, title: "Talent Intelligence", desc: "Continuous monitoring of salary benchmarks, talent availability, competitor hiring activity, and skills demand across your specific sector." },
  { id: "Step 03", icon: <PenTool size={24} />, title: "Solution Design", desc: "A bespoke workforce architecture — permanent, contract, RPO, executive search, or a tailored hybrid — built specifically for your objectives." },
  { id: "Step 04", icon: <Rocket size={24} />, title: "Talent Delivery", desc: "Leveraging our extensive networks, sourcing platforms, and domain expertise to identify, assess, and deploy high-quality talent at speed." },
  { id: "Step 05", icon: <LineChart size={24} />, title: "Workforce Optimization", desc: "Post-placement retention strategy, performance monitoring, compliance management, and scalability planning — the partnership continues." }
];

export default function Process() {
  return (
    <section className="bg-brand-black py-[140px]">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="o-rule" />
            <span className="t-overline">Methodology</span>
            <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] leading-[1.1] text-white mt-4">Consult.<br/>Design.<br/>Deliver.<br/>Transform.</h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-[17px] leading-[1.8] text-white/45">
            Every engagement begins with deep discovery — not assumptions. We map your business before we ever touch your talent. What follows is a deliberate five-stage process that consistently turns workforce challenges into competitive advantage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-white/5">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="group relative bg-brand-charcoal p-8 transition-colors hover:bg-[#1c1c1c] overflow-hidden"
            >
              <div className="font-mono text-[10px] text-brand-orange tracking-[2px] uppercase mb-6">{step.id}</div>
              <div className="text-white/80 mb-5 group-hover:text-white transition-colors">{step.icon}</div>
              <h4 className="text-[17px] font-bold text-white mb-3 tracking-[-0.01em]">{step.title}</h4>
              <p className="text-[13px] leading-[1.7] text-white/40">{step.desc}</p>
              {/* Interactive Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}