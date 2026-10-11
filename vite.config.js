import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuracion del servidor de desarrollo.
// El puerto 5173 es el que autoriza el back-end en su anotacion CrossOrigin.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
