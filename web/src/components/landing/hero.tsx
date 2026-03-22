"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/* ── Soft light background ─────────────────────────────────────── */
function LightBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Subtle primary glow top-right */}
      <div className="absolute -top-32 right-1/4 h-[600px] w-[600px] rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "radial-gradient(circle, #5168FF 0%, #7B8FFF 40%, transparent 70%)" }} />
      {/* Soft accent glow bottom-left */}
      <div className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: "radial-gradient(circle, #9724A6 0%, #C77DDC 40%, transparent 70%)" }} />
      {/* Warm glow center-right */}
      <div className="absolute top-1/2 right-[10%] h-[400px] w-[400px] rounded-full opacity-[0.05] blur-[100px]"
        style={{ background: "radial-gradient(circle, #50599B 0%, transparent 60%)" }} />
    </div>
  );
}

/* ── Main hero ─────────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const reduced = useReducedMotion();

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#FBF8FF]">
      {/* Layered bg */}
      <LightBackground />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FBF8FF] to-transparent z-20" />

      {/* Content */}
      <motion.div
        style={reduced ? {} : { y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] items-center px-6"
      >
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0 items-end lg:items-center">

          {/* ── Left: Azura character ──────────────────────────── */}
          <div className="relative hidden lg:col-span-5 lg:flex lg:items-end lg:justify-start lg:self-end -ml-6">
            {/* Soft glow behind character */}
            <div className="absolute bottom-0 left-1/3 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-[#5168FF]/[0.07] blur-[80px]" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 translate-y-8"
            >
              <Image
                src="/azura-hero.webp"
                alt="Mental Wealth Academy"
                width={580}
                height={773}
                className="h-auto w-full max-w-[520px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(81,104,255,0.12)]"
                priority
              />
            </motion.div>
          </div>

          {/* ── Right: Copy + CTAs ────────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 py-32 lg:col-span-7 lg:py-0 lg:pl-8"
          >
            <motion.div variants={item}>
              <Badge variant="info" className="w-fit gap-1.5 border border-[#5168FF]/20 bg-[#5168FF]/[0.08] text-[#5168FF] px-3 py-1 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5168FF] animate-pulse" />
                Mental Wealth Academy
              </Badge>
            </motion.div>

            <motion.div variants={item}>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl font-[Poppins,sans-serif]">
                <span className="block text-[#1A1B24]">Unlock Your Full</span>
                <span className="block text-[#5168FF] mt-1">
                  Mental Wealth.
                </span>
              </h1>
            </motion.div>

            <motion.div variants={item}>
              <p className="max-w-lg text-lg leading-relaxed text-[#1A1B24]/60">
                Build better habits, boost productivity, and grow your wealth
                mindset. The Mental Wealth Academy combines AI-powered coaching,
                structured courses, and a supportive community to help you
                reach your highest potential.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-[#5168FF] hover:bg-[#3f53e0] text-white border border-[#5168FF]/30 shadow-[0_4px_16px_rgba(81,104,255,0.3),0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_24px_rgba(81,104,255,0.4),0_2px_6px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-lg"
                >
                  Start Learning
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                className="border border-[rgba(0,0,0,0.08)] bg-white/80 text-[#1A1B24] backdrop-blur-sm hover:bg-white hover:border-[rgba(0,0,0,0.12)] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                Explore Courses
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div variants={item} className="flex items-center gap-6 pt-3">
              {[
                { label: "Mental Modules", value: "50+", color: "text-[#9724A6]" },
                { label: "Active Members", value: "2,400+", color: "text-[#5168FF]" },
                { label: "Wealth Courses", value: "30+", color: "text-[#50599B]" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
                  <span className="text-[11px] text-[#1A1B24]/40 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Mobile: character below content */}
      <div className="relative z-10 flex justify-center lg:hidden -mt-8">
        <div className="relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[280px] w-[280px] rounded-full bg-[#5168FF]/[0.07] blur-[60px]" />
          <Image
            src="/azura-hero.webp"
            alt="Mental Wealth Academy"
            width={380}
            height={507}
            className="relative h-auto w-[320px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(81,104,255,0.12)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
