# Release Strategy

Services UI Platform is configured for Changesets so package releases can be versioned independently while keeping related platform packages linked when needed.

## Release Flow

1. Contributor opens a pull request with tests, stories, docs, and a changeset when package behavior changes.
2. CI runs install, lint, typecheck, test, and build.
3. Maintainers review API stability, accessibility behavior, and migration risk.
4. Changesets generate version updates and changelog entries.
5. Publishing can be enabled later by wiring an authenticated release workflow.

## Versioning Rules

- Patch: bug fixes, documentation corrections, and non-breaking styling fixes.
- Minor: new components, additive props, new token aliases, and backwards-compatible enhancements.
- Major: removed props, changed defaults, renamed tokens, or behavior that requires product migration.

## Publishing Readiness

Packages emit `dist` artifacts and declare package exports. Apps are private and ignored by Changesets. The repo intentionally does not publish by default; it is ready for a release workflow when registry credentials and governance are established.
