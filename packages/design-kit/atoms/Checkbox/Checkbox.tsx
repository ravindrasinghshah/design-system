import { PropsType } from "./types";
import React from "react";
/**
 * Checkbox component using design tokens via Tailwind classes:
 * - Design token disabled: cursor-not-allowed
 */
const Checkbox = React.forwardRef<HTMLInputElement, PropsType>(
  ({ checked, onChange, disabled = false, className = "", ...rest }, ref) => {
    const disabledClasses = disabled ? "cursor-not-allowed" : "cursor-pointer";

    return (
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={`w-4 h-4 ${disabledClasses} ${className}`}
        {...rest}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
