import { typescriptBuild } from "@spaceapp/vite-plugin-typescript-build";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": "production",
  },
  plugins: [
    tsconfigPaths(),
    svelte(),
    typescriptBuild({
      outDir: ["public/js", "build/js"],
      entityDir: "src/scripts/entity",
    }),
  ],

  envPrefix: ["PUBLIC_"],
});
