// app/(root)/flavours/page.tsx
import { SelectionSection } from "@/components/selection-section";
import { WaveDivider } from "@/components/wave-divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الحشوات | Black Chocolate",
  description:
    "تشكيلة حشوات بلاك شوكلت — أكثر من 30 نكهة من الشوكولاتة البلجيكية الفاخرة في الرياض.",
  alternates: { canonical: "/flavours" },
};

export default function FlavoursPage() {
  return (
    // Desktop: pt-16 (navbar صف واحد h-16)
    // Mobile:  pt-[104px] (navbar صفين: h-16 + h-10)
    <div className="bg-[#e8f4f3] pt-[104px] md:pt-16">
      <SelectionSection />
      <WaveDivider topColor="#e8f4f3" bottomColor="#fff8f0" />
    </div>
  );
}
