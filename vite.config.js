import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, '.', '');
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  return {
    server: {
      port: 5173,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        // Static hosting (Vercel) has no server to fill in the SSR placeholder,
        // so drop it from the built index.html. Dev SSR keeps it (ctx.server set).
        name: 'strip-ssr-placeholder-for-static-build',
        transformIndexHtml: {
          order: 'post',
          handler(html, ctx) {
            if (ctx.server) return html;
            return html.replace('<!--app-html-->', '');
          },
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: isSsrBuild ? 'dist/server' : 'dist/client',
    },
  };
});
