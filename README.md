<p align="center">
  <img src="web/public/azura-hero.webp" alt="Azura" width="280" />
</p>

<h1 align="center">Azura</h1>

<p align="center">
  <strong>AI-powered treasury management for the onchain economy.</strong>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<a href="#architecture">Architecture</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<a href="#treasury-workflow">Treasury Workflow</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<a href="#dashboard">Dashboard</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<a href="#smart-contracts">Smart Contracts</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<a href="#commands">Commands</a>
</p>

---

Azura is an autonomous treasury agent that manages multi-asset reserves across chains. It reads onchain balances, fetches real-world asset prices, computes a unified backing ratio, and writes consensus-signed reports to smart contracts &mdash; all without human intervention.

Built on the **Chainlink Runtime Environment (CRE)**, Azura's workflows compile to WASM, execute across a decentralised oracle network, and settle onchain through cryptographically verified reports.

```
         azuraazuraa                 zuraazuraaz
      azuraazuraazuraaz           uraazuraazuraazur
     azura   azu   raazu         raazu   raa   zuraa
    azu   raazuraaz   ura       azu   raazuraaz   ura
   azu   raazura       azu     raa   zuraazu       raa
   az   uraazura    a   zu     ra   azuraazu    r   aa
   a    zuraazuraazur    a     a    zuraazuraazur    a
   az   ur  aazuraazu   ra     az   ur  aazuraazu   ra
    az   uraazuraazu   ra       az   uraazuraazu   ra
     az   uraazuraa   zu         ra   azuraazur   aa
      azur   aaz   uraa           zura   azu   raaz
         azuraazuraa                 zuraazuraaz
```

---

## Quick Start

```bash
npx azura
```

This prints the Azura banner and version info. To scaffold a full project with workflows and contracts:

```bash
# Install the CRE CLI
curl -sSL https://cre.chain.link/install.sh | bash
exec /bin/zsh

# Initialise a new Azura project
cre init --project-name azura --workflow-name my-workflow

# Configure secrets
cp .env.example .env   # add your private key + RPC URL

# Simulate your first workflow
cre workflow simulate my-workflow
```

### Prerequisites

| Requirement | Version |
|---|---|
| Node.js | >= 22 |
| Bun | >= 1.0 |
| CRE CLI | >= 1.0.10 |
| Foundry | Latest |

---

## Architecture

```
azura/
├── src/                    # CLI source (TypeScript, ESM)
│   ├── entry.ts            # CLI entry point
│   ├── cli/                # Banner, theme, version
│   ├── terminal/           # Terminal rendering
│   └── ascii.ts            # ASCII art
├── azura/
│   └── treasury-workflow/  # CRE workflow (compiles to WASM)
│       ├── main.ts         # Workflow handler + trigger
│       ├── report.ts       # Report builder + ABI encoder
│       ├── readers.ts      # Onchain balance readers
│       ├── fetchers.ts     # External API fetchers (prices)
│       ├── writer.ts       # Onchain report writer
│       └── types.ts        # Shared types
├── contracts/              # Solidity (Foundry)
│   ├── src/                # AzuraToken, AzuraTreasury, AzuraTreasuryProxy
│   ├── script/             # Deploy scripts
│   ├── test/               # Forge tests
│   └── abi/                # TypeScript ABI stubs
├── web/                    # Dashboard & landing page (Next.js 15)
│   └── src/
│       ├── app/            # App router pages
│       ├── components/     # UI + landing + dashboard components
│       └── lib/            # Constants, utilities
├── project.yaml            # CRE project config
├── secrets.yaml            # Secret-to-env mappings
└── .env                    # Private keys & API keys (gitignored)
```

---

## Treasury Workflow

The core workflow aggregates crypto holdings and real-world assets into a single treasury report, then writes it onchain via CRE consensus.

### Supported Assets

| Asset | Type | Price Source |
|---|---|---|
| BTC (WBTC) | Crypto | CoinGecko |
| ETH (WETH + native) | Crypto | CoinGecko |
| Gold (XAU) | RWA | metals.dev |
| Silver (XAG) | RWA | metals.dev |
| Platinum (XPT) | RWA | metals.dev |
| Palladium (XPD) | RWA | metals.dev |

### How It Works

1. **Trigger** &mdash; HTTP request or cron schedule fires the workflow
2. **Read** &mdash; Fetch onchain balances (WBTC, WETH, native ETH) via EVM client
3. **Price** &mdash; Pull live USD prices from CoinGecko and metals.dev
4. **Compute** &mdash; Calculate per-asset USD values, total reserves, and backing ratio (18-decimal precision)
5. **Consensus** &mdash; DON nodes independently verify the computation
6. **Write** &mdash; Signed report delivered to `AzuraTreasuryProxy.onReport()`, forwarded to `AzuraTreasury.updateReserves()`

### Simulate

```bash
bun install --cwd azura/treasury-workflow

# Local simulation
cre workflow simulate azura/treasury-workflow --target staging-settings --engine-logs

# Broadcast to Sepolia
cre workflow simulate azura/treasury-workflow --target staging-settings --broadcast
```

### Deploy

```bash
cre workflow deploy azura/treasury-workflow --target staging-settings
cre workflow activate azura/treasury-workflow --target staging-settings
```

---

## Dashboard

The web dashboard is a Next.js 15 app with Tailwind CSS 4 and Framer Motion.

```bash
cd web
npm install
npm run dev
```

Opens at `http://localhost:3000`. The landing page features a cyberpunk data-viz background, the Azura character, and live stats. The dashboard view shows portfolio allocation, asset tables, and treasury health.

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Language | TypeScript |

---

## Smart Contracts

Three Solidity contracts deployed on Sepolia:

| Contract | Address | Purpose |
|---|---|---|
| **AzuraToken** | `0x31E56aC35E34aAD04707e9Bf75E3D7f3d8F5bE44` | ERC20 with mint/burn |
| **AzuraTreasury** | `0x4DdE462B7e36Ee1516A2B46c045b83C8d504B951` | Treasury report storage |
| **AzuraTreasuryProxy** | `0xac32FeFF6aF183d6beBb7426aBcC310DfF36c8D4` | CRE report receiver |

### Build & Test

```bash
cd azura/contracts
forge build
forge test -v
```

### Deploy

```bash
DEPLOYER_PRIVATE_KEY=0x... forge script script/Deploy.s.sol \
  --rpc-url https://ethereum-sepolia-rpc.publicnode.com \
  --broadcast
```

---

## Commands

### Azura CLI

```bash
npx azura              # Print banner + version
```

### CRE Workflow Commands

| Command | Description |
|---|---|
| `cre workflow simulate <path>` | Run workflow locally |
| `cre workflow deploy <path>` | Deploy to registry |
| `cre workflow activate <path>` | Activate deployed workflow |
| `cre workflow pause <path>` | Pause running workflow |
| `cre workflow delete <path>` | Delete all versions |

### Secrets

| Command | Description |
|---|---|
| `cre secrets create <file>` | Upload to Vault DON |
| `cre secrets update <file>` | Update existing |
| `cre secrets delete <file>` | Remove secrets |
| `cre secrets list` | List secret IDs |

---

## Environment

Create a `.env` in the project root:

```bash
CRE_ETH_PRIVATE_KEY=0x_YOUR_PRIVATE_KEY
CRE_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
GEMINI_API_KEY=your-api-key
```

Map secrets in `secrets.yaml`:

```yaml
simulation:
  eth_private_key:
    env_var: CRE_ETH_PRIVATE_KEY
staging:
  eth_private_key:
    env_var: CRE_ETH_PRIVATE_KEY
```

---

## License

MIT
