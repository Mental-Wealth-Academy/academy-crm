import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, "../"),
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
    };
    // Stub optional wagmi connector peer deps that aren't installed
    config.externals.push(
      "@metamask/sdk",
      "@coinbase/wallet-sdk",
      "@walletconnect/ethereum-provider",
      "@safe-global/safe-apps-sdk",
      "@safe-global/safe-apps-provider",
      "@base-org/account",
      "porto",
      "porto/internal",
    );
    return config;
  },
};

export default nextConfig;
