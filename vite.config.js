import { defineConfig } from "vite";
import dotenv from 'dotenv'
import react from "@vitejs/plugin-react";
import path from "path";

dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.VITE_REACT_APP_PORT) || 3010,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
