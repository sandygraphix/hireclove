"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ParticleNetwork from "./ParticleNetwork";

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = to / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [to]);
  return <div className="font-serif text-[42px] leading-none text-white tracking-tight">{count}<sup className="text-[22px]">{suffix}</sup></div>;
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-brand-black flex flex-col justify-end overflow-hidden pb-[100px] pt-[160px]">
      
      {/* FIXED: Wrapped ParticleNetwork in Canvas */}
      <div className="absolute inset-0 opacity-35 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ParticleNetwork />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 pointer-events-none z-10" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(232,88,26,0.06) 0%, transparent 70%)' }} />
      
      <div className="relative z-20 mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-2.5 mb-9">
          <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
          <span className="font-mono text-[11px] tracking-[2px] uppercase text-white/45">Strategic Workforce Partner · Established India</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-serif text-[clamp(42px,7vw,100px)] leading-[1.0] tracking-[-0.03em] text-white max-w-[1000px] mb-10">
          Connecting<br />
          <em className="not-italic italic text-white/55">Human Potential</em><br />
          to the Future<br />
          of <span className="text-brand-orange">Business</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-end justify-between gap-12 border-b border-white/5 pb-12">
          <div className="max-w-[480px]">
            <p className="text-[17px] leading-[1.75] text-white/50 mb-8">
              In a talent-constrained world, HireClove engineers workforce ecosystems — not just fills vacancies. We are the partner that turns your people strategy into competitive advantage.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-brand-orange hover:bg-brand-orange-lt text-white px-7 py-3.5 rounded-[7px] font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-[0_0_0_rgba(232,88,26,0)] hover:shadow-[0_12px_32px_rgba(232,88,26,0.35)]">Start a Conversation →</button>
              <button className="border border-white/15 text-white/60 hover:text-white hover:border-white/35 px-6 py-3.5 rounded-[7px] font-medium text-sm transition-all hover:-translate-y-0.5">Explore Services</button>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-12 pt-8">
          <div><Counter to={500} suffix="+" /><div className="font-mono text-[10px] tracking-[1.5px] text-white/35 uppercase mt-1.5">Placements Made</div></div>
          <div><Counter to={18} suffix="+" /><div className="font-mono text-[10px] tracking-[1.5px] text-white/35 uppercase mt-1.5">Industries Served</div></div>
          <div><Counter to={95} suffix="%" /><div className="font-mono text-[10px] tracking-[1.5px] text-white/35 uppercase mt-1.5">Client Retention</div></div>
          <div><Counter to={72} suffix="hr" /><div className="font-mono text-[10px] tracking-[1.5px] text-white/35 uppercase mt-1.5">First Shortlist</div></div>
        </motion.div>
      </div>
    </section>
  );
}
