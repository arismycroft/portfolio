"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { skills } from "@/data/content";
import { easeOut, fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skill" className="scroll-mt-20 px-5 py-20 md:px-10 lg:py-28 xl:px-32">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeader label={skills.label} title={skills.title} align="left" />

          <motion.ul
            className="grid grid-cols-4 gap-3 sm:max-w-[320px]"
            variants={stagger(0.1, 0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {skills.icons.map((icon) => (
              <motion.li
                key={icon.name}
                variants={fadeUp}
                whileHover={{ scale: 1.12, rotate: -4 }}
                className="flex size-[58px] items-center justify-center rounded-full border border-neutral-800 bg-neutral-950"
                title={icon.name}
              >
                <Image src={icon.src} alt={icon.name} width={46} height={46} unoptimized className="size-[46px] rounded-full object-contain" />
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <ul className="flex flex-col gap-4">
          {skills.bars.map((bar, i) => (
            <li key={`${bar.name}-${i}`} className="flex items-center gap-4">
              <div className="relative flex h-[45px] min-w-0 flex-1 items-center">
                <span aria-hidden className="absolute inset-x-0 h-px bg-neutral-800" />
                <motion.div
                  className="bar-stripes relative flex h-full items-center rounded-2xl bg-primary-300 px-4 text-sm"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.value}%` }}
                  viewport={viewportOnce}
                  transition={{ duration: 1, delay: 0.1 * i, ease: easeOut }}
                >
                  <span className="truncate">{bar.name}</span>
                </motion.div>
              </div>
              <span className="w-12 shrink-0 text-sm text-neutral-300">{bar.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
