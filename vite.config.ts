import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("i18next") ||
              id.includes("react-i18next") ||
              id.includes("i18next-browser-languagedetector")
            ) {
              return "vendor-i18n";
            }
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor-react";
            }
          }
        },
      },
    },
    // chunk size warning limit (in kB)
    chunkSizeWarningLimit: 500,
  },
  esbuild: {
    // @ts-expect-error - drop is a valid esbuild option but may be missing in current Vite types
    drop: ["console", "debugger"],
  },
  // Add cache headers for translation files (when deploying)
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
});