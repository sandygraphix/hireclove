"use client";

import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll"; 
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import PortfolioModal from "@/components/ui/PortfolioModal"; 
import logo from "@/app/logo.svg";

const navLinks = [
  { name: "Who We Are", href: "#about" },
  { name: "Methodology", href: "#process" }, 
  { name: "Services", href: "#services" },
  { name: "Sectors", href: "#industries" },
  { name: "Careers", href: "#careers" },
];

export default function Navbar() {
  const isScrolled = useScroll(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? "bg-brand-black/90 backdrop-blur-md border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 md:px-12">
          
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="group flex items-center">
            <Image 
              src={logo} 
              alt="HireClove Logo" 
              className="h-[34px] w-auto transition-transform group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[13px] font-medium text-white/60 transition-colors hover:text-brand-orange"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden rounded-[7px] bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-brand-orange md:block"
            >
              Partner With Us →
            </button>
            
            <button 
              className="text-white/80 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-black border-b border-white/5 py-6 px-6 md:hidden flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[15px] font-medium text-white/80 transition-colors hover:text-brand-orange border-b border-white/5 pb-3"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-2 inline-block w-full rounded-[7px] bg-brand-orange px-5 py-3 text-center text-[14px] font-bold text-white transition-all"
            >
              Partner With Us →
            </button>
          </div>
        )}
      </motion.header>

      {/* RENDER THE MODAL */}
      <PortfolioModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
