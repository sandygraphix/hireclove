"use client";

const services = [
  "Permanent Recruitment", "Executive Search", "Contract Staffing", "RPO", 
  "Workforce Consulting", "Payroll & Compliance", "Talent Mapping", 
  "HR Advisory", "Managed Workforce", "Market Intelligence"
];

export default function Marquee() {
  return (
    <div className="bg-brand-orange py-3.5 overflow-hidden border-t border-black/10 flex whitespace-nowrap w-full">
      <div className="animate-marquee flex w-max">
        {/* We duplicate the array to create a seamless infinite scrolling loop */}
        {[...services, ...services, ...services, ...services].map((item, i) => (
          <span key={i} className="px-8 font-mono text-[11px] tracking-[2px] uppercase text-white/85 border-r border-white/25">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}