# 🌉 L2 Bridge Tracker

A real-time monitoring tool to track fund transfers (deposits/withdrawals) between Ethereum Mainnet and Layer 2 solutions.

## 🚀 Overview
This tool monitors official bridge contracts of major Layer 2 networks to track liquidity flow. It helps in analyzing:
- Total Value Locked (TVL) movement.
- Whale movements across chains.
- Bridge activity spikes.

## 🛠️ Supported Networks
- **Arbitrum One**
- **Optimism**
- **Polygon (PoS)**
- **zkSync Era**

## 💻 Tech Stack
- **Node.js**
- **Ethers.js** (for blockchain interaction)
- **WebSockets** (for real-time events)

## 📁 Project Structure
- `scripts/tracker.js`: Listens to 'Deposit' and 'Withdraw' events on bridge contracts.
- `config.js`: Contains ABI and Contract addresses of L2 bridges.

## ⚙️ Setup
1. Clone the repo: `git clone [Your-Repo-Link]`
2. Install dependencies: `npm install`
3. Add your Alchemy/Infura API key in `.env`
4. Run the tracker: `node scripts/tracker.js`
