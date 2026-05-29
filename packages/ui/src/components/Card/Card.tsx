import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "../../utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: "none" | "sm" | "md";
  interactive?: boolean;
}

export function Card({
  className,
  elevation = "sm",
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cx("sui-card", className)}
      data-elevation={elevation}
      data-interactive={interactive ? "true" : undefined}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("sui-card__header", className)} {...props} />;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3 className={cx("sui-card__title", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx("sui-card__description", className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("sui-card__content", className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("sui-card__footer", className)} {...props} />;
}
