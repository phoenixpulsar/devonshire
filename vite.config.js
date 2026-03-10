import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/wp-json': {
          target: env.VITE_WP_API_URL
            ? env.VITE_WP_API_URL.replace(/\/wp-json\/wp\/v2\/?$/, '')
            : 'http://localhost',
          changeOrigin: true,
        },
      },
    },
  };
});
