import { PropsType, headingAs } from "./types";

/**
 * Heading component using design tokens via Tailwind classes:
 * - Design token font sizes: text-6xl, text-5xl, text-4xl, text-3xl, text-2xl, text-xl (from tokens.fontSize)
 * - Design token font weights: font-bold, font-semibold, font-medium (from tokens.fontWeight)
 */
export default function Heading({
  as = "h1",
  className = "",
  children,
}: PropsType) {
  const Component = as;
  return (
    <Component className={`${headingAs[as]} ${className}`}>
      {children}
    </Component>
  );
}
