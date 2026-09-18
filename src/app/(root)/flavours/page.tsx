import { SelectionSection } from "@/components/selection-section";
import type { Metadata } from "next";
export const metadata:Metadata={title:"الشوكولاتة والحشوات",description:"اكتشف حشوات ميلت مور، اختر تشكيلتك المفضلة من الشوكولاتة وأرسل طلبك عبر واتساب.",alternates:{canonical:"/flavours"}};
export default function FlavoursPage(){return <div className="mm-flavours-page"><SelectionSection/></div>;}
