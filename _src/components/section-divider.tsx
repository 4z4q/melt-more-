"use client"

import { motion } from "motion/react"

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8 md:py-14">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center" }}
        className="h-px w-40 md:w-64 bg-gradient-to-r from-transparent via-rose-gold to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mx-4 w-1.5 h-1.5 rounded-full bg-antique-gold"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center" }}
        className="h-px w-40 md:w-64 bg-gradient-to-r from-transparent via-rose-gold to-transparent"
      />
    </div>
  )
}
