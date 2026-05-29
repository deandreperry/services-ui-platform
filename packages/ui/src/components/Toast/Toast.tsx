import { createUniqueId } from "@services-ui/a11y";
import { CloseIcon } from "@services-ui/icons";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

import { cx } from "../../utils";

export type ToastTone = "neutral" | "success" | "warning" | "danger";

export interface ToastMessage {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  duration?: number;
}

export interface ToastProps {
  toast: ToastMessage;
  onDismiss?: (id: string) => void;
  className?: string;
}

interface ToastContextValue {
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, "id"> & { id?: string }) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((toast: Omit<ToastMessage, "id"> & { id?: string }) => {
    const id = toast.id ?? createUniqueId("toast");
    setToasts((current) => [...current, { ...toast, id }]);
    return id;
  }, []);

  const value = useMemo(
    () => ({
      toasts,
      addToast,
      removeToast
    }),
    [addToast, removeToast, toasts]
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }

  return context;
}

export function Toast({ className, onDismiss, toast }: ToastProps) {
  const tone = toast.tone ?? "neutral";

  useEffect(() => {
    if (!toast.duration) {
      return undefined;
    }

    const timeout = window.setTimeout(() => onDismiss?.(toast.id), toast.duration);
    return () => window.clearTimeout(timeout);
  }, [onDismiss, toast.duration, toast.id]);

  return (
    <div
      className={cx("sui-toast", className)}
      data-tone={tone}
      role={tone === "danger" ? "alert" : "status"}
      aria-live={tone === "danger" ? "assertive" : "polite"}
    >
      <div className="sui-toast__content">
        <strong className="sui-toast__title">{toast.title}</strong>
        {toast.description ? <p className="sui-toast__description">{toast.description}</p> : null}
      </div>
      {onDismiss ? (
        <button
          aria-label="Dismiss notification"
          className="sui-toast__dismiss"
          type="button"
          onClick={() => onDismiss(toast.id)}
        >
          <CloseIcon size={16} />
        </button>
      ) : null}
    </div>
  );
}

export function ToastViewport({ className }: { className?: string }) {
  const { removeToast, toasts } = useToast();

  return (
    <div className={cx("sui-toast-viewport", className)} role="region" aria-label="Notifications">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={removeToast} />
      ))}
    </div>
  );
}
