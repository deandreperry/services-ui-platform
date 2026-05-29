import { useEffect, type RefObject } from "react";

import { Keys } from "./keys";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[contenteditable='true']"
].join(",");

export interface FocusTrapOptions {
  initialFocus?: HTMLElement | null;
  returnFocus?: HTMLElement | null;
  onEscape?: () => void;
}

export interface FocusTrapController {
  activate: () => void;
  deactivate: () => void;
}

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (element) =>
      !element.hasAttribute("disabled") &&
      element.getAttribute("aria-hidden") !== "true" &&
      element.tabIndex >= 0
  );
}

export function createFocusTrap(
  container: HTMLElement,
  options: FocusTrapOptions = {}
): FocusTrapController {
  const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const returnTarget = options.returnFocus ?? previouslyFocused;

  function focusInitialElement() {
    const target = options.initialFocus ?? getFocusableElements(container)[0] ?? container;
    target.focus();
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === Keys.Escape) {
      options.onEscape?.();
      return;
    }

    if (event.key !== Keys.Tab) {
      return;
    }

    const focusableElements = getFocusableElements(container);
    if (focusableElements.length === 0) {
      event.preventDefault();
      container.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return {
    activate() {
      if (!container.hasAttribute("tabindex")) {
        container.setAttribute("tabindex", "-1");
      }
      document.addEventListener("keydown", handleKeyDown);
      queueMicrotask(focusInitialElement);
    },
    deactivate() {
      document.removeEventListener("keydown", handleKeyDown);
      returnTarget?.focus();
    }
  };
}

export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  enabled: boolean,
  options: FocusTrapOptions = {}
) {
  useEffect(() => {
    if (!enabled || !ref.current) {
      return undefined;
    }

    const trap = createFocusTrap(ref.current, options);
    trap.activate();

    return () => trap.deactivate();
  }, [enabled, options, ref]);
}
