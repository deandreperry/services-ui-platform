import type { HTMLAttributes } from "react";

import { cx } from "../../utils";

export type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export function Badge({ className, size = "md", variant = "neutral", ...props }: BadgeProps) {
  return (
    <span className={cx("sui-badge", className)} data-size={size} data-variant={variant} {...props} />
  );
}
