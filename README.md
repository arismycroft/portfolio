# Portfolio — Edwin Anderson

Next.js (App Router) + Tailwind CSS v4 + shadcn/ui pattern + Radix UI + Framer Motion.
Diambil dari desain Figma "Portfolio 8 – REP".

## Jalankan lokal

```bash
npm install
cp .env.example .env.local   # isi CONTACT_WEBHOOK_URL
npm run dev                  # http://localhost:3000
```

## Struktur

```
public/images/        gambar hasil ekspor Figma (foto, thumbnail project)
src/app/              layout, page, globals.css (design tokens), api/contact
src/components/ui/    Button, Dialog (gaya shadcn + Radix)
src/components/shared reveal, section-header, starburst, checker-decor, dll
src/components/sections  header, hero, services, about, skills, why-choose-me,
                         work, portfolio, testimonials, faq, contact, footer
src/data/content.ts   seluruh teks konten (edit di sini)
src/lib/              utils (cn), motion (variants Framer Motion)
```

> Catatan: dipakai App Router (`src/app`) — pengganti folder `/pages` di Next.js modern.

## Gambar & aset

Semua gambar dan ikon diekspor dari Figma:
- `public/images/` — foto hero (`hero-portrait.png`), contact (`contact-bw.png`), avatar (`avatar-me.png`),
  3 gambar About (`about-1/2/3.png`), 6 thumbnail project (`project-1…6.png`).
- `public/icons/skills/` — ikon skill, `public/logos/` — logo klien, `public/social/` — ikon sosial,
  `public/illustrations/` — ilustrasi amplop untuk popup.

Ganti dengan aset sendiri dengan menimpa file bernama sama.

## Form kontak

`/api/contact` meneruskan `{ name, email, message }` ke `CONTACT_WEBHOOK_URL`
(Formspree, Make, Zapier, Discord/Slack webhook, dll). Tanpa variabel ini, form menampilkan
popup "Message not sent!".

Preview popup saat development: buka `/?popup=success` atau `/?popup=error`.

## Deploy

1. Push ke GitHub (repo public).
2. Vercel → Add New Project → import repo → tambahkan env `CONTACT_WEBHOOK_URL` → Deploy.
