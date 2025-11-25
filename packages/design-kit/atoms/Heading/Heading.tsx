import React from "react";
import { PropsType, headingAs } from "./types";

/**
 * Heading component using design tokens via Tailwind classes:
 * - Design token font sizes: text-6xl, text-5xl, text-4xl, text-3xl, text-2xl, text-xl (from tokens.fontSize)
 * - Design token font weights: font-bold, font-semibold, font-medium (from tokens.fontWeight)
 */
const Heading = React.forwardRef<HTMLHeadingElement, PropsType>(
  ({ as = "h1", className = "", children, ...rest }, ref) => {
    const Component = as;
    return (
      <Component
        ref={ref}
        className={`${headingAs[as]} ${className}`}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
export default Heading;
