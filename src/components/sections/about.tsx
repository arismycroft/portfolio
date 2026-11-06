"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckerDecor } from "@/components/shared/checker-decor";
import { Reveal } from "@/components/shared/reveal";
import { about } from "@/data/content";

const float = (delay: number) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" as const },
});

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden border-y border-neutral-800 px-4 pt-10 pb-0 md:px-10 lg:pt-[120px] lg:pb-32 xl:px-32">
      {/* Floating project shots (desktop only) — positions follow the 1440px Figma frame, centered */}
      <motion.div aria-hidden {...float(0)} className="pointer-events-none absolute top-[37px] left-[calc(50%-468px)] hidden w-[238px] lg:block">
        <Image src="/images/about-1.png" alt="" width={476} height={356} className="h-auto w-full" />
      </motion.div>
      <motion.div aria-hidden {...float(1.5)} className="pointer-events-none absolute top-[74px] left-[calc(50%+291px)] hidden w-[250px] lg:block">
        <Image src="/images/about-2.png" alt="" width={500} height={374} className="h-auto w-full" />
      </motion.div>
      <motion.div aria-hidden {...float(3)} className="pointer-events-none absolute top-[303px] left-[calc(50%+156px)] z-10 hidden w-[117px] lg:block">
        <Image src="/images/about-3.png" alt="" width={234} height={176} className="h-auto w-full" />
      </motion.div>

      <div className="relative mx-auto flex max-w-[880px] lg:max-w-[1000px] flex-col items-center gap-4 text-center">
        <Reveal>
          <span className="text-base leading-6 font-normal text-primary-200 uppercase lg:text-2xl lg:font-bold">{about.label}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[32px] leading-[48px] font-bold uppercase md:text-5xl md:leading-[1.15] lg:text-[56px] lg:leading-[62px]">
            {about.titleLines.map((line) => (
              <span key={line.text} className={`lg:block ${line.highlight ? "text-primary-200" : ""}`}>
                {line.text}{" "}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="max-w-[680px] text-base leading-[30px] text-neutral-400 md:text-lg md:leading-8 lg:mt-[46px] lg:max-w-[900px]">
          <p>{about.description}</p>
        </Reveal>
      </div>

      {/* Floating project shots (mobile / tablet) — below the copy, positions follow the 393px Figma frame */}
      <div className="relative -mx-4 mt-10 h-[288px] md:-mx-10 lg:hidden">
        <div className="relative mx-auto h-full w-full max-w-[393px]">
          <motion.div aria-hidden {...float(0)} className="pointer-events-none absolute top-0 left-[10.2%] w-[43.3%]">
            <Image src="/images/about-1.png" alt="" width={476} height={356} className="h-auto w-full" />
          </motion.div>
          <motion.div aria-hidden {...float(1.5)} className="pointer-events-none absolute top-[45px] left-[57.3%] w-[33.8%]">
            <Image src="/images/about-2.png" alt="" width={500} height={374} className="h-auto w-full" />
          </motion.div>
          <motion.div aria-hidden {...float(3)} className="pointer-events-none absolute top-[164px] left-[36.6%] w-[33.8%]">
            <Image src="/images/about-3.png" alt="" width={234} height={176} className="h-auto w-full" />
          </motion.div>
        </div>
        <CheckerDecor pattern="tall-a" className="bottom-2 left-0" />
      </div>

      <CheckerDecor pattern="tall-a" className="bottom-0 left-0 hidden lg:grid" />
    </section>
  );
}
