"use client";

import { AnimatePresence, motion } from "motion/react";
// import { buildOrderLink } from "@/lib/whatsapp"
import { products } from "@/lib/products";

type StickyBarProps = {
  selectedIds: number[];
};
export const WHATSAPP_NUMBER = "+966534611644";

/**
 * Builds a WhatsApp deep link with a pre-filled order message
 * containing every selected flavour name.
 */
export function buildOrderLink(selectedNames: string[]): string {
  const lines = selectedNames.map((name) => `• ${name}`).join("\n");
  const message = `مرحباً Melt More 
قمت بأختيار النكهات التالية:

${lines}

`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function StickyBar({ selectedIds }: StickyBarProps) {
  const visible = selectedIds.length > 0;

  function handleSend() {
    const selectedNames = products
      .filter((p) => selectedIds.includes(p.id))
      .map((p) => p.name);
    const url = buildOrderLink(selectedNames);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-bar"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed inset-x-0 bottom-0 z-50 max-h-[80vh] md:max-h-[50vh] max-w-full md:max-w-7xl mx-auto rounded-tl-2xl md:rounded-2xl overflow-hidden shadow-[0_-10px_40px_-10px_rgba(13,51,49,0.4)] md:mb-4"
          role="region"
          aria-label="شريط إرسال الطلب"
        >
          <div
            className="w-full border-t-2 border-[#d4a96a] bg-[#1a4d4b] text-[#fbebd3]"
            style={{
              paddingBottom: "max(0px, env(safe-area-inset-bottom))",
            }}
          >
            <div className="mx-auto max-w-7xl flex items-center justify-between gap-3 px-5 h-16 sm:h-20">
              {/* Right side (RTL): selection count */}
              <p className="text-sm sm:text-base font-bold leading-none">
                اخترت{" "}
                <span
                  className="text-[#d4a96a] font-bold mx-1"
                  aria-live="polite"
                >
                  {selectedIds.length}
                </span>{" "}
                نكهة
              </p>

              {/* Left side: WhatsApp CTA */}
              <button
                type="button"
                onClick={handleSend}
                className="cursor-pointer animate-pkg-pulse inline-flex items-center justify-center gap-2 bg-[#d4a96a] hover:bg-[#b8924e] text-[#1a4d4b] font-bold rounded-full px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbebd3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a4d4b]"
              >
                {/* <span aria-hidden="true">🍫</span> */}
                <span>أرسل طلبك عبر واتساب</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
