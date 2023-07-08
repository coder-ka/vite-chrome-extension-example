import { defineConfig } from "vite";
import path from "path";

const outDir = path.resolve(__dirname, "../dist");

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    outDir,
    lib: {
      entry: path.resolve(__dirname, "src/service-worker.ts"),
      name: "service-worker",
      formats: ["umd"],
      fileName(format, entryName) {
        return entryName + "." + format + ".js";
      },
    },
  },
}));
