import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://72.62.64.31:8000/',
        changeOrigin: true
      }
    }
  }
})
