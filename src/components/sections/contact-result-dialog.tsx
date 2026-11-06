"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { contact } from "@/data/content";

type Props = {
  open: boolean;
  variant: "success" | "error";
  onClose: () => void;
};

/** Envelope illustration exported from Figma (circle backdrop + SVG). */
function ResultIllustration({ error }: { error: boolean }) {
  return (
    <div
      aria-hidden
      className="absolute -top-[70px] left-1/2 flex size-[140px] -translate-x-1/2 items-center justify-center rounded-full bg-primary-100"
    >
      <Image
        src={error ? "/illustrations/mail-error.svg" : "/illustrations/mail-success.svg"}
        alt=""
        width={128}
        height={98}
        unoptimized
        className="h-auto w-[100px]"
      />
    </div>
  );
}

export function ContactResultDialog({ open, variant, onClose }: Props) {
  const isError = variant === "error";
  const copy = isError ? contact.error : contact.success;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <ResultIllustration error={isError} />
        <DialogTitle className="text-xl font-bold">{copy.title}</DialogTitle>
        <DialogDescription className="mt-4 text-base leading-8 text-neutral-200">
          {copy.description}
        </DialogDescription>
        <Button
          className="mt-6 h-12 w-full max-w-[360px]"
          onClick={() => {
            onClose();
            if (!isError) window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {copy.action}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
