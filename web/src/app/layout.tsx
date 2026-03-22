import type { Metadata } from "next";
import { Poppins, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Web3Provider } from "@/components/shared/web3-provider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mental Wealth Academy — Your Mind, Productivity & Wealth Platform",
  description:
    "Mental Wealth Academy is an all-in-one academy and CRM platform for mental health, productivity, and wealth-building. Track progress, manage clients, and grow.",
  keywords: [
    "mental health",
    "productivity",
    "wealth",
    "academy",
    "CRM",
    "personal development",
    "coaching",
    "mental wealth",
    "learning platform",
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
      className={`${poppins.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen font-sans antialiased"
        style={{ backgroundColor: "var(--mwa-bg)", color: "var(--mwa-text-dark)" }}
      >
        <HeroUIProvider>
          <ThemeProvider>
            <Web3Provider>{children}</Web3Provider>
          </ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
