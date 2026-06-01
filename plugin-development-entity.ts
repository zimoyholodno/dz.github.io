import type { AstroIntegration } from "astro";
import type { FSWatcher } from "node:fs";
import fs from "node:fs";
import path from "node:path";

interface FileListerPluginOptions {
  inputDir?: string;
  outputFile?: string;
  recursive?: boolean;
  watch?: boolean;
}

export function developmentEntity(
  options?: FileListerPluginOptions,
): AstroIntegration {
  const resolvedOptions = {
    inputDir: options?.inputDir || "./src",
    outputFile: options?.outputFile || "./src/generated/file-list.ts",
    recursive: options?.recursive ?? true,
    watch: options?.watch ?? true,
  };

  let watcher: FSWatcher | undefined;
  let pagesWatcher: FSWatcher | undefined;

  return {
    name: "development-entity",
    hooks: {
      "astro:config:setup": async ({ command }) => {
        // Generate initial file list
        generateFileList(resolvedOptions);

        if (command === "dev" && resolvedOptions.watch) {
          watcher = fs.watch(
            resolvedOptions.inputDir,
            { recursive: resolvedOptions.recursive },
            () => {
              generateFileList(resolvedOptions);
            },
          );
          // Watch src/pages для автосоздания entity-скриптов
          const pagesDir = path.resolve("src/pages");
          pagesWatcher = fs.watch(pagesDir, {}, () => {
            generateFileList(resolvedOptions);
          });
        }
      },

      "astro:server:start": () => {
        // No-op here, setup already done
      },

      "astro:server:done": () => {
        if (watcher) watcher.close();
        if (pagesWatcher) pagesWatcher.close();
      },
    },
  };
}

function getFiles(dir: string, recursive: boolean): string[] {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.flatMap((dirent) => {
    const res = path.resolve(dir, dirent.name);
    if (recursive && dirent.isDirectory()) {
      return getFiles(res, recursive);
    } else if (dirent.isFile()) {
      return [path.relative(dir, res)];
    }
    return [];
  });
  return files;
}

type ResolvedOptions = {
  inputDir: string;
  outputFile: string;
  recursive: boolean;
  watch: boolean;
};

function generateFileList(options: ResolvedOptions) {
  try {
    const files = getFiles(options.inputDir, options.recursive);

    // Ensure output directory exists
    const outputDir = path.dirname(options.outputFile);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // --- Автосоздание entity-скриптов по страницам, кроме index.astro ---
    const pagesDir = path.resolve("src/pages");
    const entityDir = path.resolve(options.inputDir);
    if (!fs.existsSync(entityDir)) {
      fs.mkdirSync(entityDir, { recursive: true });
    }
    const pageFiles = fs
      .readdirSync(pagesDir)
      .filter((f) => f.endsWith(".astro") && f !== "index.astro")
      .map((f) => path.parse(f).name);

    pageFiles.forEach((name) => {
      const entityPath = path.join(entityDir, `${name}.ts`);
      if (!fs.existsSync(entityPath)) {
        fs.writeFileSync(entityPath, "", "utf8");
        console.log(`Создан скрипт: ${options.inputDir}/${name}.ts`);
      }
    });
    // --- Конец автосоздания ---

    const entities = files
      .map((e) => `import "./entity/${path.parse(e).name}";`)
      .sort((a, b) => {
        if (a.includes('general"')) return -1;
        if (b.includes('general"')) return 1;
        return 0;
      });

    // Write as TS imports
    fs.writeFileSync(
      options.outputFile,
      ["/** Автоматически сгенерированный файл */\n"]
        .concat(entities)
        .join("\n"),
      "utf8",
    );

    console.log(
      `Generated file list at ${options.outputFile} (${files.length} files)`,
    );
  } catch (error) {
    console.error(
      "Error generating file list: " +
        (error instanceof Error ? error.message : String(error)),
    );
  }
}
