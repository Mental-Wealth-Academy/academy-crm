"use client";

import { Icon } from "@/components/ui/icon";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { FEATURES } from "@/lib/constants";
import type { IconName } from "@/types";

const iconColors: Record<string, { bg: string; text: string; accent: string }> = {
  workflow: { bg: "bg-[#5168FF]/10", text: "text-[#5168FF]", accent: "bg-[#5168FF]" },
  crosschain: { bg: "bg-[#50599B]/10", text: "text-[#50599B]", accent: "bg-[#50599B]" },
  code: { bg: "bg-[#5168FF]/10", text: "text-[#5168FF]", accent: "bg-[#5168FF]" },
  shield: { bg: "bg-[#9724A6]/10", text: "text-[#9724A6]", accent: "bg-[#9724A6]" },
  monitor: { bg: "bg-[#50599B]/10", text: "text-[#50599B]", accent: "bg-[#50599B]" },
  globe: { bg: "bg-[#9724A6]/10", text: "text-[#9724A6]", accent: "bg-[#9724A6]" },
};

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6">
        <MotionWrapper variants={fadeInUp} className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium tracking-wider text-[#5168FF] uppercase">
            Why Students Choose MWA
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1B24] lg:text-4xl">
            Everything your growth journey{" "}
            <span className="text-[#5168FF]">
              needs
            </span>
          </h2>
        </MotionWrapper>

        <MotionWrapper
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => {
            const colors = iconColors[feature.icon] || iconColors.workflow;
            return (
              <MotionWrapper
                key={feature.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-xl border border-[rgba(0,0,0,0.08)] bg-white/95 p-6 transition-all duration-300 hover:border-[rgba(0,0,0,0.14)] hover:shadow-[0_4px_16px_rgba(81,104,255,0.08)]"
              >
                {/* Colored top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${colors.accent} opacity-40 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                  <Icon name={feature.icon as IconName} size={20} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#1A1B24]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[rgba(26,27,36,0.6)]">
                  {feature.description}
                </p>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
