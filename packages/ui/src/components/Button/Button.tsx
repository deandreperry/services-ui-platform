import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cx } from "../../utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      isLoading = false,
      leftIcon,
      rightIcon,
      size = "md",
      type = "button",
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        className={cx("sui-button", className)}
        data-size={size}
        data-variant={variant}
        data-loading={isLoading ? "true" : undefined}
        disabled={isDisabled}
        type={type}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading ? <span aria-hidden="true" className="sui-button__spinner" /> : leftIcon}
        <span className="sui-button__label">{children}</span>
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
