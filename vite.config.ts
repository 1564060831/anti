import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/anti.github.io/',
  build: {
    outDir: 'docs' // 将打包输出到docs文件夹
  }
})
