import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      Matter: "matter-js", // Explicit alias for "Matter"
    },
  },
})