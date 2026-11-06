"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { Starburst } from "@/components/shared/starburst";
import { whyMe } from "@/data/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type ColumnProps = {
  heading: string;
  items: readonly string[];
  muted?: boolean;
  avatar: React.ReactNode;
};

function Column({ heading, items, muted, avatar }: ColumnProps) {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-center text-xl font-bold uppercase md:text-2xl">{heading}</h3>
      <div className="mx-auto size-20 shrink-0 overflow-hidden rounded-full bg-neutral-950">
        {avatar}
      </div>
      <motion.ul
        variants={stagger(0.05, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-center gap-3 border-b border-neutral-900 py-5 last:border-b-0"
          >
            <Starburst muted={muted} className="size-6" />
            <span className={muted ? "text-lg font-light text-neutral-500" : "text-base font-semibold"}>
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export function WhyChooseMe() {
  return (
    <section id="why" className="scroll-mt-20 px-5 py-20 md:px-10 lg:py-28 xl:px-32">
      <div className="mx-auto max-w-[860px]">
        <SectionHeader label={whyMe.label} title={whyMe.title} />

        <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-12 lg:mt-16">
          <Column
            heading={whyMe.me.heading}
            items={whyMe.me.items}
            avatar={<Image src="/images/avatar-me.png" alt="Edwin Anderson" width={80} height={80} className="size-full object-cover" />}
          />
          <Column
            heading={whyMe.others.heading}
            items={whyMe.others.items}
            muted
            avatar={
              <svg viewBox="0 0 80 80" className="size-full" aria-hidden>
                <circle cx="40" cy="27" r="12" fill="#FDFDFD" />
                <ellipse cx="40" cy="53.5" rx="17.5" ry="12" fill="#FDFDFD" />
              </svg>
            }
          />
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild className="h-12 w-[170px]">
            <a href="#contact">{whyMe.cta}</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
