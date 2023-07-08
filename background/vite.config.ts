import { defineConfig } from "vite";
import path from "path";

const outDir = path.resolve(__dirname, "../dist");

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    outDir,
    lib: {
      entry: path.resolve(__dirname, "src/background.ts"),
      name: "background",
      formats: ["umd"],
    },
    rollupOptions: {
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
  },
}));
