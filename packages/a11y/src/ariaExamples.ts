export const ariaPatterns = {
  modal: {
    role: "dialog",
    required: ["aria-modal", "aria-labelledby"],
    notes: "Move focus into the dialog on open, trap focus while open, and restore focus on close."
  },
  tabs: {
    roles: ["tablist", "tab", "tabpanel"],
    required: ["aria-selected", "aria-controls", "aria-labelledby"],
    notes: "Arrow keys move between tabs, Home and End jump to the first and last tab."
  },
  tooltip: {
    roles: ["tooltip"],
    required: ["aria-describedby"],
    notes: "Tooltips must be dismissible, hoverable, persistent while focused, and non-interactive."
  },
  textField: {
    required: ["label or aria-label"],
    notes: "Connect helper text and errors with aria-describedby, and use aria-invalid for validation."
  }
} as const;

export type AriaPatternName = keyof typeof ariaPatterns;
