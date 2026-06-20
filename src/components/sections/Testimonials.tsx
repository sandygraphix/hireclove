"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  { quote: "HireClove didn't just fill our open positions — they helped us rethink how we attract and retain engineering talent entirely. Their market intelligence was something our internal team simply didn't have access to.", author: "Arvind Khanna", role: "VP – Operations, Heavy Manufacturing Firm", initials: "AK" },
  { quote: "We needed 40 tech hires in 90 days for a critical product launch. HireClove delivered 38 in 75 days — every one of them a cultural and technical fit. The speed and quality was unlike anything we'd experienced before.", author: "Priya Sharma", role: "CTO, SaaS Startup — Series B", initials: "PS" },
  { quote: "Their compliance expertise saved us from significant regulatory risk during our three-state expansion. Payroll, statutory compliance, contract staffing — HireClove handled everything flawlessly, and proactively.", author: "Rahul Mehta", role: "CHRO, FMCG Corporation", initials: "RM" },
  { quote: "The executive search for our CFO was incredibly sensitive. HireClove handled it with complete confidentiality, delivered five outstanding candidates, and we extended an offer within six weeks. Remarkable process.", author: "Neeraj Rao", role: "Managing Director, Infrastructure Group", initials: "NR" }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-brand-black py-[140px] overflow-hidden">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="o-rule" />
            <span className="t-overline">Client Stories</span>
            <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] text-white mt-4">What Our Clients Say</h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-[16px] leading-[1.75] text-white/40">
            We measure our success by our clients' success. Here's what the organizations who trust HireClove as their workforce partner have to say.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `calc(-${index * 100}% - ${index * 24}px)` }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            {testimonials.map((test, i) => (
              <div key={i} className="min-w-[100%] md:min-w-[440px] shrink-0 bg-[#111] border border-white/5 rounded-[20px] p-8 md:p-11 transition-colors hover:border-brand-orange/30">
                <span className="font-serif text-[56px] text-brand-orange leading-[0.8] mb-5 block">"</span>
                <p className="text-[16px] leading-[1.8] text-white/70 mb-8 min-h-[120px]">{test.quote}</p>
                <div className="flex items-center gap-3.5 pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center font-bold text-white text-[14px] shrink-0">{test.initials}</div>
                  <div>
                    <div className="text-[14px] font-bold text-white tracking-[-0.01em]">{test.author}</div>
                    <div className="text-[12px] text-white/35 mt-0.5">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center gap-3 mt-10">
          <button onClick={() => setIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)} className="w-11 h-11 rounded-full border border-white/10 text-white/50 flex items-center justify-center transition-all hover:bg-brand-orange hover:text-white hover:border-brand-orange"><ArrowLeft size={18} /></button>
          <button onClick={() => setIndex(prev => (prev + 1) % testimonials.length)} className="w-11 h-11 rounded-full border border-white/10 text-white/50 flex items-center justify-center transition-all hover:bg-brand-orange hover:text-white hover:border-brand-orange"><ArrowRight size={18} /></button>
          <div className="flex gap-1.5 ml-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition-all duration-300 ${index === i ? "w-4.5 bg-brand-orange" : "w-1.5 bg-white/15"}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}