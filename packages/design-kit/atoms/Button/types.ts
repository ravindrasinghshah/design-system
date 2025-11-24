import { ReactNode, MouseEvent } from "react";
export type PropsType = {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "full";
  disabled?: boolean;
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};
