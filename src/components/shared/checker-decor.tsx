import { cn } from "@/lib/utils";

/**
 * Dark-green checker accent used in section corners. Always exactly three
 * filled squares, in the arrangements used by the Figma design:
 *  - "wide-a":  3×2, filled ▢■▢ / ■▢■  (hero, contact bottom-right)
 *  - "wide-b":  3×2, filled ■▢■ / ▢■▢  (contact top-left)
 *  - "tall-a":  2×3, filled ■▢ / ▢■ / ■▢ (about)
 *  - "tall-b":  2×3, filled ▢■ / ■▢ / ▢■ (work)
 * Cell size follows Figma: 34.5px on mobile (393 frame), 46px on desktop (1440 frame).
 */
const patterns = {
  "wide-a": [[0, 1, 0], [1, 0, 1]],
  "wide-b": [[1, 0, 1], [0, 1, 0]],
  "tall-a": [[1, 0], [0, 1], [1, 0]],
  "tall-b": [[0, 1], [1, 0], [0, 1]],
} as const;

export type CheckerPattern = keyof typeof patterns;

export function CheckerDecor({
  pattern,
  className,
}: {
  pattern: CheckerPattern;
  className?: string;
}) {
  const rows = patterns[pattern];
  const cols = rows[0].length;
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute grid [--c:34.5px] lg:[--c:46px]",
        className,
      )}
      style={{
        gridTemplateColumns: `repeat(${cols}, var(--c))`,
        gridAutoRows: "var(--c)",
      }}
    >
      {rows.flat().map((on, i) => (
        <span key={i} className={on ? "bg-primary-400" : undefined} />
      ))}
    </div>
  );
}
