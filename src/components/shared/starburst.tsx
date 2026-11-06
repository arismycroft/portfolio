import { cn } from "@/lib/utils";

/** 12-point starburst bullet used in lists and FAQ. */
export function Starburst({
  className,
  muted = false,
}: {
  className?: string;
  muted?: boolean;
}) {
  const points = Array.from({ length: 24 }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / 24 - Math.PI / 2;
    const r = i % 2 === 0 ? 12 : 7.6;
    return `${(12 + r * Math.cos(angle)).toFixed(2)},${(12 + r * Math.sin(angle)).toFixed(2)}`;
  });
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={cn("size-6 shrink-0", className)}
      fill={muted ? "#3a6601" : "#91ff02"}
    >
      <polygon points={points.join(" ")} />
    </svg>
  );
}
