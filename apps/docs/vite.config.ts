import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const resolveWorkspacePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/services-ui-platform/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@services-ui/a11y": resolveWorkspacePath("../../packages/a11y/src/index.ts"),
      "@services-ui/icons": resolveWorkspacePath("../../packages/icons/src/index.tsx"),
      "@services-ui/ui/styles.css": resolveWorkspacePath("../../packages/ui/src/styles.css"),
      "@services-ui/tokens/themes.css": resolveWorkspacePath(
        "../../packages/tokens/src/themes.css"
      ),
      "@services-ui/ui": resolveWorkspacePath("../../packages/ui/src/index.ts"),
      "@services-ui/tokens": resolveWorkspacePath("../../packages/tokens/src/index.ts")
    }
  }
});
