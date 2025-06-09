import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const geistRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tropa Digital",
  description: "Teste Painel - Tropa Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br">
      <body className={`${geistRoboto.variable}`}>{children}</body>
    </html>
  );
}
