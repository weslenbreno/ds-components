/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'test/vitest.setup.ts',
    include: ['**/?(*.)test.ts?(x)'],
    coverage: {
      reporter: ['text', 'json', 'html', 'cobertura'],
    },
  }
})
