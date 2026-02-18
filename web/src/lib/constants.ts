export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
] as const;

export const DASHBOARD_NAV = [
  { label: "Overview", href: "/dashboard", icon: "home" as const },
  { label: "Payroll", href: "/dashboard/payroll", icon: "workflow" as const },
  { label: "Faucet", href: "/dashboard/faucet", icon: "droplet" as const },
  { label: "Contracts", href: "/dashboard/contracts", icon: "file-code" as const },
  { label: "Simulator", href: "/dashboard/simulator", icon: "terminal" as const },
  { label: "Settings", href: "/dashboard/settings", icon: "settings" as const },
] as const;

export const FEATURES = [
  {
    icon: "workflow" as const,
    title: "AI-Managed Portfolio",
    description:
      "Azura's AI agent monitors your Bitcoin, Ethereum, and stablecoin holdings — rebalancing automatically when your allocation drifts.",
  },
  {
    icon: "crosschain" as const,
    title: "Multi-Chain Treasury",
    description:
      "Hold assets across Ethereum, Base, Arbitrum, and more. Azura moves funds to the best chain for your business automatically.",
  },
  {
    icon: "code" as const,
    title: "Automated Payroll",
    description:
      "Pay your team and vendors in crypto on schedule. Azura handles recurring USDC, ETH, or BTC payments without manual work.",
  },
  {
    icon: "shield" as const,
    title: "Treasury Guardrails",
    description:
      "Set spending limits, approval thresholds, and whitelisted addresses. Your AI agent always operates within your rules.",
  },
  {
    icon: "monitor" as const,
    title: "Real-Time Overview",
    description:
      "Track every asset, transaction, and automation across all chains. Your company's full digital treasury in one dashboard.",
  },
  {
    icon: "globe" as const,
    title: "Get Started in Minutes",
    description:
      "No sales calls or onboarding queues. Connect your business wallet, fund it with BTC, ETH, or USDC, and Azura takes it from there.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Connect",
    description: "Link your business wallet and deposit Bitcoin, Ethereum, or stablecoins. Azura connects to your treasury in minutes.",
    code: `$ npx azura init

? Company name: Acme Corp
? Connect wallet: 0x1a2b...3c4d
? Initial assets: BTC, ETH, USDC
✓ Treasury connected
✓ Dashboard: azura.dev/d/acme-corp`,
  },
  {
    step: 2,
    title: "Configure",
    description: "Set your rules — allocation targets, spending limits, payroll schedules. Tell Azura how to manage your treasury.",
    code: `import { Azura } from "azura";

const treasury = Azura.treasury("acme-corp")
  .allocate({ BTC: "40%", ETH: "30%", USDC: "30%" })
  .rebalance("when drift > 5%")
  .payroll("every friday", { recipients: team });`,
  },
  {
    step: 3,
    title: "Let Azura Run",
    description: "Your AI agent takes over. Rebalancing, payments, and cross-chain moves happen automatically while you focus on your business.",
    code: `$ npx azura status

Treasury: Acme Corp
✓ AI Agent: Active
✓ Portfolio: BTC 40% · ETH 30% · USDC 30%
✓ Next payroll: Friday 09:00 UTC
✓ Last rebalance: 3 hours ago
✓ 30d savings: $4,210 in gas fees`,
  },
] as const;

export const COMPARISON_DIMENSIONS = [
  { key: "selfServe", label: "Self-Serve" },
  { key: "programmable", label: "Programmable" },
  { key: "automated", label: "Automations" },
  { key: "crossChain", label: "Cross-Chain Native" },
  { key: "devFirst", label: "Developer-First" },
  { key: "openInfra", label: "Open Infrastructure" },
  { key: "monitoring", label: "Real-Time Monitoring" },
] as const;

export const COMPETITORS = [
  {
    name: "Safe",
    values: {
      selfServe: true,
      programmable: false,
      automated: false,
      crossChain: "partial",
      devFirst: false,
      openInfra: true,
      monitoring: "partial",
    },
  },
  {
    name: "Fireblocks",
    values: {
      selfServe: false,
      programmable: "partial",
      automated: "partial",
      crossChain: true,
      devFirst: false,
      openInfra: false,
      monitoring: true,
    },
  },
  {
    name: "Llama",
    values: {
      selfServe: false,
      programmable: false,
      automated: false,
      crossChain: false,
      devFirst: false,
      openInfra: "partial",
      monitoring: false,
    },
  },
  {
    name: "Parcel",
    values: {
      selfServe: true,
      programmable: false,
      automated: "partial",
      crossChain: "partial",
      devFirst: false,
      openInfra: false,
      monitoring: "partial",
    },
  },
  {
    name: "Request",
    values: {
      selfServe: true,
      programmable: false,
      automated: false,
      crossChain: "partial",
      devFirst: false,
      openInfra: false,
      monitoring: "partial",
    },
  },
] as const;

export const AZURA_VALUES = {
  selfServe: true,
  programmable: true,
  automated: true,
  crossChain: true,
  devFirst: true,
  openInfra: true,
  monitoring: true,
} as const;

