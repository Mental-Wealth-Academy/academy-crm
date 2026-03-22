"use client";

import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const stepColors = [
  { dot: "border-[#5168FF]", text: "text-[#5168FF]" },
  { dot: "border-[#50599B]", text: "text-[#50599B]" },
  { dot: "border-[#9724A6]", text: "text-[#9724A6]" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6">
        <MotionWrapper variants={fadeInUp} className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium tracking-wider text-[#5168FF] uppercase">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1B24] lg:text-4xl">
            Go from zero to mastering your mindset
          </h2>
        </MotionWrapper>

        <MotionWrapper
          variants={staggerContainer}
          className="relative flex flex-col gap-12 lg:gap-16"
        >
          {/* Connecting dashed line */}
          <div className="absolute top-8 bottom-8 left-6 hidden w-px lg:left-[calc(50%-0.5px)] lg:block">
            <div className="h-full w-full border-l border-dashed border-[#5168FF]/20" />
          </div>

          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const color = stepColors[i];
            return (
              <MotionWrapper
                key={step.step}
                variants={fadeInUp}
                className={`relative grid gap-8 lg:grid-cols-2 lg:gap-16`}
              >
                {/* Step info */}
                <div className={`flex flex-col gap-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 ${color.dot} bg-white text-lg font-bold ${color.text}`}>
                      {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1A1B24]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-[rgba(26,27,36,0.6)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Code block */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white/95 backdrop-blur-sm overflow-hidden shadow-[0_4px_16px_rgba(81,104,255,0.08)]">
                    <div className="flex items-center gap-2 border-b border-[rgba(0,0,0,0.08)] px-4 py-2.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                      <span className="ml-2 text-xs text-[rgba(26,27,36,0.4)] font-mono">
                        {step.step === 1 ? "workflow.ts" : "terminal"}
                      </span>
                    </div>
                    <pre className="overflow-x-auto p-4 text-xs leading-relaxed sm:text-sm">
                      <code className="font-mono text-[#1A1B24]/80 whitespace-pre">
                        {step.code}
                      </code>
                    </pre>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
