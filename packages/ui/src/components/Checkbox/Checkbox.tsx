import { useUniqueId } from "@services-ui/a11y";
import {
  forwardRef,
  useEffect,
  useRef,
  type InputHTMLAttributes,
  type MutableRefObject,
  type ReactNode,
  type Ref
} from "react";

import { cx } from "../../utils";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
  description?: ReactNode;
  indeterminate?: boolean;
}

function assignRefs<T>(value: T | null, ...refs: Array<Ref<T> | undefined>) {
  refs.forEach((ref) => {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      (ref as MutableRefObject<T | null>).current = value;
    }
  });
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, description, disabled, id, indeterminate = false, label, ...props }, forwardedRef) => {
    const inputId = useUniqueId("checkbox", id);
    const descriptionId = description ? `${inputId}-description` : undefined;
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <div className={cx("sui-checkbox", className)} data-disabled={disabled ? "true" : undefined}>
        <input
          ref={(node) => {
            inputRef.current = node;
            assignRefs(node, forwardedRef);
          }}
          id={inputId}
          className="sui-checkbox__input"
          type="checkbox"
          disabled={disabled}
          aria-describedby={descriptionId}
          aria-checked={indeterminate ? "mixed" : undefined}
          {...props}
        />
        <label className="sui-checkbox__label" htmlFor={inputId}>
          <span className="sui-checkbox__control" aria-hidden="true" />
          <span className="sui-checkbox__copy">
            <span className="sui-checkbox__title">{label}</span>
            {description ? (
              <span className="sui-checkbox__description" id={descriptionId}>
                {description}
              </span>
            ) : null}
          </span>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
