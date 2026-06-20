"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";
// IMPORT YOUR NEW SERVER ACTION
import { submitContactForm } from "@/app/actions/contact"; 

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("idle");
    try {
      // CALL THE SECURE BACKEND FUNCTION
      const response = await submitContactForm(data);
      
      if (response.success) {
        setSubmitStatus("success");
        reset();
        // Optional: Hide success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-brand-black py-[140px]">
      {/* ... keeping all the left-side HTML exactly the same ... */}
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-[120px] items-start">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="block w-[40px] h-[2px] bg-brand-orange/60 mb-5" />
            <span className="t-overline">Get In Touch</span>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] text-white leading-[1.05] tracking-[-0.02em] mt-4 mb-6">
              Let's Solve<br/>Your <em className="text-brand-orange italic not-italic">Workforce</em><br/>Challenge
            </h2>
            <p className="text-[16px] leading-[1.75] text-white/40 mb-12">
              No generic pitches. No templated responses. Just a focused conversation about your specific challenge and how we can best address it.
            </p>
            
            <div className="flex flex-col gap-5">
              {[
                { icon: <MapPin size={16} />, label: "Headquarters", val: "Hauz Khas, New Delhi, India" },
                { icon: <Mail size={16} />, label: "Email", val: "connect@hireclove.com" },
                { icon: <Phone size={16} />, label: "Phone", val: "+91 920 532 4877"  },
                { icon: <Clock size={16} />, label: "Hours", val: "Monday – Saturday, 9:00 AM to 7:00 PM IST" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 border border-white/10 rounded-[8px] flex items-center justify-center shrink-0 text-white/70">{item.icon}</div>
                  <div>
                    <div className="font-mono text-[10px] text-white/30 tracking-[1.5px] uppercase mb-1">{item.label}</div>
                    <div className="text-[14px] text-white/70 font-medium">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#111] border border-white/5 rounded-[20px] p-8 md:p-12">
            <div className="text-[22px] font-bold text-white tracking-[-0.01em] mb-8">Start the Conversation</div>
            
            {/* Success Message UI */}
            {submitStatus === "success" && (
              <div className="mb-6 rounded-[7px] bg-[rgba(34,197,94,0.1)] border border-[#16a34a] p-4 text-[#16a34a] text-[14px] font-medium flex items-center gap-3">
                <span>✓</span> Message sent securely. We'll be in touch within 24 hours.
              </div>
            )}

            {/* Error Message UI */}
            {submitStatus === "error" && (
              <div className="mb-6 rounded-[7px] bg-[rgba(239,68,68,0.1)] border border-red-500/50 p-4 text-red-500 text-[14px] font-medium flex items-center gap-3">
                <span>✕</span> Failed to send message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-white/35 tracking-[1.5px] uppercase mb-2">First Name</label>
                  <input {...register("firstName")} disabled={isSubmitting} className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange focus:bg-[rgba(232,88,26,0.04)] transition-all placeholder:text-white/20 disabled:opacity-50" placeholder="Rajesh" />
                  {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-white/35 tracking-[1.5px] uppercase mb-2">Last Name</label>
                  <input {...register("lastName")} disabled={isSubmitting} className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange focus:bg-[rgba(232,88,26,0.04)] transition-all placeholder:text-white/20 disabled:opacity-50" placeholder="Kumar" />
                  {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
                </div>
              </div>
              
              <div>
                <label className="block font-mono text-[10px] text-white/35 tracking-[1.5px] uppercase mb-2">Business Email</label>
                <input {...register("email")} type="email" disabled={isSubmitting} className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange focus:bg-[rgba(232,88,26,0.04)] transition-all placeholder:text-white/20 disabled:opacity-50" placeholder="rajesh@company.com" />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block font-mono text-[10px] text-white/35 tracking-[1.5px] uppercase mb-2">Company</label>
                <input {...register("company")} disabled={isSubmitting} className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange focus:bg-[rgba(232,88,26,0.04)] transition-all placeholder:text-white/20 disabled:opacity-50" placeholder="Your organisation" />
              </div>

              <div>
                <label className="block font-mono text-[10px] text-white/35 tracking-[1.5px] uppercase mb-2">Service Required</label>
                <select {...register("service")} disabled={isSubmitting} className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange focus:bg-[rgba(232,88,26,0.04)] transition-all appearance-none cursor-pointer disabled:opacity-50">
                  <option value="" disabled className="text-black">Select a service</option>
                  <option value="Permanent Recruitment" className="text-black">Permanent Recruitment</option>
                  <option value="Executive Search" className="text-black">Executive Search</option>
                  <option value="Contract Staffing" className="text-black">Contract Staffing</option>
                  <option value="RPO" className="text-black">RPO</option>
                  <option value="Other" className="text-black">Other</option>
                </select>
                {errors.service && <span className="text-red-500 text-xs mt-1">{errors.service.message}</span>}
              </div>

              <div>
                <label className="block font-mono text-[10px] text-white/35 tracking-[1.5px] uppercase mb-2">Tell Us About Your Challenge</label>
                <textarea {...register("message")} disabled={isSubmitting} className="w-full bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3 rounded-[7px] focus:outline-none focus:border-brand-orange focus:bg-[rgba(232,88,26,0.04)] transition-all placeholder:text-white/20 min-h-[110px] resize-y disabled:opacity-50" placeholder="Briefly describe your workforce challenge..."></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-brand-orange hover:bg-brand-orange-lt text-white font-bold text-[15px] py-3.5 rounded-[7px] mt-2 transition-all disabled:opacity-50">
                {isSubmitting ? "Securely Sending..." : "Send Message →"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}