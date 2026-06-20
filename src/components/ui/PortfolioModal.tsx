"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, FileDown, CheckCircle } from "lucide-react";

// You can connect this to your server action later, just like the contact form
const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid corporate email"),
  company: z.string().min(2, "Company is required"),
});

type FormData = z.infer<typeof schema>;

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Here you would normally await your submitContactForm(data) to send the email
    // For now, we will simulate a 1-second network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after closing animation finishes
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#111111] border border-white/10 rounded-[16px] overflow-hidden shadow-2xl z-10"
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-white mb-2">Partner With Us</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Enter your details to download our comprehensive service portfolio and case studies.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                      <input {...register("fullName")} disabled={isSubmitting} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange transition-all placeholder:text-white/20" />
                      {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
                    </div>
                    <div>
                      <input {...register("email")} type="email" disabled={isSubmitting} placeholder="Corporate Email" className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange transition-all placeholder:text-white/20" />
                      {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                    </div>
                    <div>
                      <input {...register("company")} disabled={isSubmitting} placeholder="Company Name" className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange transition-all placeholder:text-white/20" />
                      {errors.company && <span className="text-red-500 text-xs mt-1">{errors.company.message}</span>}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-brand-orange hover:bg-brand-orange-lt text-white font-bold text-[15px] py-3.5 rounded-[7px] mt-2 transition-all disabled:opacity-50 flex justify-center items-center gap-2">
                      {isSubmitting ? "Processing..." : "Access Portfolio"}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Thank You!</h3>
                  <p className="text-white/50 text-sm mb-8">
                    Your details have been received. You can now download the HireClove portfolio.
                  </p>
                  {/* The actual download link */}
                  <a 
                    href="/hireclove-portfolio.pdf" 
                    download
                    className="inline-flex w-full justify-center items-center gap-2 bg-white text-black hover:bg-white/90 font-bold text-[15px] py-3.5 rounded-[7px] transition-all"
                  >
                    <FileDown size={18} /> Download PDF
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
