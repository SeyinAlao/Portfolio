# Seyin | Interactive Portfolio 2026

An immersive, high-performance developer portfolio built with **SvelteKit**. This project moves beyond a static "About Me" page — it's an engineered experience that showcases frontend mastery through cinematic transitions, interactive components, and optimized delivery.

**Live Demo:** https://portfolio-three-mocha-sh0pemwljn.vercel.app/  
**Tech Stack:** SvelteKit, Tailwind CSS, Motion One, GSAP, Lucide Svelte

---

## 🚀 Setup & Local Development

1. **Clone & Install:**
   ```bash
   npm install
   ```

2. **Run Dev Server:**
   ```bash
   npm run dev
   ```

3. **Build & Preview:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🏗️ Architecture & Component Strategy

### 1. SvelteKit & Component Composition

The project uses **SvelteKit** for its robust routing and server-side rendering (SSR) capabilities.

- **Isomorphic Rendering:** SSR delivers a fast initial paint and strong SEO, then hydrates into a highly reactive Single Page Application (SPA).
- **Component-Driven Design:** Every UI element (Buttons, Project Cards, Modals) is a reusable Svelte component with scoped styles, keeping the codebase clean and maintainable.
- **Stores for Global State:** Svelte's native `writable` stores manage theme persistence and global animation states.

### 2. Creative Feature: Interactive Terminal / Command Palette

To meet the "Advanced Creative Feature" requirement, I implemented a **Terminal-Driven Navigation** system.

- Users can interact with the portfolio via a command-line interface or a traditional GUI.
- This demonstrates complex state handling and user interaction engineering beyond simple click events.

---

## 🎬 Animation Decisions

Animation is at the heart of the experience. The focus was on **Motion Orchestration** — fluid, not flashy.

- **Native Svelte Transitions:** `fly`, `fade`, and `draw` handle lightweight, performant entrance animations without external library bloat.
- **Motion One:** Used for complex, hardware-accelerated timeline sequences in the Hero section.
- **Staggered Reveals:** Intersection observers trigger staggered animations on scroll to maintain a natural narrative flow.

---

## ⚡ Performance Optimization

Performance is treated as a core feature, targeting perfect Lighthouse scores:

- **Image Optimization:** Modern `avif`/`webp` formats with lazy loading to minimize LCP (Largest Contentful Paint).
- **Code Splitting:** Automatic route-level code splitting ensures users only download JavaScript needed for the current view.
- **Partial Hydration Thinking:** Non-interactive components are kept static to minimize client-side JS.
- **Bundle Efficiency:** Vite's tree-shaking keeps the production bundle lean.

---

## ♿ Accessibility (A11y)

The portfolio is designed to be inclusive from the ground up:

- **Keyboard Navigation:** Full focus-trap management for modals and interactive elements.
- **ARIA Roles:** Proper semantic HTML and ARIA labels throughout for screen reader support.
- **Motion Accessibility:** A `prefers-reduced-motion` media query check disables intensive animations for users with vestibular sensitivities.
- **Contrast & Typography:** Rigorous adherence to WCAG 2.1 color contrast ratios.

---

## ⚖️ Trade-offs Made

- **Svelte vs. React:** Chose Svelte for its "vanishing framework" philosophy — more complex animations with significantly less code and better runtime performance than virtual DOM alternatives.
- **Custom CSS vs. Animation Libraries:** Native CSS and Svelte transitions over large libraries like Framer Motion, prioritizing bundle size and execution speed.
- **Manual State vs. External Libraries:** Native Svelte stores over a heavy state-management library to reduce complexity and keep logic close to the components.

---
