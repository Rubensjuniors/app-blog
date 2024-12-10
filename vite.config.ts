import react from '@vitejs/plugin-react'
import { defineConfig, type UserConfigExport } from 'vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Inspect()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/vitest/setupTests.ts',
    transformMode: {
      web: [/\.tsx$/]
    }
  }
} as UserConfigExport)
