import Image from "next/image";
import { cn } from "@/lib/utils";

type Company = "upwork" | "trello" | "zoom" | "zapier";

const names: Record<Company, string> = {
  upwork: "Upwork",
  trello: "Trello",
  zoom: "Zoom",
  zapier: "Zapier",
};

/** Client logos exported from Figma (114x48 SVGs in /public/logos). */
export function BrandLogo({ company, className }: { company: Company; className?: string }) {
  return (
    <Image
      src={`/logos/${company}.svg`}
      alt={names[company]}
      width={114}
      height={48}
      unoptimized
      className={cn("h-10 w-auto select-none sm:h-12", className)}
    />
  );
}
