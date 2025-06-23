import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }: { mode: string }) => ({
  base: mode === 'production' ? '/2025portfolio/' : '/',
  plugins: [react()],
}));

