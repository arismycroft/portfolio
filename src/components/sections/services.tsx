"use client";

import { motion } from "framer-motion";
import { Monitor } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { services } from "@/data/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 px-5 py-20 md:px-10 lg:py-28 xl:px-32">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader label={services.label} title={<>My Service<br />Expertise</>} align="left" />
          <Reveal delay={0.1} className="max-w-[360px] text-base leading-7 text-neutral-400 md:text-right">
            <p>{services.description}</p>
          </Reveal>
        </div>

        <motion.ul
          className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16"
          variants={stagger(0.05, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {services.items.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex flex-col gap-5"
            >
              <span className="text-base text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
              <hr className="border-neutral-800 transition-colors group-hover:border-primary-300" />
              <Monitor className="size-6 text-primary-200" strokeWidth={1.5} />
              <h3 className="text-2xl leading-8 font-medium">{item.title}</h3>
              <p className="text-base leading-7 text-neutral-400">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
