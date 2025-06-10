import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    base: "/",
    server: {
      port: 9000,
    },
    preview: {
      port: 9000,
      strictPort: true,
    },
    build: {
      chunkSizeWarningLimit: 1000,
      minify: process.env.NODE_ENV === "production" ? "esbuild" : false,
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate MUI into its own chunk
            "mui-vendors": ["@mui/material", "@mui/icons-material"],
            // Separate React libraries
            "react-vendors": ["react", "react-dom", "react-router-dom"],
          },
        },
      },
    },
    resolve: {
      alias: {
        "@dashboard": path.resolve(__dirname, "./src"),
        src: path.resolve(__dirname, "./src"),
      },
    },
  };
});
