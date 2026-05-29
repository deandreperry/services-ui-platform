# Architecture

Services UI Platform is organized as a pnpm workspace with Turborepo orchestration. The repo separates product-facing applications from reusable platform packages so teams can develop, validate, and release shared UI infrastructure without coupling it to a single product surface.

## Workspace Layout

- `apps/docs` is the internal documentation surface for platform consumers.
- `apps/playground` is a realistic product playground that proves the component APIs work in complete screens.
- `packages/ui` contains React components and their stories, styles, and tests.
- `packages/tokens` owns raw token scales, semantic CSS variables, and light/dark themes.
- `packages/a11y` provides shared accessibility primitives for focus, keyboard, IDs, and ARIA patterns.
- `packages/icons` contains a small React SVG icon set used by examples.
- `packages/eslint-config` and `packages/tsconfig` centralize engineering standards.

## Package Boundaries

The UI package depends on accessibility and icons. Apps depend on UI and tokens. Tokens do not depend on React. This keeps foundational design decisions portable across React components, documentation, and product applications.

## Build Strategy

Each package owns its build script. Turborepo coordinates dependency order and caches outputs:

- `build` emits distributable package artifacts or app bundles.
- `typecheck` verifies public and app code paths.
- `test` runs Vitest and Testing Library suites.
- `lint` applies the shared ESLint config.

Apps use Vite aliases to consume workspace source during development. Published packages still emit `dist` artifacts for package consumers.

## Design Principles

- Prefer native HTML semantics before custom widget behavior.
- Keep component APIs explicit and controlled where state coordination matters.
- Route all visual decisions through CSS variables.
- Test user behavior rather than implementation details.
- Document migration and release impact with Changesets.
