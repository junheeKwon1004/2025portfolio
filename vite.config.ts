import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  base: '/2025portfolio',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        naver: resolve(__dirname, 'projects/naver/index.html'),
        weather_app: resolve(__dirname, 'projects/weather_app/index.html'), 
      },
    },
  },
})
