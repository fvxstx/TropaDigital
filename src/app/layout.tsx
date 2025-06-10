import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "@/styles/globals.scss";

const geistRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
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
      <body className={`${geistRoboto.variable}  ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
