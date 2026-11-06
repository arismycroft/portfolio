import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({ label, title, align = "center", className }: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="text-sm text-primary-200 uppercase">{label}</span>
      <h2 className="text-3xl leading-tight font-bold uppercase md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