export const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Documentation", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Developers: [
    { label: "Getting Started", href: "#" },
    { label: "SDK Reference", href: "#" },
    { label: "CLI Docs", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
} as const;

export const MOCK_TRANSACTIONS = [
  {
    id: "1",
    type: "Transfer",
    status: "confirmed" as const,
    hash: "0x1a2b…3c4d",
    amount: "5,000 USDC",
    chain: "base" as const,
    time: "2 min ago",
  },
  {
    id: "2",
    type: "Swap",
    status: "confirmed" as const,
    hash: "0x5e6f…7a8b",
    amount: "1.5 ETH",
    chain: "ethereum" as const,
    time: "15 min ago",
  },
  {
    id: "3",
    type: "Bridge",
    status: "pending" as const,
    hash: "0x9c0d…1e2f",
    amount: "10,000 USDC",
    chain: "arbitrum" as const,
    time: "32 min ago",
  },
  {
    id: "4",
    type: "Transfer",
    status: "confirmed" as const,
    hash: "0x3a4b…5c6d",
    amount: "2,500 USDC",
    chain: "polygon" as const,
    time: "1 hr ago",
  },
  {
    id: "5",
    type: "Transfer",
    status: "failed" as const,
    hash: "0x7e8f…9a0b",
    amount: "500 USDC",
    chain: "optimism" as const,
    time: "3 hr ago",
  },
] as const;

export const MOCK_AUTOMATIONS = [
  {
    id: "1",
    name: "Weekly Payroll",
    status: "active" as const,
    trigger: "schedule",
    lastRun: "2 hours ago",
    nextRun: "Fri 09:00 UTC",
  },
  {
    id: "2",
    name: "Rebalance Portfolio",
    status: "active" as const,
    trigger: "threshold",
    lastRun: "6 hours ago",
    nextRun: "On trigger",
  },
  {
    id: "3",
    name: "Bridge to L2",
    status: "paused" as const,
    trigger: "manual",
    lastRun: "3 days ago",
    nextRun: "—",
  },
] as const;

import type {
  CREWorkflow,
  AzuraResponse,
  ChainlinkCapability,
  PrivacyLevel,
} from "@/types";

export const MOCK_WORKFLOWS: CREWorkflow[] = [
  {
    id: "1",
    name: "Weekly Payroll",
    status: "active",
    trigger: "cron",
    lastRun: "2 hours ago",
    nextRun: "Fri 09:00 UTC",
    capabilities: ["data-feeds", "automation"],
    privacy: "encrypted",
    description:
      "Distributes USDC payroll to 12 team wallets every Friday. Data Feeds verify stablecoin peg before execution. Amounts encrypted via Privacy Shield.",
  },
  {
    id: "2",
    name: "Portfolio Rebalance",
    status: "active",
    trigger: "threshold",
    lastRun: "6 hours ago",
    nextRun: "On drift > 5%",
    capabilities: ["data-streams", "automation"],
    privacy: "standard",
    description:
      "Monitors portfolio allocation in real-time via Data Streams. Triggers rebalance trades when any asset drifts more than 5% from target weight.",
  },
  {
    id: "3",
    name: "CCIP Bridge to L2",
    status: "paused",
    trigger: "manual",
    lastRun: "3 days ago",
    nextRun: "—",
    capabilities: ["ccip"],
    privacy: "confidential",
    description:
      "Bridges treasury reserves from Ethereum to Base or Arbitrum using CCIP. Confidential mode hides transfer amounts and destination from public view.",
  },
  {
    id: "4",
    name: "Gas Fee Monitor",
    status: "active",
    trigger: "event",
    lastRun: "12 min ago",
    nextRun: "Continuous",
    capabilities: ["data-streams"],
    privacy: "standard",
    description:
      "Streams real-time gas prices across 5 chains. Alerts when gas drops below threshold for optimal transaction timing.",
  },
  {
    id: "5",
    name: "Treasury Yield Sweep",
    status: "paused",
    trigger: "cron",
    lastRun: "1 day ago",
    nextRun: "—",
    capabilities: ["data-feeds", "ccip", "automation"],
    privacy: "encrypted",
    description:
      "Sweeps idle USDC into highest-yield vaults across chains. Uses Data Feeds for rate comparison and CCIP for cross-chain movement.",
  },
];

