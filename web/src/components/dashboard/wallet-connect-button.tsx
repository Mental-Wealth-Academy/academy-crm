"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

function truncateAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function WalletConnectButton() {
  const { address, isConnected, isConnecting } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnecting) {
    return (
      <Button variant="secondary" size="sm" className="gap-2" disabled>
        <Icon name="wallet" size={16} />
        <span className="hidden sm:inline">Connecting...</span>
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <Button
        variant="secondary"
        size="sm"
        className="gap-2"
        onClick={() => disconnect()}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="hidden sm:inline">
          {truncateAddress(address)}
        </span>
      </Button>
    );
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      className="gap-2"
      onClick={() => connectors[0] && connect({ connector: connectors[0] })}
    >
      <Icon name="wallet" size={16} />
      <span className="hidden sm:inline">Connect Wallet</span>
    </Button>
  );
}
