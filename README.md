# Services UI Platform

Services UI Platform is a senior-level front-end platform monorepo for shared React UI infrastructure. It demonstrates how an internal platform team can package design tokens, accessible components, documentation, testing, and release workflows for multiple product teams.

The repo is intentionally built like a real platform foundation: package boundaries are explicit, component APIs are documented through Storybook, themes are token-driven, and CI validates the same quality gates maintainers would expect before adoption.

Live docs: https://deandreperry.github.io/services-ui-platform/

## Why This Exists

Product teams should not rebuild buttons, dialogs, tokens, focus behavior, or release conventions in every app. This platform centralizes those decisions so teams can ship product workflows with consistent interaction quality, accessible defaults, and a shared visual language.

## Tech Stack

### Monorepo & Tooling

* PNPM Workspaces
* Turborepo
* TypeScript
* Changesets
* GitHub Actions

### Frontend Development

* React
* Vite
* TypeScript
* CSS Variables
* CSS Modules

### Design System Infrastructure

* Design Tokens
* Light & Dark Themes
* Semantic Token Architecture
* Component API Standards
* Responsive Design Patterns

### Documentation & Developer Experience

* Storybook
* Internal Documentation Site
* Component Usage Examples
* Architecture Guides
* Contribution Standards

### Quality & Testing

* Vitest
* React Testing Library
* ESLint
* Prettier
* Type Checking
* Automated CI Validation

### Accessibility

* WCAG-Oriented Component Design
* Keyboard Navigation
* Focus Management
* ARIA Patterns
* Screen Reader Support

## Professional Focus

This repository showcases front-end platform engineering practices commonly used by large-scale product organizations. The architecture emphasizes reusable UI infrastructure, shared design systems, scalable component APIs, accessibility-first development, automated quality controls, and developer experience.

Areas demonstrated include:

* Design System Engineering
* Component Library Development
* Design Token Architecture
* Accessibility Engineering
* Frontend Platform Development
* Shared Package Management
* Developer Experience (DX)
* CI/CD Workflows
* Documentation Systems
* Frontend Architecture

## Architecture

```txt
services-ui-platform/
├── apps/
│   ├── docs/          # Internal documentation site
│   └── playground/    # Product-like UI demos
├── packages/
│   ├── ui/            # React component library
│   ├── tokens/        # Design tokens and themes
│   ├── a11y/          # Accessibility utilities
│   ├── icons/         # React SVG icons
│   ├── eslint-config/ # Shared lint rules
│   └── tsconfig/      # Shared TypeScript configs
├── docs/              # Platform architecture and governance docs
└── .github/workflows/ # CI quality gates
```

## Packages

- `@services-ui/ui`: Accessible React components with typed props, scoped CSS, tests, and Storybook stories.
- `@services-ui/tokens`: Typed token exports plus CSS variables for light and dark themes.
- `@services-ui/a11y`: Focus trap, visually hidden helper, keyboard helpers, unique IDs, and ARIA examples.
- `@services-ui/icons`: Small React SVG icon set for platform examples.
- `@services-ui/eslint-config`: Shared ESLint flat config.
- `@services-ui/tsconfig`: Shared TypeScript baselines for apps and libraries.

## Apps

- `apps/docs`: Recruiter-friendly internal docs covering overview, setup, tokens, components, accessibility, theming, and contribution guidance.
- `apps/playground`: Two realistic product screens, a media dashboard and settings/preferences page, built from the shared UI and token packages.

## Setup

```bash
pnpm install
pnpm dev
```

Useful scripts:

```bash
pnpm build
pnpm lint
pnpm typecheck
pnpm test
pnpm storybook
pnpm format
pnpm changeset
```

## Design Token Strategy

Tokens are authored once in `packages/tokens` as TypeScript scales and distributed as CSS custom properties. Components consume semantic variables such as `--sui-color-bg-surface`, `--sui-color-text-primary`, and `--sui-color-accent`, which keeps them theme-aware without hard-coding visual decisions.

The design language is clean, neutral, and product-focused: quiet surfaces, crisp contrast, restrained radius, clear focus rings, and enough color to communicate state without turning the system into a single-hue theme.

## Accessibility Strategy

Accessibility is built into the component contract:

- Native controls are preferred wherever possible.
- Form fields connect labels, helper text, and errors.
- Tabs implement keyboard navigation and ARIA relationships.
- Modal traps focus, closes with Escape, and restores focus.
- Toasts use live regions for announcements.
- Tests query by role and accessible name to validate user-perceived behavior.

## Release Workflow

Changesets is configured for package versioning and publishing readiness. Apps are private and ignored by release changes. CI runs install, lint, typecheck, test, and build on pull requests and main branch pushes. Publishing is intentionally not enabled until registry credentials and release governance are added.

## What This Demonstrates Professionally

This repo demonstrates front-end platform judgment: reusable package design, TypeScript API discipline, design token architecture, scoped theming, accessible component behavior, Storybook documentation, product-like integration examples, automated quality gates, and release planning for shared UI infrastructure.

See `docs/Architecture.md`, `docs/Component-API-Guidelines.md`, `docs/Token-Architecture.md`, `docs/Accessibility-Standards.md`, and `docs/Release-Strategy.md` for deeper platform guidance.
