import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,          // use describe, test, expect directly
        environment: 'jsdom',   // browser-like environment
        setupFiles: './src/tests/setup.js'
    }
})
