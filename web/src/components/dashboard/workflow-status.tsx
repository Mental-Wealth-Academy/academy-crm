"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { MOCK_WORKFLOWS, CHAINLINK_PRODUCT_LABELS, PRIVACY_LABELS } from "@/lib/constants";
import type { WorkflowStatus, PrivacyLevel } from "@/types";

const statusColor: Record<WorkflowStatus, string> = {
  active: "bg-success",
  paused: "bg-warning",
  error: "bg-error",
};

const privacyGlow: Record<PrivacyLevel, string> = {
  standard: "",
  encrypted: "ring-1 ring-cyan-400/40",
  confidential: "ring-1 ring-purple-400/40",
};

export function AutomationStatusCard() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const activeCount = MOCK_WORKFLOWS.filter((w) => w.status === "active").length;
  const pausedCount = MOCK_WORKFLOWS.filter((w) => w.status === "paused").length;

  return (
    <Card className="relative flex flex-col overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="flex items-center justify-between p-6 pb-3">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold text-gray-50">CRE Workflows</h3>
          <p className="text-sm text-gray-500">
            {activeCount} active, {pausedCount} paused
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-purple-400 hover:shadow-glow">
          <Icon name="plus" size={14} />
          New
        </button>
      </div>

      <div className="flex-1 px-6 pb-6">
        <div className="flex flex-col">
          {MOCK_WORKFLOWS.map((wf, i) => (
            <div key={wf.id}>
              <button
                onClick={() => setExpanded(expanded === wf.id ? null : wf.id)}
                className={`flex w-full items-center justify-between py-3 text-left ${
                  i !== MOCK_WORKFLOWS.length - 1 && expanded !== wf.id
                    ? "border-b border-white/[0.04]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`relative flex h-2.5 w-2.5 shrink-0 rounded-full ${privacyGlow[wf.privacy]}`}>
                    {wf.status === "active" && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
                    )}
                    <span
                      className={`relative inline-flex h-2.5 w-2.5 rounded-full ${statusColor[wf.status]}`}
                    />
                  </span>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-50">
                        {wf.name}
                      </span>
                      {wf.privacy !== "standard" && (
                        <span className={`inline-flex items-center gap-1 text-[10px] ${PRIVACY_LABELS[wf.privacy].color}`}>
                          <Icon name="lock" size={10} />
                          {PRIVACY_LABELS[wf.privacy].label}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {wf.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-gray-400"
                        >
                          {CHAINLINK_PRODUCT_LABELS[cap]}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      Next: {wf.nextRun}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.06] text-gray-400 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-gray-50"
                    aria-label={wf.status === "active" ? "Pause" : "Resume"}
                  >
                    <Icon
                      name={wf.status === "active" ? "pause" : "play"}
                      size={14}
                    />
                  </span>
                </div>
              </button>
              {expanded === wf.id && (
                <div
                  className={`pb-3 pl-8 text-xs text-gray-400 ${
                    i !== MOCK_WORKFLOWS.length - 1
                      ? "border-b border-white/[0.04]"
                      : ""
                  }`}
                >
                  {wf.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
