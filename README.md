# Nasir Masud — Developer Portfolio

A modern, animated developer portfolio built with React and Vite, showcasing projects, technical skills, and providing a contact form powered by EmailJS. Features smooth Framer Motion animations throughout, a dark-themed glassmorphism UI, responsive design, and a detailed project showcase with screenshot galleries and tech breakdowns.

## Architecture Overview

### Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.2.0 |
| Build Tool | Vite | 7.3.1 |
| Styling | Tailwind CSS | 4.2.1 |
| Animations | Framer Motion | 12.38.0 |
| Routing | React Router DOM | 7.13.1 |
| Data Fetching | TanStack React Query | 5.90.21 |
| Email | EmailJS | 4.4.1 |
| Icons | Lucide React | 0.577.0 |
| Utilities | clsx + tailwind-merge | via `cn()` |
| Language | JavaScript (JSX) | — |

## Project Structure

```
nasir-protfolio/
├── .env.local                          # EmailJS credentials (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
├── index.html                          # HTML entry point
├── package.json                        # Project manifest
├── vite.config.js                      # Vite config (@ alias, React + Tailwind plugins)
├── tailwind.config.js                  # Empty (Tailwind v4 uses CSS-based config)
├── eslint.config.js                    # ESLint flat config (react-hooks, react-refresh)
│
├── public/
│   ├── nasir-cv.pdf                    # Downloadable CV/resume
│   ├── proPic.png                      # Profile picture
│   ├── PH.png                          # Programming Hero logo
│   └── site-ss/                        # Project screenshots (33 images)
│       ├── mindagent01-04.png
│       ├── gamedb01-04.png
│       ├── fable01-04.png
│       ├── mediqueue01-04.png
│       ├── keenkeeper01-03.png
│       ├── skill01-03.png
│       ├── digi01-04.png
│       ├── issue01-03.png
│       └── weather01-02.png
│
└── src/
    ├── main.jsx                        # React root entry (StrictMode)
    ├── App.jsx                         # Root component with routes + QueryClientProvider
    ├── index.css                       # Global CSS: Tailwind imports, theme variables, utilities
    │
    ├── data/
    │   └── projects.json               # All 9 project entries with details, features, challenges
    │
    ├── hooks/
    │   └── use-mobile.js               # Custom useIsMobile() hook (768px breakpoint)
    │
    ├── lib/
    │   └── utils.js                    # cn() utility (clsx + tailwind-merge)
    │
    ├── pages/
    │   ├── Index.jsx                   # Homepage (assembles all sections)
    │   ├── AllProjects.jsx             # Full projects page with filtering + detail modals
    │   └── NotFound.jsx                # Custom 404 page
    │
    └── components/
        ├── Navbar.jsx                  # Fixed top navbar with glassmorphism, mobile menu
        ├── NavContact.jsx              # Email copy, mailto link, CV download button
        ├── Hero.jsx                    # Hero section with animated gradient text, CTAs, social links
        ├── HeroImage.jsx              # Profile image with floating name badge animation
        ├── TechStack.jsx              # Tech stack grid with hover rotation (8 technologies)
        ├── Skill.jsx                   # Skills with animated progress bars (3 categories)
        ├── Projects.jsx               # Featured 3 projects grid with "All Projects" link
        ├── ProjectCard.jsx            # Individual project card component
        ├── About.jsx                  # About section with bio, features, work experience, hobbies
        ├── Education.jsx              # Education timeline cards
        ├── Contact.jsx                # Contact section with form + EmailJS integration
        └── Footer.jsx                 # Footer with copyright
```

## Homepage Sections

