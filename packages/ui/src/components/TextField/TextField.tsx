import { useUniqueId } from "@services-ui/a11y";
import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

import { cx } from "../../utils";

export type TextFieldSize = "sm" | "md" | "lg";

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "size"> {
  label: string;
  helperText?: ReactNode;
  error?: ReactNode;
  size?: TextFieldSize;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      disabled,
      endAdornment,
      error,
      helperText,
      id,
      label,
      required,
      size = "md",
      startAdornment,
      ...props
    },
    ref
  ) => {
    const inputId = useUniqueId("textfield", id);
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

    return (
      <div className={cx("sui-field", className)} data-disabled={disabled ? "true" : undefined}>
        <label className="sui-field__label" htmlFor={inputId}>
          {label}
          {required ? <span aria-hidden="true"> *</span> : null}
        </label>
        <div className="sui-text-field" data-size={size} data-invalid={error ? "true" : undefined}>
          {startAdornment ? <span className="sui-text-field__adornment">{startAdornment}</span> : null}
          <input
            ref={ref}
            id={inputId}
            className="sui-text-field__input"
            disabled={disabled}
            required={required}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy}
            {...props}
          />
          {endAdornment ? <span className="sui-text-field__adornment">{endAdornment}</span> : null}
        </div>
        {helperText ? (
          <p className="sui-field__message" id={helperId}>
            {helperText}
          </p>
        ) : null}
        {error ? (
          <p className="sui-field__message sui-field__message--error" id={errorId}>
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = "TextField";
