"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { AZURA_RESPONSES, CHAINLINK_PRODUCT_LABELS } from "@/lib/constants";
import type { AzuraResponse } from "@/types";

type CardState = "idle" | "thinking" | "response";

const SUGGESTIONS = [
  "Rebalance my portfolio",
  "Bridge 10k USDC to Base",
  "Show gas fees across chains",
  "Set up weekly payroll",
];

const FALLBACK_MESSAGE =
  "I can help with portfolio rebalancing, bridging, gas monitoring, and payroll. Try a quick action below.";

function ResponseRenderer({ response }: { response: AzuraResponse }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="text-sm font-bold text-gray-50">{response.title}</h4>
        <p className="mt-1 text-sm text-gray-400">{response.summary}</p>
      </div>

      {response.sections.map((section) => (
        <div key={section.label}>
          <p className="text-xs font-semibold text-purple-400">
            {section.label}
          </p>
          <p className="mt-1 whitespace-pre-line text-xs text-gray-500">
            {section.content}
          </p>
        </div>
      ))}

      {response.table && (
        <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/[0.06]">
                {response.table.headers.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-left font-medium text-gray-400"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {response.table.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={
                    ri !== response.table!.rows.length - 1
                      ? "border-b border-white/[0.06]"
                      : ""
                  }
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-3 py-2 ${ci === 0 ? "text-gray-50" : "text-gray-400"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-600">
          Powered by
        </span>
        {response.chainlinkProducts.map((p) => (
          <Badge key={p} variant="info" className="text-[10px]">
            {CHAINLINK_PRODUCT_LABELS[p]}
          </Badge>
        ))}
      </div>

      {response.privacyAvailable && (
        <div className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-2">
          <Icon name="lock" size={14} className="shrink-0 text-cyan-400" />
          <span className="text-xs text-cyan-400">
            Privacy Shield available for this action
          </span>
        </div>
      )}
    </div>
  );
}

function ThinkingSkeleton() {
  return (
    <div className="flex flex-col gap-3 py-2">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        <span className="text-sm text-gray-400">Analyzing...</span>
      </div>
      <div className="h-3 w-3/4 animate-pulse rounded bg-white/[0.06]" />
      <div className="h-3 w-1/2 animate-pulse rounded bg-white/[0.06] [animation-delay:150ms]" />
      <div className="h-3 w-2/3 animate-pulse rounded bg-white/[0.06] [animation-delay:300ms]" />
    </div>
  );
}

export function AzuraAICard() {
  const [input, setInput] = useState("");
  const [state, setState] = useState<CardState>("idle");
  const [response, setResponse] = useState<AzuraResponse | null>(null);
  const [fallback, setFallback] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSend = useCallback(
    (query: string) => {
      if (state !== "idle") return;

      const trimmed = query.trim();
      if (!trimmed) return;

      setInput(trimmed);
      setState("thinking");
      setFallback(false);

      const matched = AZURA_RESPONSES.find(
        (r) => r.query.toLowerCase() === trimmed.toLowerCase()
      );

      timerRef.current = setTimeout(() => {
        if (matched) {
          setResponse(matched);
          setState("response");
        } else {
          setFallback(true);
          setState("idle");
          setInput("");
        }
      }, 800);
    },
    [state]
  );

  const handleBack = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState("idle");
    setResponse(null);
    setFallback(false);
    setInput("");
  }, []);

  return (
    <Card className="relative flex flex-col overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="flex flex-col gap-1.5 p-6 pb-3">
        <div className="flex items-center gap-2">
          {state === "response" ? (
            <button
              onClick={handleBack}
              className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.08] text-gray-400 transition-colors hover:border-white/[0.16] hover:text-gray-50"
              aria-label="Back"
            >
              <Icon name="arrow-left" size={14} />
            </button>
          ) : (
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-500/20 border border-purple-500/20">
              <Icon name="sparkles" size={14} className="text-purple-400" />
            </div>
          )}
          <h3 className="text-lg font-semibold text-gray-50">Ask Azura</h3>
        </div>
        {state === "idle" && (
          <p className="text-sm text-gray-500">
            Describe what you want to do in plain English.
          </p>
        )}
      </div>

      <AnimatePresence mode="wait">
        {state === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="flex-1 px-6 pb-3">
              {fallback && (
                <p className="mb-3 text-sm text-amber-400/80">
                  {FALLBACK_MESSAGE}
                </p>
              )}
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(input);
                    }
                  }}
                  placeholder="e.g. Bridge 5,000 USDC from Ethereum to Base..."
                  rows={3}
                  className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-12 text-sm text-gray-50 placeholder:text-gray-600 focus:border-purple-500/40 focus:bg-white/[0.05] focus:outline-none transition-colors"
                />
                <button
                  onClick={() => handleSend(input)}
                  className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-md bg-purple-500 text-white transition-all hover:bg-purple-400 hover:shadow-glow disabled:opacity-40 disabled:hover:bg-purple-500 disabled:hover:shadow-none"
                  disabled={!input.trim()}
                  aria-label="Send"
                >
                  <Icon name="send" size={14} />
                </button>
              </div>
            </div>

            <div className="px-6 pb-6">
              <p className="mb-2 text-xs font-medium tracking-wider text-gray-600 uppercase">
                Quick actions
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {state === "thinking" && (
          <motion.div
            key="thinking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="px-6 pb-6"
          >
            <ThinkingSkeleton />
          </motion.div>
        )}

        {state === "response" && response && (
          <motion.div
            key="response"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[400px] overflow-y-auto px-6 pb-6"
          >
            <ResponseRenderer response={response} />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
