# LuckChain Frontend

A modern, casino-themed blockchain dice game built with React, TypeScript, and Vite.

## 🎮 Features

- 🎲 **Provably Fair Dice Game** - Blockchain-based randomness
- 🎨 **Premium Casino UI** - Modern, responsive design
- 🔊 **Rich Sound System** - 11+ distinct sound effects with audio ducking
- 🎵 **Background Music Playlist** - Auto-rotating casino ambiance
- 🔐 **Password Protection** - Session-based access control
- 📱 **PWA Support** - Install as mobile/desktop app
- ⚡ **Web3 Integration** - Wagmi + Viem for blockchain interaction

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🔐 Access

Default password: `654789`

Session expires after 24 hours.

## 📦 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Web3**: Wagmi + Viem
- **Wallet**: Reown AppKit
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner

## 🎵 Sound Assets

All sound effects are located in `public/sounds/`:
- Roll, Win, Jackpot, Loss
- Deposit, Withdraw, Buy Session
- Claim, Continue
- Clockwise/Counter-clockwise clicks
- Background music playlist (3 tracks)

## 📝 Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking
```

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for GitHub Pages deployment instructions.

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.
