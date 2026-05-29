# Component API Guidelines

Component APIs should feel predictable across products and remain stable as teams scale usage.

## API Shape

- Use explicit prop names such as `variant`, `size`, `isLoading`, and `onOpenChange`.
- Prefer native element props by extending the appropriate React HTML attribute type.
- Avoid styling-only escape hatches unless the component already supports the required state through tokens or variants.
- Use controlled and uncontrolled patterns intentionally. Complex state should expose controlled props.
- Keep names product-neutral. Components should not encode one team’s domain language.

## Accessibility Defaults

- Every interactive component must have a keyboard path.
- Inputs must connect labels, helper text, and errors with IDs.
- Overlays must trap focus, close with Escape, and restore focus.
- Custom widgets must follow WAI-ARIA Authoring Practices for roles and keyboard interaction.

## Styling Contract

Components use scoped `.sui-*` classes and CSS custom properties. Product teams can theme through tokens without replacing component internals.

## Required Files for New Components

- Component implementation with typed props.
- Scoped CSS in `src/styles.css` or a component-specific stylesheet if the package evolves.
- Storybook stories for common states.
- Vitest and Testing Library tests for important behavior.
- Documentation notes when API or accessibility behavior needs explanation.
