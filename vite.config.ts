import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, type UserConfigExport } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/vitest/setupTests.ts',
    transformMode: {
      web: [/\.tsx$/]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
} as UserConfigExport)
