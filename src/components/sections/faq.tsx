"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { Starburst } from "@/components/shared/starburst";
import { faq } from "@/data/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 px-5 py-20 md:px-10 lg:py-28 xl:px-32">
      <div className="mx-auto max-w-[920px]">
        <SectionHeader label={faq.label} title={faq.title} />

        <motion.ul
          className="mt-12 grid md:grid-cols-2 lg:mt-16"
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {faq.items.map((item, i) => (
            <motion.li
              key={item.q}
              variants={fadeUp}
              className={cn(
                "flex flex-col gap-4 border-b border-neutral-800 py-8",
                // desktop: divider between columns, last row has no bottom border
                i % 2 === 0 ? "md:border-r md:pr-8" : "md:pl-8",
                i >= faq.items.length - 2 && "md:border-b-0",
                i === faq.items.length - 1 && "border-b-0",
              )}
            >
              <div className="flex items-start gap-3">
                <Starburst className="mt-0.5" />
                <h3 className="text-lg leading-7 font-semibold md:text-xl">{item.q}</h3>
              </div>
              <p className="text-sm leading-6 text-neutral-400">{item.a}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
