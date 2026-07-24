import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marlowe & Vale — Distinctive Homes",
  description:
    "A boutique real estate studio pairing exceptional homes with the people who will love them. Browse our portfolio of available properties.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3efe6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${inter.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
