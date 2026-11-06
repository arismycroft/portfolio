import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-5 py-8 text-center">
      <p className="text-sm text-neutral-500">{footer.text}</p>
    </footer>
  );
}
