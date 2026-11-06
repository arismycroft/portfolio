import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-red-hat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edwin Anderson — Frontend Developer",
  description:
    "Portfolio of Edwin Anderson, a frontend developer building fast and interactive web experiences.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={redHat.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