| # | Section | Component | Description |
|---|---|---|---|
| 1 | Navbar | `Navbar.jsx` | Fixed top navigation with glassmorphism, desktop links + mobile slide-out menu |
| 2 | Hero | `Hero.jsx` + `HeroImage.jsx` | Landing hero with animated gradient text, profile image, CTA buttons, social links |
| 3 | Tech Stack | `TechStack.jsx` | Grid of 8 technology icons with 360-degree hover rotation |
| 4 | Skills | `Skill.jsx` | 3-category skill grid with animated progress bars |
| 5 | Projects | `Projects.jsx` | Featured 3 project cards with links to full listing |
| 6 | About | `About.jsx` | Bio, journey story, feature highlights, work experience, hobbies |
| 7 | Education | `Education.jsx` | Education timeline with degree cards |
| 8 | Contact | `Contact.jsx` | Contact info + form powered by EmailJS |
| 9 | Footer | `Footer.jsx` | Copyright and credits with pulsing heart |

## Routes

| Route | Component | Access | Description |
|---|---|---|---|
| `/` | `Index` | Public | Homepage with all 9 sections |
| `/all-projects` | `AllProjects` | Public | Full project listing with filter tabs, detail modals, screenshot galleries, and contact CTA |

## Features

### Animations (Framer Motion)
- **Hero:** Staggered fade-in-up animations, animated gradient text background-position, floating background blurs with infinite loops
- **Hero Image:** Spring-animated scale-in, floating name badge with continuous y-axis oscillation, waving hand emoji
- **Tech Stack:** Staggered container/item variants, 360-degree icon rotation on hover, lift-on-hover effect
- **Skills:** `whileInView` animated progress bar fills, scale-in on cards
- **Projects:** Staggered card reveal, hover lift effect, image scale on hover, overlay buttons
- **About:** `useInView`-triggered animations, feature items stagger, Programming Hero logo spring animation
- **Education:** Staggered card reveal
- **Contact:** Slide-in animations for info items, spring animation for form card
- **Navbar:** Staggered nav item entrance, slide-down mobile menu with `AnimatePresence`
- **NavContact:** Copy-to-clipboard success animation, bouncing download icon

### Dark Theme
- Permanently dark-themed UI with custom CSS variables
- Glassmorphism panels with `backdrop-blur` and semi-transparent backgrounds
- Custom utility classes: `.glass-panel`, `.text-gradient`, `.shadow-custom`

### Responsive Design
- Mobile-first layout with Tailwind breakpoints
- Responsive grids (1-col mobile → 2-col tablet → 3-col desktop)
- Mobile slide-out navigation menu
- `prefers-reduced-motion` media query disables all animations

### Project Showcase
- Filter projects by category: All Projects, Full Stack, Frontend
- Detail modals with:
  - Screenshot gallery with thumbnail selector
  - Tech stack with devicon logos
  - Key features checklist
  - Challenges & Solutions section
  - Previous/next navigation
  - Keyboard Escape to close
- Contact modal triggered from project CTA section

### Contact Form
- Full form: Name, Email, Subject, Message
- Powered by EmailJS (service + template + public key)
- Form states: idle → sending → success/error
- Form resets on successful submission

### Navigation
- Fixed navbar with glassmorphism effect (`bg-background/80 backdrop-blur-md`)
- Desktop: Home, About, Stack, Projects links + "Let's Talk" CTA
- Mobile: Hamburger menu with `AnimatePresence` slide-down animation
- `ScrollToTop` component resets scroll on route change

### Additional Features
- Email copy-to-clipboard with animated checkmark feedback
- CV/resume download button
- Mailto link button
- `cn()` utility for conditional Tailwind class merging

## Projects Showcase

