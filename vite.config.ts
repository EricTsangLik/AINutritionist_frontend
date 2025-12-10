import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      // 保留原本的 API 設定
      '/api': {
        target: 'http://72.62.64.31:8000/',
        changeOrigin: true
      },
      // 新增：Cloud Run Token Service 的代理
      // 將 /token-service/* 的請求轉發到你的 Cloud Run
      '/token-service': {
        target: 'https://gemini-token-455163777378.asia-east2.run.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/token-service/, '')
      }
    }
  }
})
