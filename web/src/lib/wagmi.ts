import { http, createConfig } from "wagmi";
import { mainnet, base, arbitrum, polygon, optimism } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [mainnet, base, arbitrum, polygon, optimism],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [arbitrum.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
  },
});
