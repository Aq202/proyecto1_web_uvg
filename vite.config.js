import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@helpers', replacement: path.resolve(__dirname, './src/helpers') },

    ],
  },
  base: 'https://uvgenios.online/21762/proyecto1/',
  test: {
    include: ['**/*.test.jsx'],
    setupFiles: './src/setupTests.js',
    globals: true,
    environment: 'jsdom',

  },
});
