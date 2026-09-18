"use client"

import { motion } from "motion/react"

function Macaron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="30" cy="22" rx="22" ry="10" fill="#fbebd3" />
      <ellipse cx="30" cy="38" rx="22" ry="10" fill="#f5dbb4" />
      <rect x="8" y="26" width="44" height="9" fill="#458482" />
      <ellipse cx="30" cy="22" rx="22" ry="3" fill="#fff8f0" opacity="0.4" />
    </svg>
  )
}

function ChocolateBar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="14"
        width="40"
        height="32"
        rx="3"
        fill="#458482"
        stroke="#d4a96a"
        strokeWidth="1"
      />
      <line x1="23" y1="14" x2="23" y2="46" stroke="#d4a96a" strokeWidth="1" />
      <line x1="37" y1="14" x2="37" y2="46" stroke="#d4a96a" strokeWidth="1" />
      <line x1="10" y1="30" x2="50" y2="30" stroke="#d4a96a" strokeWidth="1" />
    </svg>
  )
}

function StarAnise({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(30 30)">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            rx="4"
            ry="14"
            fill="#d4a96a"
            opacity="0.75"
            transform={`rotate(${(i * 360) / 8}) translate(0 -10)`}
          />
        ))}
        <circle r="5" fill="#1a4d4b" opacity="0.4" />
      </g>
    </svg>
  )
}

const items = [
  { Comp: Macaron, style: "top-[15%] left-[6%]", size: 56, delay: 0, dur: 9 },
  { Comp: ChocolateBar, style: "top-[40%] right-[4%]", size: 52, delay: 1.2, dur: 11 },
  { Comp: StarAnise, style: "top-[70%] left-[8%]", size: 44, delay: 0.5, dur: 10 },
  { Comp: Macaron, style: "top-[80%] right-[10%]", size: 40, delay: 2, dur: 12 },
  { Comp: StarAnise, style: "top-[25%] right-[16%]", size: 36, delay: 1.8, dur: 13 },
]

export function FloatingSweets() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
      aria-hidden="true"
    >
      {items.map((it, i) => {
        const { Comp } = it
        return (
          <motion.div
            key={i}
            className={`absolute ${it.style} opacity-[0.22]`}
            style={{ width: it.size, height: it.size }}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 8, -4, 0],
            }}
            transition={{
              duration: it.dur,
              delay: it.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Comp className="w-full h-full" />
          </motion.div>
        )
      })}
    </div>
  )
}
