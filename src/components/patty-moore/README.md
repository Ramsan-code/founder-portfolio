# Patty Moore Portfolio — Component Library

A high-fidelity, production-ready component library for the Patty Moore Portfolio, built using **Next.js**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

## Design Philosophy: Minimalism Equals Confidence

The library is designed with an "Auteur Theory" approach, emphasizing atmospheric control, tight typography, and monochromatic rhythm.

- **Palette**: Slate Grey (`#5C5C5C`), Charcoal (`#222222`), Off-White (`#F0F2F5`).
- **Typography**: Single Neo-Grotesque Sans-Serif (Geist Sans).
- **Aesthetic**: No borders, no drop shadows, no gradients.

---

## Component Guide

### 1. HeroTypography
Creates dominant cinematic typography that scales responsively.
- **Animation**: Staggered letter-spacing reveal on mount.
- **Usage**:
  ```tsx
  <HeroTypography 
    text="PATTY MOORE" 
    subtitle="Director · Visionary" 
  />
  ```

### 2. ChiaroscuroDivider
Cinematic transitions between dark (`#222222`) and light (`#F0F2F5`) themes.
- **Behavior**: Smooth background shift on scroll, mimicking a film cut.
- **Props**: `toTheme: "dark" | "light"`.
- **Usage**:
  ```tsx
  <ChiaroscuroDivider toTheme="light" />
  ```

### 3. GridGallery
Swiss-style archival grid for showcasing works, press, or accolades.
- **Animation**: Subtle fade-in on intersection.
- **Layout**: 3-column rigid grid (Desktop) collapsing to 1-column (Mobile).
- **Usage**:
  ```tsx
  <GridGallery items={workItems} />
  ```

### 4. DataList
High-density informational listing with scroll-triggered unveils.
- **Purpose**: Biographies, press mentions, or technical data.
- **Usage**:
  ```tsx
  <DataList title="Selected Press" items={data} columns={1} />
  ```

---

## Technical Integration

These components are built as TypeScript + shadcn/ui composites and depend on `framer-motion` and `lucide-react`.

### Installation
Ensure dependencies are installed:
```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

### Tailwind Configuration
The library uses custom brand colors defined in `src/app/globals.css` within the Tailwind v4 `@theme` block.

---

## Demo Page
A preview of the entire library is available at `/demo`.
