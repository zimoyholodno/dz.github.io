// @ts-check
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import relativeLinks from "astro-relative-links";
import { defineConfig } from "astro/config";
import astrobook from "astrobook";
import { developmentEntity } from "./plugin-development-entity";
import { htmlAfterBuild } from "./plugin-html-after-build";

// https://astro.build/config
export default defineConfig({
  integrations: [
    process.env.NODE_ENV === "development"
      ? astrobook({
          directory: "src",
          subpath: "/playground",
          css: [
            "./src/styles/global.css",
            "./public/fonts/icons/icons.css",
            "./node_modules/choices.js/public/assets/styles/choices.min.css",
            "./node_modules/swiper/swiper-bundle.css",
            "./node_modules/tippy.js/dist/tippy.css",
            "./node_modules/vanilla-calendar-pro/styles/index.css",
            "./node_modules/lightgallery/css/lightgallery-bundle.min.css",
            "./node_modules/nouislider/dist/nouislider.min.css",
          ],
          title: "Компоненты",
          head: "src/components/CustomHead.astro",
        })
      : null,
    relativeLinks(),
    developmentEntity({
      inputDir: "src/scripts/entity",
      outputFile: "src/scripts/dev.ts",
      recursive: true,
      watch: true,
    }),
    htmlAfterBuild(),
  ],
  trailingSlash: "never",
  devToolbar: { enabled: false },
  build: {
    format: "file",
    inlineStylesheets: "never",
  },
  outDir: "build",
  scopedStyleStrategy: "class",
  vite: {
    optimizeDeps: { exclude: ["melt/builders"] },
    plugins: [svelte(), tailwindcss()],
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          hashCharacters: "hex",
          assetFileNames: (file) => {
            const name = file.names[0];

            if (name.includes("style")) {
              if (file.source.toString().includes("https://tailwindcss.com")) {
                return "css/custom-style.css";
              } else {
                return "css/playground.css";
              }
            }

            if (name.includes("css")) {
              return "css/[name].css";
            }

            if (name.includes("js")) return "js/name-[hash].js";

            return "other/[name]-[hash][extname]";
          },
        },
      },
    },
    css: {
      devSourcemap: true,
      modules: false,
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: '@use "/src/styles/mixins.scss" as *;',
        },
      },
    },
  },
});
