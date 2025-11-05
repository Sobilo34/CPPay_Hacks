# CPPay - Crypto Payments for Everyone in Nigeria

<div align="center">
  
![CPPay Logo](src/components/assets/logo.png)

**Seamless Crypto & Fiat Transactions | Gasless | Secure | Mobile-First**

[Download App](#getting-started) • [Features](#features) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## 🚀 Overview

CPPay is a revolutionary fintech platform enabling seamless cryptocurrency and fiat transactions for everyone in Nigeria. Powered by Smart Wallets technology, CPPay eliminates complex token swaps, gas fees, and technical barriers—making crypto accessible and practical for everyday payments.

### Core Value Proposition

- **Spend Fiat Without Token Swaps**: Convert and transact in Nigerian Naira instantly
- **Gasless Transactions**: Powered by ERC-4337 Smart Account abstraction
- **Multi-Asset Management**: Manage multiple crypto assets from a single wallet
- **Mobile-First Experience**: Optimized for smartphones with offline-capable features
- **Security First**: Bank-grade encryption and non-custodial wallet architecture

---

## ✨ Features

### 💳 Smart Wallet
- Non-custodial wallet with Smart Account support
- Multi-chain asset management
- Biometric security with local key storage

### 💰 Instant Transfers
- Send and receive crypto in seconds
- QR code scanning for quick transactions
- Transaction history and analytics

### 🌍 Fiat Integration
- Nigerian Naira (₦) settlement
- Bank transfer support
- Real-time exchange rates

### 🔐 Security
- End-to-end encryption
- Hardware wallet compatibility
- Multi-signature transaction verification

### 📱 Responsive Design
- Optimized for mobile and tablet devices
- Progressive Web App (PWA) capabilities
- Offline transaction drafting

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 18.2.0 |
| **Language** | TypeScript | 5.2.2 |
| **Build Tool** | Vite | 4.5.14 |
| **Styling** | Tailwind CSS | 3.3.5 |
| **Animations** | Framer Motion | 10.16.0 |
| **Icons** | Lucide React | 0.294.0 |
| **QR Codes** | QRCode.js | 1.5.4 |
| **Routing** | React Router DOM | 6.20.0 |
| **UI Components** | HeadlessUI | 1.7.17 |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 16.x
- **npm** >= 8.x or **yarn** >= 1.22.x
- **Git** >= 2.30.x

Verify your installations:

```bash
node --version    # v16.x.x or higher
npm --version     # 8.x.x or higher
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CP-Pay/web.git
cd web
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Configure your environment variables:

```env
# API Configuration
VITE_API_BASE_URL=https://api.cppay.ng
VITE_WEB3_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY

# Feature Flags
VITE_ENABLE_TESTNET=false
VITE_ENABLE_DEBUG=false

# Analytics
VITE_ANALYTICS_ID=YOUR_TRACKING_ID
```

### 4. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` with hot module replacement enabled.

### 5. Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` directory, optimized and minified for production deployment.

---

## 📦 Project Structure

```
web/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx          # Landing page hero section
│   │   ├── FeaturesSection.tsx      # Features showcase
│   │   ├── AboutSection.tsx         # Company information
│   │   ├── InstallationGuide.tsx    # Setup instructions
│   │   ├── Navbar.tsx               # Navigation header
│   │   ├── Footer.tsx               # Footer with links
│   │   ├── BlockchainBackground.tsx # Animated background
│   │   ├── QRCodeModal.tsx          # QR code scanner modal
│   │   ├── ThemeToggle.tsx          # Theme switcher
│   │   └── assets/
│   │       └── logo.png             # Brand logo
│   ├── utils/
│   │   └── qrCode.ts                # QR code utilities
│   ├── App.tsx                      # Root component
│   ├── main.tsx                     # React entry point
│   ├── index.css                    # Global styles
│   └── vite-env.d.ts                # Vite type definitions
├── dist/                            # Production build output
├── public/                          # Static assets
├── index.html                       # HTML template
├── vite.config.ts                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS config
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.js                # PostCSS configuration
├── package.json                     # Dependencies & scripts
└── README.md                        # This file
```

---

## 🎨 Design System

### Color Palette

```
Primary Purple:      #4D1B64
Primary Hover:       #3D1452
Primary Accent:      #5D2B74
Success Green:       #10B981
Warning Orange:      #F59E0B
Error Red:           #EF4444
Light Gray:          #F3F4F6
Dark Gray:           #1F2937
```

### Typography

- **Primary Font**: Cara Pro (Headings)
- **Body Font**: Inter (Body text)
- **Font Weights**: 400, 500, 600, 700, 800, 900

### Responsive Breakpoints

```
Mobile:    < 640px  (sm)
Tablet:    640px    (md)
Desktop:   768px    (lg)
Wide:      1024px   (xl)
```

---

## 🔧 Available Commands

### Development

```bash
# Start development server with hot reload
npm run dev

# Type checking without emission
npm run type-check

# Run ESLint linter
npm run lint

# Preview production build
npm run preview
```

### Production

```bash
# Build for production (optimized & minified)
npm run build

# Analyze bundle size
npm run build -- --analyze
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir dist
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

---

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:coverage
```

---

## 📚 Documentation

### Component Documentation

Each component includes JSDoc comments documenting props and usage:

```typescript
/**
 * HeroSection Component
 * @component
 * @description Main landing page hero section with CTA buttons
 * @returns {React.FC} Rendered hero section
 */
```

### API Documentation

Comprehensive API integration guide available at:
- [API Reference](https://docs.cppay.ng/api)
- [Authentication Guide](https://docs.cppay.ng/auth)
- [Webhook Documentation](https://docs.cppay.ng/webhooks)

### Developer Portal

Visit [developer.cppay.ng](https://developer.cppay.ng) for:
- API keys and credentials
- Sandbox environment
- Code examples and SDKs
- Rate limits and quotas

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/web.git
cd web
```

### 2. Create Feature Branch

```bash
git checkout -b feature/amazing-feature
```

### 3. Make Changes

- Follow the existing code style
- Write meaningful commit messages
- Add JSDoc comments for new functions
- Test your changes thoroughly

### 4. Commit & Push

```bash
git add .
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
```

### 5. Create Pull Request

Open a PR with a clear description of your changes. Reference any related issues.

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Configuration must pass linting
- **Prettier**: Code formatting enforced
- **Testing**: New features must include tests

---

## 🐛 Bug Reports

Found a bug? Please create an issue with:

1. **Description**: Clear summary of the issue
2. **Reproduction Steps**: Exact steps to reproduce
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, Node version
6. **Screenshots**: Visual context if applicable

---

## 🔒 Security

### Reporting Security Issues

**Do not** open public issues for security vulnerabilities. Email security@cppay.ng instead.

### Security Measures

- Dependencies scanned with npm audit
- No hardcoded secrets or credentials
- HTTPS-only in production
- Content Security Policy (CSP) headers enabled
- XSS and CSRF protection implemented

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙋 Support

### Help & Documentation

- 📖 [Full Documentation](https://docs.cppay.ng)
- 💬 [Discord Community](https://discord.gg/cppay)
- 📧 [Email Support](mailto:support@cppay.ng)
- 🐦 [Twitter Updates](https://twitter.com/cppay_ng)

### Common Issues

**Q: App not loading?**
- Clear browser cache
- Verify Node version (16.x+)
- Check environment variables

**Q: Build failing?**
- Delete `node_modules` and reinstall
- Clear Vite cache: `rm -rf dist`
- Run `npm run type-check`

**Q: Port already in use?**
```bash
npm run dev -- --port 3000
```

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev) & [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animations by [Framer Motion](https://www.framer.com/motion)
- Icons from [Lucide React](https://lucide.dev)

---

## 📞 Contact

**CPPay Team**
- Website: [www.cppay.ng](https://www.cppay.ng)
- Email: info@cppay.ng
- LinkedIn: [CPPay](https://linkedin.com/company/cppay)
- Twitter: [@cppay_ng](https://twitter.com/cppay_ng)

---

<div align="center">

**Built with ❤️ by the CPPay Team**

© 2025 CP-Pay Inc. All rights reserved.

</div>
