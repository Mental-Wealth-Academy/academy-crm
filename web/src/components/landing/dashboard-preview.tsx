"use client";

import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function DashboardPreview() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-6">
        <MotionWrapper variants={fadeInUp} className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium tracking-wider text-[#5168FF] uppercase">
            Dashboard
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1B24] lg:text-4xl">
            Your clients and team,{" "}
            <span className="text-[#5168FF]">
              one dashboard
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[rgba(26,27,36,0.6)]">
            Manage clients, track payroll, and monitor team performance.
            See what matters most at a glance.
          </p>
        </MotionWrapper>

        {/* Dashboard mock */}
        <MotionWrapper variants={scaleIn}>
          <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/95 shadow-[0_4px_24px_rgba(81,104,255,0.1)] overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-[rgba(0,0,0,0.08)] bg-[#F8F7FC] px-5 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400/60" />
              <div className="h-3 w-3 rounded-full bg-amber-400/60" />
              <div className="h-3 w-3 rounded-full bg-green-400/60" />
              <span className="ml-3 text-xs font-mono text-[rgba(26,27,36,0.4)]">
                mwa.academy/dashboard
              </span>
              <div className="ml-auto flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Active
                </span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 lg:p-8 bg-[#FBF8FF]">
              {/* Top stats row */}
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-6">
                {[
                  { label: "Total Clients", value: "2,847", change: "+12.4%", valueColor: "text-[#1A1B24]", changeColor: "text-emerald-600" },
                  { label: "Active Projects", value: "7", change: "+2 this week", valueColor: "text-[#5168FF]", changeColor: "text-emerald-600" },
                  { label: "Invoices (30d)", value: "342", change: "+18%", valueColor: "text-[#1A1B24]", changeColor: "text-[#5168FF]" },
                  { label: "Revenue", value: "$48.2k", change: "this month", valueColor: "text-[#50599B]", changeColor: "text-[rgba(26,27,36,0.5)]" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white/95 p-4 shadow-[0_2px_8px_rgba(81,104,255,0.05)]">
                    <p className="text-[11px] text-[rgba(26,27,36,0.5)] uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className={`text-xl font-bold lg:text-2xl ${stat.valueColor}`}>{stat.value}</p>
                    <p className={`mt-1 text-xs ${stat.changeColor}`}>{stat.change}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-5">
                {/* Chart area — left 3 cols */}
                <div className="lg:col-span-3 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white/95 p-5 shadow-[0_2px_8px_rgba(81,104,255,0.05)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-[#1A1B24]">Revenue Over Time</span>
                    <div className="flex gap-1">
                      {["7d", "30d", "90d"].map((period) => (
                        <button
                          key={period}
                          className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                            period === "30d"
                              ? "bg-[#5168FF]/10 text-[#5168FF]"
                              : "text-[rgba(26,27,36,0.5)] hover:text-[#1A1B24]"
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-40 lg:h-52">
                    <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="dashGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#5168FF" />
                          <stop offset="100%" stopColor="#7586FF" />
                        </linearGradient>
                        <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#5168FF" stopOpacity="0.12" />
                          <stop offset="100%" stopColor="#5168FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      {[40, 80, 120, 160].map((y) => (
                        <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(0,0,0,0.05)" />
                      ))}
                      {/* Area */}
                      <path
                        d="M0 160 L40 155 L80 150 L120 140 L160 145 L200 130 L240 125 L280 110 L320 115 L360 95 L400 85 L440 90 L480 70 L520 60 L560 55 L600 50 L600 200 L0 200Z"
                        fill="url(#dashFill)"
                      />
                      {/* Line */}
                      <path
                        d="M0 160 L40 155 L80 150 L120 140 L160 145 L200 130 L240 125 L280 110 L320 115 L360 95 L400 85 L440 90 L480 70 L520 60 L560 55 L600 50"
                        fill="none"
                        stroke="url(#dashGrad)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* Current point */}
                      <circle cx="600" cy="50" r="4" fill="#5168FF" />
                      <circle cx="600" cy="50" r="8" fill="#5168FF" opacity="0.2" />
                    </svg>
                  </div>
                </div>

                {/* Right column — modules + recent activity */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  {/* Active Modules */}
                  <div className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white/95 p-4 shadow-[0_2px_8px_rgba(81,104,255,0.05)]">
                    <span className="text-sm font-semibold text-[#1A1B24]">Active Workflows</span>
                    <div className="mt-3 space-y-2">
                      {[
                        { name: "Client Onboarding", status: "running", trigger: "automated", color: "#5168FF" },
                        { name: "Weekly Payroll", status: "scheduled", trigger: "cron", color: "#F59E0B" },
                        { name: "Invoice Reminders", status: "running", trigger: "trigger", color: "#5168FF" },
                        { name: "Team Reports", status: "completed", trigger: "weekly", color: "#10B981" },
                      ].map((wf) => (
                        <div key={wf.name} className="flex items-center justify-between rounded-lg bg-[#FBF8FF] border border-[rgba(0,0,0,0.06)] px-3 py-2">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: wf.color }} />
                            <span className="text-xs text-[#1A1B24]">{wf.name}</span>
                          </div>
                          <span className="rounded-full bg-[#F0EEFA] px-2 py-0.5 text-[10px] text-[#50599B]">{wf.trigger}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white/95 p-4 shadow-[0_2px_8px_rgba(81,104,255,0.05)]">
                    <span className="text-sm font-semibold text-[#1A1B24]">Recent Activity</span>
                    <div className="mt-3 space-y-2">
                      {[
                        { action: "New client added", chain: "CRM", time: "2m ago", color: "#5168FF" },
                        { action: "Payroll processed (12)", chain: "Payroll", time: "18m ago", color: "#10B981" },
                        { action: "Invoice #1042 paid", chain: "Billing", time: "1h ago", color: "#F59E0B" },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-[#FBF8FF] border border-[rgba(0,0,0,0.06)] px-3 py-2">
                          <span className="text-xs text-[#1A1B24]">{tx.action}</span>
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tx.color }} />
                            <span className="text-[10px] text-[rgba(26,27,36,0.4)]">{tx.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle shadow underneath */}
          <div className="mx-auto -mt-4 h-8 w-2/3 rounded-full bg-[#5168FF]/[0.06] blur-2xl" />
        </MotionWrapper>
      </div>
    </section>
  );
}
