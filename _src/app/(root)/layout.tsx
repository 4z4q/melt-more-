// app/(root)/layout.tsx
import { Footer } from "@/app/(root)/_components/footer";
import { Navbar } from "@/app/(root)/_components/navbar";
import { FloatingSweets } from "@/components/floating-sweets";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative bg-[#fbebd3] text-[#1a4d4b] overflow-x-hidden">
      <FloatingSweets />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
