import { Footer } from "@/app/(root)/_components/footer";
import { Navbar } from "@/app/(root)/_components/navbar";
import React from "react";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className="mm-site"><a className="mm-skip" href="#main-content">انتقل إلى المحتوى</a><Navbar /><main id="main-content">{children}</main><Footer /></div>;
}
