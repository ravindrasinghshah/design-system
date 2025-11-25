// text component with size and className props

import { PropsType, textSizes } from "./type";
/**
 * Text component using design tokens via Tailwind classes:
 * - Design token font sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl (from tokens.fontSize)
 */
export default function Text({
  children,
  size = "base",
  className = "",
}: PropsType) {
  return <span className={`${textSizes[size]} ${className}`}>{children}</span>;
}
