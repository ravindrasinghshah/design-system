import { PropsType } from "./types";

/**
 * Button component using design tokens via Tailwind classes
 *
 * Uses:
 * - Brand colors: bg-brand-primary, text-brand-secondary (from tokens.color.brand)
 * - Design token spacing: p-2, p-4, p-6 (from tokens.spacing)
 * - Design token border radius: rounded-lg (from tokens.borderRadius)
 */
export default function Button(
  props: PropsType = {
    type: "primary",
    size: "medium",
    disabled: false,
    children: undefined,
    onClick: () => {},
    className: "",
  }
) {
  // Determine variant classes
  const variantClasses =
    props.type === "secondary"
      ? "bg-brand-secondary text-brand-primary"
      : "bg-brand-primary text-brand-secondary";

  // Determine size classes (using design token spacing)
  const sizeClasses =
    props.size === "small"
      ? "p-2"
      : props.size === "medium"
      ? "p-4"
      : props.size === "large"
      ? "p-6"
      : "p-4"; // default to medium

  // Determine disabled state classes
  const disabledClasses = props.disabled
    ? "opacity-50 cursor-not-allowed bg-neutral-300 text-neutral-900"
    : "cursor-pointer";

  return (
    <button
      className={`${variantClasses} ${sizeClasses} ${
        props.size === "full" ? "w-full" : ""
      } ${disabledClasses} border border-neutral-300 rounded-lg transition-colors`}
      disabled={props.disabled || false}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
