import { Keys, useUniqueId } from "@services-ui/a11y";
import {
  cloneElement,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode
} from "react";

import { cx } from "../../utils";

type TooltipChildProps = {
  "aria-describedby"?: string;
  onBlur?: (event: FocusEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
};

export interface TooltipProps {
  children: ReactElement<TooltipChildProps>;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  delay?: number;
  disabled?: boolean;
  className?: string;
}

export function Tooltip({
  children,
  className,
  content,
  delay = 250,
  disabled = false,
  side = "top"
}: TooltipProps) {
  const tooltipId = useUniqueId("tooltip");
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function clearDelay() {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  function showTooltip() {
    if (disabled) {
      return;
    }

    clearDelay();
    if (delay === 0) {
      setOpen(true);
      return;
    }
    timeoutRef.current = window.setTimeout(() => setOpen(true), delay);
  }

  function hideTooltip() {
    clearDelay();
    setOpen(false);
  }

  const trigger = cloneElement(children, {
    "aria-describedby": open ? tooltipId : children.props["aria-describedby"],
    onBlur: (event: FocusEvent) => {
      children.props.onBlur?.(event);
      hideTooltip();
    },
    onFocus: (event: FocusEvent) => {
      children.props.onFocus?.(event);
      showTooltip();
    },
    onKeyDown: (event: KeyboardEvent) => {
      children.props.onKeyDown?.(event);
      if (event.key === Keys.Escape) {
        hideTooltip();
      }
    },
    onMouseEnter: (event: MouseEvent) => {
      children.props.onMouseEnter?.(event);
      showTooltip();
    },
    onMouseLeave: (event: MouseEvent) => {
      children.props.onMouseLeave?.(event);
      hideTooltip();
    }
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span className={cx("sui-tooltip", className)} data-side={side}>
      {trigger}
      {open ? (
        <span className="sui-tooltip__content" id={tooltipId} role="tooltip">
          {content}
        </span>
      ) : null}
    </span>
  );
}
