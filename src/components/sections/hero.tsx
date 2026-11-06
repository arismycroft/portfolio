"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckerDecor } from "@/components/shared/checker-decor";
import { StarRating } from "@/components/shared/star-rating";
import { hero } from "@/data/content";
import { easeOut, fadeUp, stagger } from "@/lib/motion";

function RatingCard({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`rounded-2xl border border-neutral-800 bg-black p-5 lg:p-[19px] ${className ?? ""}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: easeOut }}
    >
      <p className="text-[28px] leading-8 font-bold lg:text-4xl lg:leading-[56px]">{hero.rating.score}</p>
      <StarRating className="my-2 lg:gap-0" starClassName="lg:size-8" />
      <p className="text-base lg:text-xl lg:leading-[34px]">{hero.rating.caption}</p>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden border-b border-neutral-800 pt-20">
      {/* faint vertical guide lines (desktop) */}
      <span aria-hidden className="absolute top-0 left-[26%] hidden h-full w-px bg-neutral-800/50 lg:block" />
      <span aria-hidden className="absolute top-0 left-[49%] hidden h-full w-px bg-neutral-800/50 lg:block" />

      {/* Portrait (desktop) — photo already includes the green half */}
      <motion.div
        className="absolute top-0 hidden h-[874px] w-[min(660px,46vw)] lg:block"
        style={{ right: "max(0px, calc(50% - 720px))" }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
      >
        <div className="absolute top-0 left-[-1.5%] h-[101.6%] w-[102.8%]">
          <Image
            src="/images/hero-portrait.png"
            alt="Portrait of Edwin Anderson"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 0vw"
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col justify-center gap-10 px-4 py-10 md:px-10 lg:min-h-[794px] lg:py-24 xl:px-32">
        <motion.div
          className="flex max-w-[800px] flex-col gap-6"
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="flex items-center gap-4 text-base text-white sm:text-lg">
            <span aria-hidden className="h-px w-16 shrink-0 bg-neutral-300 sm:w-[114px]" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[40px] leading-[48px] font-bold uppercase sm:text-6xl lg:text-[72px] lg:leading-[80px]"
          >
            <span>Building fast &amp; </span>
            <span className="text-primary-200">interactive</span>
            <span> web experiences.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-[560px] text-base leading-8 text-neutral-400 sm:text-xl">
            {hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="pt-4">
            <Button asChild size="lg">
              <a href="#contact">{hero.cta}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile portrait block */}
      <div className="relative mx-auto aspect-[393/513] w-full max-w-[520px] overflow-hidden lg:hidden">
        <div className="absolute top-[10px] left-[-1.5%] w-[103%]">
          <Image
            src="/images/hero-portrait.png"
            alt="Portrait of Edwin Anderson"
            width={2010}
            height={2643}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <CheckerDecor pattern="wide-a" className="bottom-[110px] left-0" />
        <RatingCard className="absolute inset-x-5 bottom-[38px] mx-auto max-w-[420px]" />
      </div>

      <RatingCard className="absolute right-[calc(max(0px,50%-720px)+min(158px,11vw))] bottom-[84px] hidden w-[316px] lg:block" delay={0.7} />

      <CheckerDecor pattern="wide-a" className="bottom-0 left-0 hidden lg:grid" />
    </section>
  );
}
