import { useFocusTrap, useUniqueId } from "@services-ui/a11y";
import { CloseIcon } from "@services-ui/icons";
import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";

import { cx } from "../../utils";
import { Button } from "../Button/Button";

export type ModalSize = "sm" | "md" | "lg";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  closeLabel?: string;
  closeOnOverlayClick?: boolean;
  initialFocusRef?: RefObject<HTMLElement | null>;
  className?: string;
}

export function Modal({
  children,
  className,
  closeLabel = "Close dialog",
  closeOnOverlayClick = true,
  description,
  footer,
  initialFocusRef,
  onOpenChange,
  open,
  size = "md",
  title
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const titleId = useUniqueId("modal-title");
  const descriptionId = description ? `${titleId}-description` : undefined;

  useFocusTrap(modalRef, open, {
    initialFocus: initialFocusRef?.current,
    onEscape: () => onOpenChange(false)
  });

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className="sui-modal__overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
          onOpenChange(false);
        }
      }}
    >
      <div
        ref={modalRef}
        className={cx("sui-modal", className)}
        data-size={size}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <div className="sui-modal__header">
          <div>
            <h2 className="sui-modal__title" id={titleId}>
              {title}
            </h2>
            {description ? (
              <p className="sui-modal__description" id={descriptionId}>
                {description}
              </p>
            ) : null}
          </div>
          <Button
            aria-label={closeLabel}
            className="sui-modal__close"
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
          >
            <CloseIcon size={18} />
          </Button>
        </div>
        <div className="sui-modal__body">{children}</div>
        {footer ? <div className="sui-modal__footer">{footer}</div> : null}
      </div>
    </div>,
    document.body
  );
}
