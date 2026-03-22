"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1A1B24]/60 transition-colors hover:text-[#1A1B24]"
            >
              {link.label}
            </a>
          ))}
          <Link href="/dashboard">
            <Button size="sm" className="bg-[#5168FF] hover:bg-[#3f53e0] text-white shadow-[0_2px_8px_rgba(81,104,255,0.3)] hover:shadow-[0_4px_16px_rgba(81,104,255,0.4)] transition-all duration-300 rounded-lg">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-sm p-2 text-[#1A1B24]/60 hover:bg-[#5168FF]/5 hover:text-[#1A1B24] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <Icon name={mobileOpen ? "x" : "menu"} size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-[rgba(0,0,0,0.08)] bg-white/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1A1B24]/60 transition-colors hover:text-[#1A1B24]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full bg-[#5168FF] hover:bg-[#3f53e0] text-white shadow-[0_2px_8px_rgba(81,104,255,0.3)] rounded-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Rainbow gradient border line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "var(--mwa-rainbow)",
          backgroundSize: "200% 100%",
          animation: "rainbow-slide 4s linear infinite",
        }}
      />
    </nav>
  );
}
