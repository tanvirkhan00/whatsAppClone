import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Update with the correct path, typically matching your GitHub repository name
  plugins: [react()],
})
