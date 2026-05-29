# Accessibility Standards

Accessibility is a release requirement for shared UI. Components should make the accessible path the default path.

## Baseline Standards

- Use semantic HTML before ARIA.
- Preserve visible focus indicators.
- Support keyboard operation for all interactive controls.
- Connect labels, descriptions, and errors with stable IDs.
- Use `aria-invalid`, `aria-describedby`, and live regions intentionally.
- Respect disabled states visually and functionally.

## Dialogs and Overlays

Dialogs must:

- Render with `role="dialog"` and `aria-modal="true"`.
- Connect a visible title with `aria-labelledby`.
- Move focus into the dialog on open.
- Trap focus while open.
- Close with Escape.
- Restore focus when dismissed.

## Composite Widgets

Tabs, menus, and similar widgets must implement roving focus and documented keyboard behavior. Tests should cover arrow keys, Home/End where applicable, disabled items, and selection changes.

## Testing Expectations

Testing Library tests should query by role and accessible name. This keeps tests aligned with what assistive technologies perceive and discourages brittle implementation assertions.
