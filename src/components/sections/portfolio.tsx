"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { portfolio } from "@/data/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Portfolio() {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-20 md:px-10 lg:py-28 xl:px-32">
      <div className="mx-auto max-w-[1184px]">
        <SectionHeader label={portfolio.label} title={portfolio.title} />

        <motion.ul
          className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16"
          variants={stagger(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {portfolio.items.map((item, i) => (
            <motion.li key={i} variants={fadeUp}>
              <a href={item.href} className="group block" aria-label={`${portfolio.cta}: ${item.title}`}>
                <div className="relative aspect-[271/202] overflow-hidden rounded-2xl bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="flex size-[70px] scale-75 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-950 uppercase transition-transform duration-300 group-hover:scale-100 group-focus-visible:scale-100">
                      {portfolio.cta}
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 max-w-[360px] text-xl leading-7 font-bold md:text-2xl md:leading-9">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400 md:text-base md:leading-[30px]">{item.description}</p>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
