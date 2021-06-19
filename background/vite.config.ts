import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "../dist"),
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
});
