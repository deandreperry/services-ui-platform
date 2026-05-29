# Contributing

The platform exists to create shared leverage. Contributions should improve consistency, accessibility, velocity, or maintainability for more than one team.

## Before You Build

- Confirm the use case is shared across product surfaces.
- Check existing components and tokens before adding new primitives.
- Define the API with realistic states, not only the happy path.
- Consider migration cost for existing consumers.

## Pull Request Checklist

- Implementation is typed and follows existing package boundaries.
- Storybook covers variants, sizes, disabled states, loading states, and edge cases where relevant.
- Tests cover important user behavior.
- Accessibility behavior is documented and verified.
- Docs are updated when platform consumers need to understand the change.
- A changeset is added for consumer-facing package changes.

## Review Expectations

Reviewers should focus on API consistency, accessibility, token usage, test quality, and long-term maintainability. Styling preferences should be resolved through token and component guidelines rather than one-off overrides.
