import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const visuallyHiddenStyle: CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0
};

export function VisuallyHidden({ children, style, ...props }: VisuallyHiddenProps) {
  return (
    <span style={{ ...visuallyHiddenStyle, ...style }} {...props}>
      {children}
    </span>
  );
}
