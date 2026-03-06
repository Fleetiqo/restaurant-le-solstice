import { defineConfig } from 'vite'

export default defineConfig({
  base: '/restaurant-le-solstice/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
