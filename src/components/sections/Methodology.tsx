"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  { id: "01", name: "Discover", desc: "Understanding organizational goals, workforce gaps, and market realities." },
  { id: "02", name: "Analyze", desc: "Evaluating workforce trends, compensation benchmarks, and talent availability." },
  { id: "03", name: "Design", desc: "Creating customized workforce strategies tailored to client objectives." },
  { id: "04", name: "Execute", desc: "Deploying recruitment, staffing, consulting, and workforce management solutions." },
  { id: "05", name: "Optimize", desc: "Continuously improving workforce performance, productivity, and retention." },
];

export default function Methodology() {
  return (
    <section className="bg-brand-navy py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-24">
        <div className="mb-20 max-w-3xl">
          <h2 className="font-syne text-4xl font-bold md:text-5xl">
            Our Consultative Approach
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Unlike traditional staffing firms that focus solely on job descriptions, we begin with understanding the business behind the requirement.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative border-t border-gray-800 pt-8 transition-colors hover:border-brand-orange"
            >
              <span className="mb-4 block font-syne text-sm font-bold text-brand-orange">
                {step.id}
              </span>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {step.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}