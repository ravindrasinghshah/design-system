import { PropsType, headingLevels } from "./types";

export default function Heading({
  level = "h1",
  className = "",
  children,
}: PropsType) {
  const Component = level;

  return (
    <Component className={`${headingLevels[level]} ${className}`}>
      {children}
    </Component>
  );
}
