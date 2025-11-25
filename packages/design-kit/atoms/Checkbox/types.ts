export type PropsType = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "onChange"
> & {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
};
