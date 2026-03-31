# 🦷 Pearl Dental Studio — Premium Website

A modern, production-ready dental clinic website built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to communicate trust, calm, and professionalism — giving patients a seamless digital experience from first visit to booked appointment.

---

## ✨ Features

- **Animated Hero Section** — Word-by-word entrance animation with an animated stat counter (12+ years, 4800+ patients, 98% satisfaction)
- **Services Showcase** — Full services page with custom SVG icons and INR pricing for 6+ treatment categories
- **About & Team Pages** — Parallax scroll effects, team bios, and clinic story sections
- **Patient Testimonials** — Staggered card animations with star ratings and treatment context
- **Appointment Booking Form** — Validated form using React Hook Form + Zod
- **Smooth Page Transitions** — `AnimatePresence` from Framer Motion for elegant route changes
- **Accessibility-First** — Respects `prefers-reduced-motion` via a custom `useReducedMotion` hook
- **Fully Responsive** — Mobile-first layout scaling up to 1600px wide containers
- **Dark/Light Theme Ready** — `next-themes` integrated for theme toggling support

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| UI Components | shadcn/ui + Radix UI |
| Routing | React Router DOM v6 |
| Forms | React Hook Form + Zod |
| Data Fetching | TanStack React Query v5 |
| Charts | Recharts |
| Testing | Vitest + Testing Library + Playwright |
| Linting | ESLint 9 + TypeScript-ESLint |
| Package Manager | Bun / npm |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js 18+** or **Bun** installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/dhimanLove/Dental-Studio-Premium.git

# Navigate into the project
cd Dental-Studio-Premium

# Install dependencies (use npm or bun)
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Build output lands in the `dist/` folder, ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Preview Production Build Locally

```bash
npm run preview
```

---

## 🧪 Testing

The project includes both unit/integration tests (Vitest) and end-to-end tests (Playwright).

```bash
# Run unit tests once
npm run test

# Run unit tests in watch mode
npm run test:watch
```

Playwright E2E tests are configured via `playwright.config.ts` and use the fixture defined in `playwright-fixture.ts`.

---

## 📄 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, service highlights, about preview, testimonials, CTA |
| `/about` | About | Clinic story, values, facility images |
| `/services` | Services | Full treatment list with icons and pricing |
| `/team` | Team | Doctor and staff profiles |
| `/contact` | Contact | Appointment booking form + clinic details |
| `*` | 404 | Not Found fallback page |

---

## ♿ Accessibility

The `useReducedMotion` hook detects the user's OS-level `prefers-reduced-motion` setting and disables all non-essential animations automatically — ensuring the site is usable and comfortable for users with vestibular disorders or motion sensitivity.

---

## 📦 Deployment

This is a standard Vite SPA. You can deploy it to:

**Vercel** (recommended):
```bash
vercel deploy
```

**Netlify**: Drag and drop your `dist/` folder, or connect your GitHub repo.

**GitHub Pages**: Set the `base` in `vite.config.ts` to your repo name, then run `npm run build` and push `dist/` to the `gh-pages` branch.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or issue.

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ for modern dental care experiences.
