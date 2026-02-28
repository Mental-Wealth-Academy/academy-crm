"use client";

import { Icon } from "@/components/ui/icon";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { FEATURES } from "@/lib/constants";
import type { IconName } from "@/types";

const iconColors: Record<string, { bg: string; text: string; glow: string; accent: string }> = {
  workflow: { bg: "bg-purple-500/10", text: "text-purple-400", glow: "group-hover:shadow-purple-500/20", accent: "bg-purple-500" },
  crosschain: { bg: "bg-blue-500/10", text: "text-blue-400", glow: "group-hover:shadow-blue-500/20", accent: "bg-blue-500" },
  code: { bg: "bg-cyan-400/10", text: "text-cyan-400", glow: "group-hover:shadow-cyan-400/20", accent: "bg-cyan-400" },
  shield: { bg: "bg-fuchsia-500/10", text: "text-fuchsia-400", glow: "group-hover:shadow-fuchsia-500/20", accent: "bg-fuchsia-500" },
  monitor: { bg: "bg-emerald-400/10", text: "text-emerald-400", glow: "group-hover:shadow-emerald-400/20", accent: "bg-emerald-400" },
  globe: { bg: "bg-rose-400/10", text: "text-rose-400", glow: "group-hover:shadow-rose-400/20", accent: "bg-rose-400" },
};

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-32">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-purple-500/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <MotionWrapper variants={fadeInUp} className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium tracking-wider text-purple-400 uppercase">
            Why Businesses Choose Azura
          </p>
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Everything your digital treasury{" "}
            <span className="text-cyan-400">
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
                className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] hover:shadow-lg ${colors.glow}`}
              >
                {/* Colored top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${colors.accent} opacity-40 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                  <Icon name={feature.icon as IconName} size={20} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-50">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
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
