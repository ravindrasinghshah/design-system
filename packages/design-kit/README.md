# Design Kit

A comprehensive design system built with design tokens, Tailwind CSS, and theme support.

## Architecture

### Source of Truth Hierarchy

```
design.tokens.ts (Source of Truth)
    ↓
tailwind.config.js (Imports tokens, creates utilities)
    ↓
Components (Use Tailwind classes like p-2, bg-bg-primary)
```

### Design Tokens (`design.tokens.ts`)

**Single source of truth** for all design values:
- Spacing scale (mobile-first)
- Typography (font families, sizes, weights)
- Base color palette (slate, green, red, blue, yellow)
- Border radius
- Shadows
- Z-index scale
- Transitions
- Breakpoints

### Themes (`themes.ts`)

Provides **semantic color values** via CSS variables:
- Background colors (`--color-bg-primary`, etc.)
- Text colors (`--color-text-primary`, etc.)
- Border colors (`--color-border-primary`, etc.)
- Status colors (`--color-status-success`, etc.)

These values are applied to the DOM via `ThemeProvider` and referenced in Tailwind config as CSS variables.

## Component Development Guidelines

### ✅ Use Tailwind Classes (Recommended)

Components should use Tailwind utility classes, which are generated from design tokens:

```tsx
// ✅ Good - Uses Tailwind classes generated from design tokens
<button className="p-4 bg-bg-primary text-text-primary rounded-lg">
  Click me
</button>
```

**Why?**
- Tailwind classes are generated from `tokens.spacing`, `tokens.borderRadius`, etc.
- Semantic colors (`bg-bg-primary`) use CSS variables from themes
- Consistent, type-safe, and maintainable
- Change tokens → Tailwind regenerates → components update automatically

### ✅ Import Tokens for Programmatic Use

When you need actual values for calculations, conditional logic, or non-CSS usage:

```tsx
import { tokens } from '@/packages/design-kit/global/design.tokens';

// Use tokens programmatically
const spacing = tokens.spacing[4]; // "1rem"
const breakpoint = tokens.breakpoints.md; // "768px"

// Example: Media query calculations
const isMobile = window.innerWidth < parseInt(tokens.breakpoints.md);
```

**Use cases:**
- Media query calculations
- Conditional styling logic
- Animation values
- Component prop defaults

### ❌ Don't Reference `tailwind.config.js`

The Tailwind config is a **build-time configuration layer**, not a source of truth:
- Components should use Tailwind classes (not import the config)
- Design tokens are the source of truth
- Tailwind config bridges tokens to utilities

## Design Token Categories

### 1. Static Values (from `design.tokens.ts` → Tailwind)

These values come directly from design tokens and are available as Tailwind utilities:

- **Spacing**: `p-2`, `p-4`, `m-6` (from `tokens.spacing`)
- **Typography**: `text-base`, `font-semibold` (from `tokens.typography`)
- **Base Colors**: `bg-slate-500`, `text-blue-600` (from `tokens.colors`)
- **Border Radius**: `rounded-lg` (from `tokens.borderRadius`)
- **Shadows**: `shadow-md` (from `tokens.boxShadow`)
- **Z-index**: `z-50` (from `tokens.zIndex`)

### 2. Theme-Aware Values (from `themes.ts` → CSS Variables → Tailwind)

These values use CSS variables that can be overridden by themes:

- **Semantic Colors**: `bg-bg-primary`, `text-text-primary` (via CSS variables)
- Configured in Tailwind to use `var(--color-bg-primary)` etc.
- Automatically adapt to theme changes

## Example: Button Component

```tsx
import { PropsType } from "./types";

/**
 * Button component using design tokens via Tailwind classes
 * 
 * Uses:
 * - Semantic colors: bg-bg-primary, text-text-primary (theme-aware via CSS variables)
 * - Design token spacing: p-2, p-4, p-6 (from tokens.spacing)
 * - Design token border radius: rounded-lg (from tokens.borderRadius)
 */
export default function Button(props: PropsType) {
  const variantClasses =
    props.type === "secondary"
      ? "bg-bg-secondary text-text-secondary"
      : "bg-bg-primary text-text-primary";

  const sizeClasses =
    props.size === "small" ? "p-2"
    : props.size === "medium" ? "p-4"
    : props.size === "large" ? "p-6"
    : "p-4";

  return (
    <button
      className={`${variantClasses} ${sizeClasses} rounded-lg transition-colors`}
    >
      {props.children}
    </button>
  );
}
```

## Best Practices

1. **Use Tailwind classes** for styling (99% of cases)
2. **Import tokens directly** only when you need programmatic access to values
3. **Use semantic colors** (`bg-bg-primary`) for theme-aware components
4. **Use base colors** (`bg-slate-500`) for static, non-theme colors
5. **Follow the spacing scale** from design tokens
6. **Document token usage** in component comments

## Benefits

- **Single source of truth**: Design tokens define all values
- **Type-safe**: Tokens are typed, providing autocomplete and validation
- **Flexible**: Can use tokens programmatically when needed
- **Theme-ready**: Semantic colors use CSS variables → themes can override
- **Maintainable**: Change tokens → Tailwind regenerates → components update

## Related Documentation

- [Theme System](./theme/README.md) - Theme provider and customization
- [Design Tokens](./global/design.tokens.ts) - All available design tokens

