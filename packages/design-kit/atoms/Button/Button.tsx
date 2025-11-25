import { PropsType } from "./types";
import React from "react";
/**
 * Button component using design tokens via Tailwind classes:
 * - Brand colors: bg-brand-primary, text-brand-secondary (from tokens.color.brand)
 * - Design token spacing: p-2, p-4, p-6 (from tokens.spacing)
 * - Design token border radius: rounded-lg (from tokens.borderRadius)
 */
const Button = React.forwardRef<HTMLButtonElement, PropsType>(
  (
    { variant = "primary", size = "medium", children, className, ...rest },
    ref
  ) => {
    // Determine variant classes
    const variantClasses =
      variant === "secondary"
        ? "bg-brand-secondary text-brand-primary"
        : "bg-brand-primary text-brand-secondary";

    // Determine size classes (using design token spacing)
    const sizeClasses =
      size === "small"
        ? "p-2"
        : size === "medium"
        ? "p-4"
        : size === "large"
        ? "p-6"
        : "p-4"; // default to medium

    return (
      <button
        ref={ref}
        className={`${variantClasses} ${sizeClasses} ${
          size === "full" ? "w-full" : ""
        } border border-neutral-300 rounded-lg transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
