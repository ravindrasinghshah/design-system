/* input component using atoms and design tokens */

import { PropsType } from "./types";
import React, { ChangeEvent } from "react";
const Input = React.forwardRef<HTMLInputElement, PropsType>(
  (
    {
      value,
      onChange,
      type = "text",
      className = "",
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value, e);
    };

    const disabledClasses = disabled ? "cursor-not-allowed" : "";
    return (
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={handleChange}
        className={`border border-brand-tertiary text-brand-secondary rounded-lg p-2 ${disabledClasses} ${className}`}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
