import platformConfig from "./packages/eslint-config/index.js";

export default [
  {
    ignores: [
      "**/dist/**",
      "**/coverage/**",
      "**/storybook-static/**",
      "**/.turbo/**",
      "**/node_modules/**"
    ]
  },
  ...platformConfig
];
