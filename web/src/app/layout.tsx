import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Web3Provider } from "@/components/shared/web3-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azura — AI-Managed Digital Treasury for Your Business",
  description:
    "Add Bitcoin, Ethereum, and stablecoins to your company's treasury. Azura's AI agent handles rebalancing, payroll, and cross-chain transfers automatically.",
  keywords: [
    "digital treasury",
    "business crypto",
    "AI treasury management",
    "Bitcoin",
    "Ethereum",
    "stablecoins",
    "Chainlink",
    "cross-chain",
    "payroll",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-gray-950 font-sans text-gray-50 antialiased">
        <HeroUIProvider>
          <ThemeProvider>
            <Web3Provider>{children}</Web3Provider>
          </ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
