# Patty Moore — Film Director Portfolio

A high-fidelity, production-ready portfolio for film director Patty Moore, built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

The design embodies the **"Auteur Theory"**—positioning Patty Moore as a visionary master of atmospheric thrillers through extreme restraint and surgical control.

## 📐 Design Philosophy: Minimalism Equals Confidence

Every design decision removes clutter to communicate seriousness, profundity, and cinematic tension.

- **Monochromatic Chiaroscuro Palette**: Slate Grey (`#5C5C5C`), Charcoal (`#222222`), and Off-White (`#F0F2F5`).
- **Typography**: Single monolithic Neo-Grotesque font family (Geist Sans). Hierarchy is built through scale, weight, and tracking only.
- **Atmosphere**: No borders, dropshadows, or gradients. Visual texture is derived entirely from desaturated photography and typographic rhythm.
- **Cinematic Pacing**: Background color transitions between dark and light sections mimic film cuts and lighting shifts.

## 🏗️ Project Structure

- `src/components/patty-moore/`: Custom high-fidelity component library.
  - `HeroTypography.tsx`: Staggered letter-spacing reveal for hero titles.
  - `ChiaroscuroDivider.tsx`: Scroll-animated section transitions.
  - `GridGallery.tsx`: Swiss-style archival grid for work and press.
  - `DataList.tsx`: High-density informational disclosures.
  - `Navbar.tsx`: Minimalist navigation with blend-mode contrast.
- `src/app/`: App Router structure with dedicated pages:
  - `Home`: Split-screen hero experience.
  - `Work`: Archival film catalog.
  - `About`: Narrative biography and vision.
  - `Accolades`: Awards index with progressive unveils.
  - `Press`: Media clipping index.
  - `Contact`: Communiqué portal with cinematic wide-shot.
- `public/images/`: Optimized cinematic placeholders generated with high-contrast noir aesthetic.

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Launch Dev Server**:
    ```bash
    npm run dev
    ```

3.  **Explore the Demo**:
    Visit [/demo](http://localhost:3000/demo) for a component-level architectural showcase.

## 📽️ Design Specification

Animation timing is restrained and purposeful (`ease-out`, `cubic-bezier`). Respect for `prefers-reduced-motion` is prioritized. The grid is sacred; alignment is maintained rigorously across all breakpoints.
