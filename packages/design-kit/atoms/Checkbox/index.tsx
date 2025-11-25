import { PropsType } from "./types";
/**
 * Checkbox component using design tokens via Tailwind classes:
 * - Design token disabled: cursor-not-allowed
 */
export default function Checkbox({
  checked = false,
  disabled = false,
  onChange = () => {},
  className = "",
}: PropsType) {
  const disabledClasses = disabled ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <input
      type="checkbox"
      className={`w-4 h-4 ${disabledClasses} ${className}`}
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
}
