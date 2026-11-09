import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
  },
});
