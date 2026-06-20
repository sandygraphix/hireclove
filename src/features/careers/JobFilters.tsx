"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const departments = ["All", "Technology", "Engineering", "Finance", "Healthcare", "Executive"];

export default function JobFilters({ onFilterChange }: { onFilterChange: (dept: string) => void }) {
  const [activeDept, setActiveDept] = useState("All");

  const handleFilter = (dept: string) => {
    setActiveDept(dept);
    onFilterChange(dept);
  };

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      {/* Search Input */}
      <div className="relative w-full md:w-96">
        <input 
          type="text" 
          placeholder="Search open positions..." 
          className="w-full border-b border-gray-300 bg-transparent py-3 pl-4 pr-10 text-sm font-inter text-brand-navy focus:border-brand-orange focus:outline-none transition-colors"
        />
        <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Department Pills */}
      <div className="flex flex-wrap gap-3">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => handleFilter(dept)}
            className={cn(
              "rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all",
              activeDept === dept 
                ? "bg-brand-navy text-white shadow-md" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {dept}
          </button>
        ))}
      </div>
    </div>
  );
}