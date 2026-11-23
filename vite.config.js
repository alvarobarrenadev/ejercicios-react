import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const sass = (carpeta) => fileURLToPath(new URL(`./src/sass/${carpeta}`, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: '/ejercicios-react/',
  plugins: [react()],
  resolve: {
    alias: {
      '@abstracts': sass('abstracts'),
      '@base': sass('base'),
      '@components': sass('components'),
      '@layout': sass('layout'),
      '@pages': sass('pages'),
      '@themes': sass('themes'),
      '@vendors': sass('vendors'),
    },
  },
})
