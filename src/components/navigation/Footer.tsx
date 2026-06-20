export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/5 pt-20 pb-12">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-16 mb-16">
          
          <div>
            <a href="#hero" className="inline-flex items-center gap-2.5 font-sans text-[18px] font-bold text-white tracking-[-0.02em] mb-5">
              <div className="w-[34px] h-[34px] bg-brand-orange rounded-[7px] flex items-center justify-center text-[13px] font-extrabold tracking-[-0.5px]">HC</div>
              Hire<em className="text-brand-orange not-italic">Clove</em>
            </a>
            <p className="text-[14px] leading-[1.7] text-white/30 max-w-[280px]">
              Connecting human potential to the power of business. Workforce solutions engineered for the demands of modern organizations.
            </p>
            <div className="flex gap-2 mt-6">
              {['in', '𝕏', '◎', '▶'].map((icon, i) => (
                <button key={i} className="w-[34px] h-[34px] rounded-[7px] border border-white/5 flex items-center justify-center text-white/35 text-[12px] transition-all hover:bg-brand-orange hover:text-white hover:border-brand-orange">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {[
            { title: "Services", links: ["Permanent Recruitment", "Executive Search", "Contract Staffing", "RPO", "Payroll & Compliance", "HR Advisory"] },
            { title: "Industries", links: ["Technology", "Engineering", "Healthcare", "BFSI & FinTech", "Energy", "Automotive"] },
            { title: "Company", links: ["About Us", "How We Work", "Why HireClove", "Careers", "Contact"] }
          ].map((col, i) => (
            <div key={i}>
              <h5 className="font-mono text-[10px] text-white/30 tracking-[2px] uppercase mb-5">{col.title}</h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-white/40 transition-colors hover:text-brand-orange">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-white/20 tracking-[0.5px]">© 2026 HireClove Services LLP. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Cookies"].map(link => (
              <a key={link} href="#" className="font-mono text-[11px] text-white/20 tracking-[0.5px] transition-colors hover:text-white/60">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}