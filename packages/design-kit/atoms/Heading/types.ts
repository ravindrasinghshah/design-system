import React from "react";

export type PropsType = {
  children: React.ReactNode;
  as?: keyof typeof headingAs;
  className?: string;
};

export const headingAs = {
  h1: "text-6xl font-bold",
  h2: "text-5xl font-semibold",
  h3: "text-4xl font-semibold",
  h4: "text-3xl font-medium",
  h5: "text-2xl font-medium",
  h6: "text-xl font-medium",
} as const;