export const AZURA_RESPONSES: AzuraResponse[] = [
  {
    id: "rebalance",
    query: "Rebalance my portfolio",
    title: "Portfolio Rebalance Analysis",
    summary:
      "Your portfolio has drifted from target allocation. Here's the proposed adjustment based on real-time pricing.",
    sections: [
      {
        label: "Current Drift",
        content:
          "ETH: 38% (target 30%) — over by 8%\nBTC: 41% (target 40%) — on target\nUSDC: 21% (target 30%) — under by 9%",
      },
      {
        label: "Proposed Trades",
        content:
          "1. Sell 2.1 ETH → 6,930 USDC (via Uniswap on Base)\n2. Move 6,930 USDC to reserve allocation\n3. Estimated slippage: 0.08%",
      },
      {
        label: "Execution",
        content:
          "Trades will execute via CRE Workflow with Automation trigger.\nPricing sourced from Data Streams (sub-second updates).",
      },
    ],
    chainlinkProducts: ["data-streams", "automation", "cre-workflows"],
    privacyAvailable: false,
  },
  {
    id: "bridge",
    query: "Bridge 10k USDC to Base",
    title: "CCIP Bridge Transfer",
    summary:
      "Ready to bridge 10,000 USDC from Ethereum to Base via Chainlink CCIP.",
    sections: [
      {
        label: "Transfer Details",
        content:
          "Amount: 10,000 USDC\nFrom: Ethereum Mainnet\nTo: Base\nProtocol: Chainlink CCIP",
      },
      {
        label: "Fees & Timeline",
        content:
          "Bridge fee: ~$2.40 (paid in LINK)\nEstimated time: 15–20 minutes\nSecurity: Full finality via CCIP attestation",
      },
      {
        label: "Privacy Shield",
        content:
          "Privacy Shield is available for this transfer.\nEnable to encrypt transfer amount and destination on-chain.",
      },
    ],
    chainlinkProducts: ["ccip"],
    privacyAvailable: true,
  },
  {
    id: "gas",
    query: "Show gas fees across chains",
    title: "Live Gas Fees",
    summary:
      "Real-time gas prices across 5 chains, powered by Chainlink Data Streams.",
    sections: [],
    table: {
      headers: ["Chain", "Gas (Gwei)", "Avg Tx Cost", "Speed"],
      rows: [
        ["Ethereum", "24.3", "$4.82", "~15s"],
        ["Base", "0.008", "$0.01", "~2s"],
        ["Arbitrum", "0.12", "$0.06", "~2s"],
        ["Optimism", "0.009", "$0.02", "~2s"],
        ["Polygon", "31.5", "$0.03", "~5s"],
      ],
    },
    chainlinkProducts: ["data-streams"],
    privacyAvailable: false,
  },
  {
    id: "payroll",
    query: "Set up weekly payroll",
    title: "CRE Workflow: Weekly Payroll",
    summary:
      "Configure an automated payroll workflow using Chainlink CRE.",
    sections: [
      {
        label: "Workflow Config",
        content:
          "Trigger: Cron — every Friday at 09:00 UTC\nAction: Distribute USDC to recipient list\nValidation: Data Feeds verify USDC peg before execution",
      },
      {
        label: "Recipients",
        content:
          "Add wallet addresses and amounts in the Payroll tab.\nSupports up to 50 recipients per batch.",
      },
      {
        label: "Privacy Shield",
        content:
          "Enable Privacy Shield to encrypt payment amounts.\nRecipient addresses remain visible; amounts are hidden on-chain.",
      },
    ],
    chainlinkProducts: ["data-feeds", "automation", "cre-workflows"],
    privacyAvailable: true,
  },
];

export const CHAINLINK_PRODUCT_LABELS: Record<ChainlinkCapability, string> = {
  "data-streams": "Data Streams",
  ccip: "CCIP",
  automation: "Automation",
  "cre-workflows": "CRE Workflows",
  "data-feeds": "Data Feeds",
};

export const PRIVACY_LABELS: Record<
  PrivacyLevel,
  { label: string; color: string }
> = {
  standard: { label: "Standard", color: "text-gray-500" },
  encrypted: { label: "Encrypted", color: "text-cyan-400" },
  confidential: { label: "Confidential", color: "text-purple-400" },
};

export const MOCK_ASSETS = [
  { symbol: "XAU", name: "Gold", balance: "100 oz", value: "$290,000.00", change: "+0.8%", chain: "reserve" as const },
  { symbol: "XAG", name: "Silver", balance: "5,000 oz", value: "$160,000.00", change: "+1.2%", chain: "reserve" as const },
  { symbol: "ETH", name: "Ethereum", balance: "12.45", value: "$41,234.50", change: "+2.4%", chain: "ethereum" as const },
  { symbol: "USDC", name: "USD Coin", balance: "125,000", value: "$125,000.00", change: "0.0%", chain: "base" as const },
  { symbol: "LINK", name: "Chainlink", balance: "5,000", value: "$72,500.00", change: "+5.1%", chain: "ethereum" as const },
  { symbol: "XPT", name: "Platinum", balance: "50 oz", value: "$50,000.00", change: "-0.3%", chain: "reserve" as const },
  { symbol: "USDC", name: "USD Coin", balance: "50,000", value: "$50,000.00", change: "0.0%", chain: "arbitrum" as const },
  { symbol: "XPD", name: "Palladium", balance: "25 oz", value: "$23,750.00", change: "+0.5%", chain: "reserve" as const },
  { symbol: "ETH", name: "Ethereum", balance: "3.2", value: "$10,604.80", change: "+2.4%", chain: "optimism" as const },
] as const;
