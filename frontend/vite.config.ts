import { build, defineConfig, optimizeDeps } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';

// https://vite.dev/config/
export default defineConfig({
  base: '/Notis-Live/',
  optimizeDeps: {
    include: ['react', 'react-dom'], // Предварительная оптимизация зависимостей
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
  plugins: [tailwindcss(), react(), vike({ prerender: true })],
});
