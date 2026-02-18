export type TransactionStatus = "confirmed" | "pending" | "failed";

export type WorkflowStatus = "active" | "paused" | "error";

export type ChainId =
  | "ethereum"
  | "polygon"
  | "arbitrum"
  | "optimism"
  | "avalanche"
  | "base"
  | "reserve";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export type IconName =
  | "workflow"
  | "crosschain"
  | "code"
  | "shield"
  | "monitor"
  | "globe"
  | "home"
  | "settings"
  | "chevron-left"
  | "chevron-right"
  | "wallet"
  | "menu"
  | "x"
  | "check"
  | "minus"
  | "external-link"
  | "sparkles"
  | "send"
  | "plus"
  | "play"
  | "pause"
  | "droplet"
  | "file-code"
  | "terminal"
  | "lock"
  | "zap"
  | "clock"
  | "eye-off"
  | "arrow-left";

export type ChainlinkCapability =
  | "data-streams"
  | "ccip"
  | "automation"
  | "cre-workflows"
  | "data-feeds";

export type WorkflowTrigger = "cron" | "threshold" | "manual" | "event";

export type PrivacyLevel = "standard" | "encrypted" | "confidential";

export interface CREWorkflow {
  id: string;
  name: string;
  status: WorkflowStatus;
  trigger: WorkflowTrigger;
  lastRun: string;
  nextRun: string;
  capabilities: ChainlinkCapability[];
  privacy: PrivacyLevel;
  description: string;
}

export interface AzuraResponseSection {
  label: string;
  content: string;
}

export interface AzuraResponseTable {
  headers: string[];
  rows: string[][];
}

export interface AzuraResponse {
  id: string;
  query: string;
  title: string;
  summary: string;
  sections: AzuraResponseSection[];
  table?: AzuraResponseTable;
  chainlinkProducts: ChainlinkCapability[];
  privacyAvailable: boolean;
}
