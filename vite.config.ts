/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/abstract/variables";`,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
    exclude: ['node_modules', 'instrumented'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      include: ['src//'],
      exclude: [
        ...configDefaults.exclude,
        '**/types.ts',
        '**/types/interfaces/',
        '**/types/state/',
        '**/*.d.ts',
        '**/*.test.tsx',
        '**/*.test.ts',
        'src//main.tsx',
        'instrumented',
      ],
    },
  },
});
