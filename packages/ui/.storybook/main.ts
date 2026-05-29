import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";

const resolveWorkspacePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(Array.isArray(config.resolve.alias) ? {} : config.resolve.alias),
      "@services-ui/a11y": resolveWorkspacePath("../../a11y/src/index.ts"),
      "@services-ui/icons": resolveWorkspacePath("../../icons/src/index.tsx"),
      "@services-ui/tokens/themes.css": resolveWorkspacePath("../../tokens/src/themes.css")
    };
    return config;
  },
  docs: {
    autodocs: "tag"
  }
};

export default config;
