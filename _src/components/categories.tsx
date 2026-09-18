"use client";

import { motion } from "motion/react";

const categories = [
  { label: "الشوكولاتة البلجيكية" },
  { label: "الحلويات العربية الفاخرة" },
  { label: "الحلى والتشيزكيك" },
  { label: "الموالح الراقية" },
  { label: "التوت المغطى بالشوكولاتة" },
  { label: "بكجات الهدايا" },
];

export function Categories() {
  return (
    <section className="relative bg-[#fbebd3] text-[#1a4d4b] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar justify-start md:justify-center flex-nowrap pb-2 -mx-6 px-6"
        >
          {categories.map((c, i) => (
            <motion.button
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -2 }}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#b8d8d7] bg-[#fff8f0] hover:bg-[#e8f4f3] hover:border-[#458482] text-sm tracking-wide text-[#1a4d4b] transition-all duration-500 shadow-[0_2px_10px_-4px_rgba(69,132,130,0.18)]"
            >
              <span
                aria-hidden="true"
                className="inline-block w-1.5 h-1.5 rounded-full bg-[#458482]"
              />
              <span className="font-light">{c.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none}`}</style>
    </section>
  );
}
