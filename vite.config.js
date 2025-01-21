import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows Vite to bind to all available network interfaces
    port: 3000, // Optional: Change the port if needed
  },
})
