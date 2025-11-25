import { ChangeEvent } from "react";

export type PropsType = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "onChange"
> & {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week";
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};
