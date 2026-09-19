"use client";

import { motion } from "motion/react";
import { Instagram, Music2, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-12 bg-[#0d3331] text-[#fbebd3]">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="font-serif-italic text-5xl text-[#d4a96a]"
            style={{ fontWeight: 600 }}
          >
            Black
          </span>
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#fbebd3]/70">
            Chocolate
          </span>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="https://www.tiktok.com/@black.chcolate"
            aria-label="TikTok"
            className="w-10 h-10 rounded-full border border-[#fbebd3]/25 flex items-center justify-center text-[#fbebd3]/80 hover:text-[#1a4d4b] hover:bg-[#d4a96a] hover:border-[#d4a96a] transition-colors"
          >
            <Music2 className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/melt.more"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-[#fbebd3]/25 flex items-center justify-center text-[#fbebd3]/80 hover:text-[#1a4d4b] hover:bg-[#d4a96a] hover:border-[#d4a96a] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/+966534611644"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full border border-[#fbebd3]/25 flex items-center justify-center text-[#fbebd3]/80 hover:text-[#1a4d4b] hover:bg-[#d4a96a] hover:border-[#d4a96a] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center" }}
          className="mx-auto mt-10 h-px w-48 bg-gradient-to-r from-transparent via-[#d4a96a] to-transparent"
        />

        <p className="mt-6 text-xs tracking-[0.2em] uppercase text-[#fbebd3]/55">
          © 2026 Melt More — All rights reserved
        </p>
      </div>
    </footer>
  );
}
