"use client";

import { Icon } from "@/components/ui/icon";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { fadeInUp } from "@/lib/motion";
import {
  COMPARISON_DIMENSIONS,
  COMPETITORS,
  AZURA_VALUES,
} from "@/lib/constants";

function CellValue({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/10">
        <Icon name="check" size={12} className="text-success" />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200/50">
        <Icon name="minus" size={12} className="text-gray-400" />
      </span>
    );
  return (
    <span className="inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
      Partial
    </span>
  );
}

export function Comparison() {
  return (
    <section id="compare" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <MotionWrapper variants={fadeInUp} className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium tracking-wider text-[#5168FF] uppercase">
            Compare
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1B24] lg:text-4xl">
            Why learners{" "}
            <span className="text-[#5168FF]">
              choose MWA
            </span>
          </h2>
        </MotionWrapper>

        <MotionWrapper variants={fadeInUp}>
          <div className="overflow-x-auto rounded-xl border border-[rgba(0,0,0,0.08)] bg-white/95 shadow-[0_4px_16px_rgba(81,104,255,0.08)]">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-[rgba(0,0,0,0.08)]">
                  <th className="px-5 py-4 text-left font-medium text-[rgba(26,27,36,0.6)]">
                    Feature
                  </th>
                  {COMPETITORS.map((c) => (
                    <th
                      key={c.name}
                      className="px-4 py-4 text-center font-medium text-[rgba(26,27,36,0.5)]"
                    >
                      {c.name}
                    </th>
                  ))}
                  <th className="relative px-5 py-4 text-center font-bold text-[#5168FF] border-l border-[rgba(0,0,0,0.08)]">
                    <span className="relative">
                      MWA
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#5168FF]/60 rounded-full" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DIMENSIONS.map((dim) => (
                  <tr
                    key={dim.key}
                    className="border-b border-[rgba(0,0,0,0.05)] last:border-b-0 transition-colors hover:bg-[#5168FF]/[0.03]"
                  >
                    <td className="px-5 py-3.5 font-medium text-[#1A1B24]">
                      {dim.label}
                    </td>
                    {COMPETITORS.map((c) => (
                      <td key={c.name} className="px-4 py-3.5 text-center">
                        <div className="flex justify-center">
                          <CellValue
                            value={c.values[dim.key as keyof typeof c.values]}
                          />
                        </div>
                      </td>
                    ))}
                    <td className="px-5 py-3.5 text-center border-l border-[rgba(0,0,0,0.08)] bg-[#5168FF]/[0.04]">
                      <div className="flex justify-center">
                        <CellValue
                          value={AZURA_VALUES[dim.key as keyof typeof AZURA_VALUES]}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
