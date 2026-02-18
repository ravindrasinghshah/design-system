# Design System

A token-driven React design system built with Tailwind CSS and Storybook.

Chromatic: https://www.chromatic.com/library?appId=6926011827ed83ffed72ba54

## Purpose

This repository is both:

- A working design system used to build components consistently
- A reference implementation you can adapt to create your own design system

The detailed architecture and component guidance lives in `packages/design-kit/README.md`.

## Quick Start

### Prerequisites

- Node.js 20+
- npm 10+

### Install and run

```bash
npm install
npm run dev
```

### Storybook

```bash
npm run storybook
```

## Contributor Guide

### Project structure

- `packages/design-kit/tokens/design.tokens.ts`: source of truth for design values
- `packages/design-kit/styles/theme.css`: CSS variables used by semantic theme tokens
- `tailwind.config.js`: maps tokens and semantic values into Tailwind utilities
- `packages/design-kit/atoms`: primitive components
- `packages/design-kit/components`: composed components
- `packages/design-kit/utils/build-tokens.ts`: token build pipeline

### How styling works

1. Define base values in `design.tokens.ts`
2. Build/generate token outputs (`npm run build:tokens`)
3. Tailwind exposes utilities from those tokens
4. Components consume Tailwind classes (`p-4`, `rounded-lg`, `bg-bg-primary`)
5. Theme variables in CSS control semantic colors at runtime

### Contribution workflow

1. Update tokens first when adding/changing spacing, type, colors, radius, shadows, or breakpoints.
2. Use semantic color classes (`bg-bg-primary`, `text-text-primary`) for theme-aware UI.
3. Use direct/base palette classes only when values should remain static.
4. Build and run Storybook to validate visual and interaction behavior.
5. Keep component examples/stories in sync with token or API changes.

### Commands

```bash
npm run dev             # Build tokens and run app
npm run build:tokens    # Rebuild token outputs
npm run storybook       # Start Storybook
npm run build           # Production build
npm run build-storybook # Static Storybook build
```

## Use This As A Blueprint For Your Own Design System

If you want to build your own system inspired by this repo, copy the operating model rather than component details:

1. Establish one token source of truth (`design.tokens.ts` equivalent).
2. Separate base primitives from semantic theme tokens.
3. Map tokens to utility classes (Tailwind or your preferred styling layer).
4. Keep components declarative and token-consumptive, not hardcoded.
5. Add Storybook from day one for visual documentation and regression checks.
6. Automate token build steps so all consumers stay in sync.

### Suggested adaptation path

1. Fork this repository.
2. Replace token scales (spacing, type, color, radius) with your brand language.
3. Replace semantic theme values in theme CSS files.
4. Keep the same token -> styling config -> component pipeline.
5. Add your domain components on top of atoms.

## Design Principles Used Here

- Single source of truth for design decisions
- Semantic tokens for theming flexibility
- Utility-first implementation with token alignment
- Reusable primitives before composed patterns
- Documented UI via Storybook + Chromatic

## Additional docs

- `packages/design-kit/README.md`: detailed architecture and component-level guidance
- `packages/design-kit/tokens/design.tokens.ts`: token definitions
