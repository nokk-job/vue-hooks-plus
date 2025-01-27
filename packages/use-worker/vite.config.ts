import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      outputDir: path.resolve(__dirname, 'dist/types'),
    }),
  ],
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueHooks_Plus_useWorker',
      formats: ['es', 'cjs', 'iife'],
      fileName: format => {
        return `useWorker.${format}.js`
      },
    },
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ['vue', 'lodash/isEqual'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
