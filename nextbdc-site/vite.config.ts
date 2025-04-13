import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"
import { fileURLToPath } from 'node:url'; // Import fileURLToPath

// Get current directory path in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Use derived __dirname
    },
  },
})