| # | Project | Category | Duration | Tech Stack | Demo | Repo |
|---|---|---|---|---|---|---|
| 1 | **MindAgent** — AI Multi-Agent Platform | Full-Stack | 2 Months | Next.js, TypeScript, Tailwind, shadcn/ui, Express, MongoDB, TanStack Query | [Live](https://mindagent-client.vercel.app/) | [GitHub](https://github.com/nasirmasud/mindagent-client/) |
| 2 | **GameDB** — Game Discovery & Review | Full-Stack | 3 Weeks | Next.js 16, React 19, TypeScript, MongoDB, NextAuth, Chart.js, Swiper, RAWG API | [Live](https://game-db-mocha.vercel.app/) | [GitHub](https://github.com/nasirmasud/gameDB/) |
| 3 | **Fable** — E-book Marketplace | Full-Stack | 2 Months | Next.js, React, Tailwind, shadcn/ui, Express, MongoDB, Stripe, BetterAuth, Framer Motion | [Live](https://fable-amber.vercel.app/) | [GitHub](https://github.com/nasirmasud/Fable/) |
| 4 | **MediQueue** — Medical Tutoring Marketplace | Full-Stack | 1 Month | Next.js, React, Tailwind, DaisyUI, HeroUI, Express, MongoDB, Better Auth, Swiper | [Live](https://b13-a9-client.vercel.app/) | [GitHub](https://github.com/nasirmasud/MediQueue/) |
| 5 | **KeenKeeper** — Friend Interaction Dashboard | Full-Stack | 2 Weeks | Next.js, React, Tailwind, DaisyUI, Recharts, Context API | [Live](https://b13-a7-keen-keeper.vercel.app/) | [GitHub](https://github.com/nasir-masud/b13-a7) |
| 6 | **SkillSphere** — Skill Learning Platform | Full-Stack | 1 Month | Next.js, React, JavaScript, Tailwind, DaisyUI, HeroUI, Framer Motion, Better Auth, MongoDB | [Live](http://b13-a8.vercel.app) | [GitHub](https://github.com/nasirmasud/SkillSphere/) |
| 7 | **DigiTools** — Digital Tools Store | Front-End | 1 Week | React.js, JavaScript, Tailwind CSS, DaisyUI, React-Toastify | [Live](https://digitools-nasirmasud.netlify.app/) | [GitHub](https://github.com/nasirmasud/B13-A6/) |
| 8 | **GitHub Issue Tracker** | Frontend | 1 Week | HTML, Tailwind CSS, DaisyUI, JavaScript, Vanilla JS, REST API | [Live](https://nasirmasud.github.io/B13-A05/) | [GitHub](https://github.com/nasirmasud/B13-A05) |
| 9 | **Weather** — Weather Forecast App | Front-End | 1 Week | Next.js 16, React 19, TypeScript, Tailwind, Jotai, TanStack Query, Axios, OpenWeatherMap API | [Live](https://next-weather-nine.vercel.app/) | [GitHub](https://github.com/nasirmasud/next-weather/) |

## Skills

### Frontend Development

| Skill | Level |
|---|---|
| React | 90% |
| Next.js | 85% |
| Tailwind CSS | 95% |
| JavaScript / TypeScript | 85% |

### Backend & Database

| Skill | Level |
|---|---|
| Node.js | 80% |
| MongoDB | 75% |
| Prisma ORM | 80% |
| REST APIs | 85% |

### Tools & Others

| Skill | Level |
|---|---|
| Git & GitHub | 90% |
| Figma / Pixso | 70% |
| VS Code Customization | 95% |
| Postman | 85% |

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone the repository
git clone https://github.com/nasirmasud/nasir-protfolio.git
cd nasir-protfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials (see Environment Variables below)

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Environment Variables

Create a `.env.local` file in the project root:

| Variable | Required | Description |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Yes | EmailJS service ID (e.g., `service_xxxxxx`) |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes | EmailJS template ID (e.g., `template_xxxxxx`) |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key for client-side auth |

## Performance & Accessibility

- **Lazy Animations:** Framer Motion `whileInView` with `viewport={{ once: true }}` triggers animations only when elements enter the viewport
- **Reduced Motion:** `prefers-reduced-motion` media query disables all animations for users who prefer it
- **Semantic HTML:** Proper use of `<section>`, `<nav>`, `<main>`, `<footer>` elements
- **ARIA Labels:** Icon-only buttons include `aria-label` attributes
- **GPU Acceleration:** `will-change: transform` applied to frequently animated elements
- **Responsive Images:** `SmartImage` component with graceful fallback to gradient placeholders on load failure
