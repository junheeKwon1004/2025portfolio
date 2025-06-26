import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/2025portfolio/projects/weather_app/', // ✅ 정확한 경로 지정
  plugins: [react()],
})
