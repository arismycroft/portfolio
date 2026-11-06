import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ count = 5, className, starClassName }: { count?: number; className?: string; starClassName?: string }) {
  return (
    <div className={cn("flex gap-1.5", className)} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={cn("size-5 fill-star text-star", starClassName)} strokeWidth={0} />
      ))}
    </div>
  );
}
