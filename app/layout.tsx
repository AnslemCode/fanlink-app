// src/app/layout.tsx
import type { Metadata } from "next";
import { Work_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider/providers";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Fanlink - Share Your Music",
  description: "Share your music across all streaming platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${plusJakarta.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
