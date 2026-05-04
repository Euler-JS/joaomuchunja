import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Muchunja - Full Stack Developer",
  description: "Portfólio profissional de João Muchunja - Desenvolvedor Full Stack especializado em Laravel, Node.js, Flutter, React Native e Next.js",
  keywords: "desenvolvedor, full stack, Laravel, Node.js, Flutter, React Native, Next.js, Moçambique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
