"use client";

import { Dialog } from "radix-ui";
import { ArrowUpLeft, X } from "lucide-react";
import type { ReactNode } from "react";
import { branches } from "@/lib/branches";

type Props = {
  children: ReactNode;
  message?: string;
  className?: string;
  "aria-label"?: string;
};

export function BranchOrder({ children, message, ...props }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger type="button" {...props}>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mm-branch-overlay" />
        <Dialog.Content className="mm-branch-dialog" dir="rtl">
          <Dialog.Title>لأي فرع نرسل طلبك؟</Dialog.Title>
          <Dialog.Description>اختر الفرع اللي تبي تتواصل معه. نوصل لجميع مناطق المملكة.</Dialog.Description>
          {branches.map(({ city, phone }) => (
            <Dialog.Close asChild key={phone}>
              <a target="_blank" rel="noopener noreferrer"
                href={`https://wa.me/${phone.replace(/\D/g, "")}${message ? "?text=" + encodeURIComponent(message) : ""}`}>
                واتساب {city}<ArrowUpLeft size={18} aria-hidden="true" />
              </a>
            </Dialog.Close>
          ))}
          <Dialog.Close className="mm-branch-close" aria-label="إغلاق"><X size={20} /></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
