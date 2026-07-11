import type { Metadata } from "next";
import "./globals.css";
import "./motion.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: "Hudi Labs | Produtos digitais que escalam",
  description: "A Hudi Labs é um laboratório de inovação que cria produtos digitais claros, robustos e conectados.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
