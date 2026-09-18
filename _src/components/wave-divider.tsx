type WaveDividerProps = {
  /** The color of the wave fill (the section ABOVE this divider). */
  topColor: string;
  /** The color the wave reveals below (the section BELOW this divider). */
  bottomColor: string;
  /** Flip the wave direction. */
  flip?: boolean;
  /** Height in tailwind units (default 16 → 64px). */
  heightClass?: string;
  className?: string;
};

/**
 * SectionWave — a soft wave divider that bridges two alternating
 * sections by drawing a gentle curve from `topColor` to `bottomColor`.
 *
 * Render this AFTER the upper section (so the wave belongs to the
 * background of the lower section visually), with `topColor` matching
 * the section above and `bottomColor` matching the one below.
 */
export function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  heightClass = "h-12 md:h-16",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full ${heightClass} ${className}`}
      style={{ backgroundColor: bottomColor }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
