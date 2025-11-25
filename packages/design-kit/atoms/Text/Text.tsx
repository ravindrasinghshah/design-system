// text component with size and className props

import { PropsType, textSizes } from "./type";
import React from "react";

/**
 * Text component using design tokens via Tailwind classes:
 * - Design token font sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl (from tokens.fontSize)
 */
const Text = React.forwardRef<HTMLSpanElement, PropsType>(
  ({ children, size = "base", className = "", ...rest }, ref) => {
    return (
      <span ref={ref} className={`${textSizes[size]} ${className}`} {...rest}>
        {children}
      </span>
    );
  }
);

Text.displayName = "Text";

export default Text;
