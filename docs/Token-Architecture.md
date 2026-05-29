# Token Architecture

The token system separates raw scales from semantic theme variables.

## Raw Tokens

`packages/tokens/src/tokens.ts` exports typed scales for:

- colors
- typography
- spacing
- radius
- shadows
- motion
- breakpoints
- z-index

Raw tokens are stable design primitives. They should not describe product intent.

## Semantic Variables

`themes.css` maps raw visual decisions into semantic CSS variables such as:

- `--sui-color-bg-canvas`
- `--sui-color-bg-surface`
- `--sui-color-text-primary`
- `--sui-color-border-focus`
- `--sui-color-accent`

Components consume semantic variables so themes can change without editing component CSS.

The package also exports a typed `themes` map from TypeScript for documentation, validation, and non-CSS consumers that need to inspect semantic values.

## Theme Strategy

Light and dark themes are applied with `data-theme="light"` and `data-theme="dark"`. The root theme defaults to light. Product apps can set the attribute at the document, app shell, or preview container level.

## Governance

New tokens should be added when they represent a reusable decision across multiple components or product surfaces. One-off component values should remain local until repeated usage proves they belong in the system.
