"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/shared/brand-logo";
import { SectionHeader } from "@/components/shared/section-header";
import { StarRating } from "@/components/shared/star-rating";
import { testimonials } from "@/data/content";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 4;

export function Testimonials() {
  const pageCount = Math.max(1, Math.ceil(testimonials.items.length / PAGE_SIZE));
  const [page, setPage] = useState(0);

  const visible = testimonials.items.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const canPrev = page > 0;
  const canNext = page < pageCount - 1;

  const navBtn = "flex size-10 items-center justify-center rounded-full border border-neutral-800 transition-colors";

  return (
    <section id="testimonials" className="scroll-mt-20 px-5 py-20 md:px-10 lg:py-28 xl:px-32">
      <div className="mx-auto max-w-[840px]">
        <SectionHeader label={testimonials.label} title={testimonials.title} />

        <AnimatePresence mode="wait">
          <motion.ul
            key={page}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            {visible.map((t) => (
              <motion.li
                key={t.name}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-neutral-800 bg-black p-4 transition-colors hover:border-primary-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold">{t.name}</p>
                    <p className="mt-2 text-sm text-neutral-400">{t.role}</p>
                  </div>
                  <BrandLogo company={t.company} className="shrink-0" />
                </div>
                <StarRating className="my-3" />
                <p className="text-sm leading-6">{t.quote}</p>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonials"
            disabled={!canPrev}
            onClick={() => setPage((p) => p - 1)}
            className={cn(navBtn, canPrev ? "text-primary-200 hover:border-primary-200" : "cursor-not-allowed text-neutral-700")}
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            // With only one page the arrow stays highlighted, like the design.
            disabled={pageCount > 1 && !canNext}
            onClick={() => canNext && setPage((p) => p + 1)}
            className={cn(navBtn, "text-primary-200 hover:border-primary-200 disabled:cursor-not-allowed disabled:text-neutral-700")}
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
