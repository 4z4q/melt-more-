import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Check } from "lucide-react";
import type { Product } from "@/lib/products";
import ImageKit from "./image-kit";

type ProductCardProps = {
  product: Product;
  selected: boolean;
  onToggle: (id: number) => void;
  priority?: boolean;
};

const isTouchDevice =
  typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

export function ProductCard({
  product,
  selected,
  onToggle,
  priority,
}: ProductCardProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseEnter() {
    if (ref.current) ref.current.style.willChange = "transform";
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.willChange = "auto";
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onToggle(product.id)}
      onMouseMove={isTouchDevice ? undefined : handleMouseMove}
      onMouseEnter={isTouchDevice ? undefined : handleMouseEnter}
      onMouseLeave={isTouchDevice ? undefined : handleMouseLeave}
      aria-pressed={selected}
      aria-label={`${selected ? "إلغاء اختيار" : "اختيار"} ${product.name}`}
      style={
        isTouchDevice
          ? undefined
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 800,
              transformStyle: "preserve-3d",
            }
      }
      className={[
        "group relative w-full text-right cursor-pointer overflow-hidden rounded-[14px] bg-[#fff8f0]",
        "shadow-[0_4px_14px_-6px_rgba(13,51,49,0.18)]",
        "transition-all duration-[250ms] ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a96a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8f4f3]",
        selected
          ? "border-[3px] border-[#458482] scale-[1.03] bg-[#fff8f0]"
          : "border border-[#b8d8d7] hover:border-[#458482]/70",
      ].join(" ")}
    >
      {/* Square image */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#e8f4f3]">
        <ImageKit src={product.image} alt={product.name} priority={priority} />

        {/* Checkmark badge */}
        <span
          aria-hidden="true"
          className={[
            "absolute top-2 right-2 w-7 h-7 rounded-full bg-[#458482] flex items-center justify-center",
            "shadow-[0_2px_8px_rgba(13,51,49,0.4)]",
            "transition-all duration-[250ms] ease-out",
            selected ? "opacity-100 scale-100" : "opacity-0 scale-75",
          ].join(" ")}
        >
          <Check className="w-4 h-4 text-[#fff8f0]" strokeWidth={3} />
        </span>
      </div>

      {/* Product name */}
      <p className="text-center text-sm font-bold text-[#0d3331] px-2.5 py-2.5 leading-snug">
        {product.name}
      </p>
    </motion.button>
  );
}
