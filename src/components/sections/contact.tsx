"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckerDecor } from "@/components/shared/checker-decor";
import { Reveal } from "@/components/shared/reveal";
import { ContactResultDialog } from "@/components/sections/contact-result-dialog";
import { contact, profile } from "@/data/content";

type Status = "idle" | "sending" | "success" | "error";

const socialIcons = {
  Dribbble: "/social/dribbble.svg",
  Instagram: "/social/instagram.svg",
  LinkedIn: "/social/linkedin.svg",
} as const;

const fieldClass =
  "w-full rounded-xl border border-neutral-800 bg-black px-4 text-base text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-primary-200";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const open = status === "success" || status === "error";

  // Dev-only preview of the popups: open /?popup=success or /?popup=error
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    const p = new URLSearchParams(window.location.search).get("popup");
    if (p === "success" || p === "error") setStatus(p);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-neutral-800 px-5 py-20 md:px-10 lg:py-28 xl:px-32">
      <CheckerDecor pattern="wide-b" className="top-[91px] left-0 lg:top-0" />
      <CheckerDecor pattern="wide-a" className="right-0 bottom-0" />

      <div className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Portrait + socials */}
        <Reveal className="flex flex-col items-center gap-6">
          <div className="relative aspect-[421/557] w-full max-w-[421px] overflow-hidden">
            <Image
              src="/images/contact-bw.png"
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 421px, 90vw"
              className="object-cover object-top"
            />
          </div>

          <ul className="flex gap-4 sm:gap-6">
            {contact.socials.map((s) => {
              const icon = socialIcons[s.label as keyof typeof socialIcons];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="block rounded-full transition-all hover:-translate-y-1 hover:drop-shadow-[0_4px_12px_rgba(145,255,2,0.35)]"
                  >
                    <Image src={icon} alt="" width={64} height={64} unoptimized className="size-14 sm:size-16" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="text-center">
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-neutral-300">
              <span aria-hidden className="size-2 rounded-full bg-primary-200" />
              {contact.status}
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-primary-200 uppercase">{contact.label}</span>
            <h2 className="text-3xl leading-tight font-bold uppercase md:text-4xl lg:text-5xl">{contact.title}</h2>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate={false}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm">{contact.fields.name}</label>
              <input id="name" name="name" type="text" required autoComplete="name" className={`${fieldClass} h-12`} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">{contact.fields.email}</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={`${fieldClass} h-12`} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm">{contact.fields.message}</label>
              <textarea id="message" name="message" required rows={5} className={`${fieldClass} resize-none py-3`} />
            </div>
            <Button type="submit" disabled={status === "sending"} className="mt-2 h-12 w-full text-sm">
              {status === "sending" ? contact.sending : contact.submit}
            </Button>
          </form>
        </Reveal>
      </div>

      <ContactResultDialog
        open={open}
        variant={status === "success" ? "success" : "error"}
        onClose={() => setStatus("idle")}
      />
    </section>
  );
}
