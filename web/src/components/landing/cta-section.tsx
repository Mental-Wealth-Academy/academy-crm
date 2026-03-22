"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <MotionWrapper
          variants={staggerContainer}
          className="relative overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/95 px-8 py-16 text-center lg:px-16 lg:py-20 shadow-[0_4px_24px_rgba(81,104,255,0.1)]"
        >
          {/* Subtle background accent */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-[#5168FF]/[0.05] blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-[#7586FF]/[0.04] blur-[80px]" />

          {/* Dot grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(81,104,255,0.1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <MotionWrapper variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1B24] lg:text-4xl">
                Ready to unlock your{" "}
                <span className="text-[#5168FF]">full potential</span>?
              </h2>
            </MotionWrapper>

            <MotionWrapper variants={fadeInUp}>
              <p className="max-w-lg text-lg text-[rgba(26,27,36,0.6)]">
                Join Mental Wealth Academy and access world-class courses,
                mentorship, and tools to transform your personal and professional growth.
              </p>
            </MotionWrapper>

            <MotionWrapper variants={fadeInUp}>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="shadow-[0_4px_16px_rgba(81,104,255,0.3)] hover:shadow-[0_4px_24px_rgba(81,104,255,0.45)] transition-all duration-200"
                  >
                    Start Learning
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Explore Courses
                </Button>
              </div>
            </MotionWrapper>

            <MotionWrapper variants={fadeInUp}>
              <p className="text-sm text-[rgba(26,27,36,0.5)]">
                Free trial available &middot; No credit card required
              </p>
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
