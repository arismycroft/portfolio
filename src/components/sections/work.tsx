"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/shared/brand-logo";
import { CheckerDecor } from "@/components/shared/checker-decor";
import { SectionHeader } from "@/components/shared/section-header";
import { work } from "@/data/content";
import { easeOut, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-20 overflow-hidden px-5 py-20 md:px-10 lg:py-28 xl:px-32">
      <div className="mx-auto max-w-[840px]">
        <SectionHeader label={work.label} title={work.title} />

        <ol className="relative mt-12 lg:mt-16">
          {/* vertical line */}
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-[17px] w-px bg-neutral-800 md:left-1/2 md:-translate-x-1/2"
          />

          {work.items.map((item, i) => {
            const right = i % 2 === 0; // desktop: 1st and 3rd on the right
            return (
              <li
                key={i}
                className="relative pb-8 pl-14 last:pb-0 md:flex md:min-h-[200px] md:items-center md:pb-0 md:pl-0"
              >
                <span className="absolute top-4 left-0 z-10 flex size-[34px] items-center justify-center rounded-full border border-neutral-800 bg-black text-xs text-primary-200 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  {i + 1}
                </span>

                <motion.article
                  initial={{ opacity: 0, x: right ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, ease: easeOut }}
                  whileHover={{ y: -4 }}
                  className={cn(
                    "w-full rounded-2xl border border-neutral-800 bg-black p-5 transition-colors hover:border-primary-300 md:w-[calc(50%-34px)]",
                    right ? "md:ml-auto" : "md:mr-auto",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-neutral-300">{item.period}</p>
                      <h3 className="mt-2 text-lg font-bold">{item.role}</h3>
                    </div>
                    <BrandLogo company={item.company} className="shrink-0" />
                  </div>
                  <p className="mt-3 text-xs leading-6 text-neutral-400 md:text-[13px]">{item.description}</p>
                </motion.article>
              </li>
            );
          })}
        </ol>
      </div>

      <CheckerDecor pattern="tall-b" className="right-0 bottom-0" />
    </section>
  );
}
