import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import VitePluginLinaria from 'vite-plugin-linaria'

import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), VitePluginLinaria()],
  base: '',
  build: {
    outDir: path.resolve(__dirname, "../dist/pages"),
    rollupOptions: {
      input: {
        options: resolve(__dirname, "options.html"),
        popup: resolve(__dirname, "popup.html"),
      },
    },
  },
  server: {
    port: 3001
  }
});
