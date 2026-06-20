"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  { id: "01", title: "Executive Search", desc: "Identifying transformational leaders who drive organizational growth." },
  { id: "02", title: "Permanent Recruitment", desc: "Delivering exceptional talent for long-term business success." },
  { id: "03", title: "RPO Solutions", desc: "Managing recruitment functions to improve quality, speed, and effectiveness." },
  { id: "04", title: "Workforce Consulting", desc: "Helping organizations align workforce strategy with business objectives." }
];

export default function CoreServices() {
  return (
    <section className="bg-white py-32 px-6 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between border-b border-gray-200 pb-8 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold text-brand-navy md:text-5xl lg:w-1/2">
            Integrated Workforce Solutions
          </h2>
          <p className="mt-6 text-gray-600 lg:w-1/3">
            Beyond traditional staffing. We design tailored solutions that scale with your evolving business requirements.
          </p>
        </div>

        <div className="grid gap-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex cursor-pointer flex-col justify-between border-b border-gray-100 pb-12 transition-colors hover:border-brand-orange md:flex-row md:items-center"
            >
              <div className="flex items-center gap-8">
                <span className="text-xl font-medium text-gray-400 transition-colors group-hover:text-brand-orange">
                  {service.id}
                </span>
                <h3 className="text-3xl font-bold text-brand-navy transition-transform group-hover:translate-x-4">
                  {service.title}
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-6 md:mt-0">
                <p className="max-w-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block">
                  {service.desc}
                </p>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}