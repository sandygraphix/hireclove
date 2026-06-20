"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

// FIXED: Now extending HTMLMotionProps instead of ButtonHTMLAttributes
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-[7px] font-semibold tracking-wide transition-all duration-300";
    
    const variants = {
      primary: "bg-brand-orange text-white hover:bg-brand-orange-lt shadow-[0_0_0_rgba(232,88,26,0)] hover:shadow-[0_12px_32px_rgba(232,88,26,0.35)]",
      secondary: "bg-brand-charcoal text-white hover:bg-brand-charcoal/90",
      outline: "border border-white/15 text-white/60 hover:border-white/35 hover:text-white",
      ghost: "bg-transparent text-white/60 hover:text-white",
    };

    const sizes = {
      sm: "h-10 px-6 text-[13px]",
      md: "h-12 px-7 text-[14px]",
      lg: "h-14 px-10 text-[16px]",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";