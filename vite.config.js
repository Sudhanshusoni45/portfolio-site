import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for debugging.
    minify: "esbuild", // Use esbuild for minification.
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]", // This configuration disables obfuscation
    },
  },
  // Other configuration options...
});
