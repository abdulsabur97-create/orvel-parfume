import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orvel Parfume — Scent is Memory",
  description: "Премиальные ароматы и персонализированные подарочные боксы. Luxury experience — каждая деталь создана для эмоций.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
