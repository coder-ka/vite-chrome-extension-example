import { defineConfig } from "vite";
import path from "path";

const outDir = path.resolve(__dirname, "../dist");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir,
    lib: {
      entry: path.resolve(__dirname, "src/contents-script.ts"),
      name: "contents-script",
      formats: ["umd"],
      fileName(format, entryName) {
        return entryName + "." + format + ".js";
      },
    },
  },
});
