import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.sass'
    ]
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/lib/index.ts',
      formats: ['es', 'cjs'],
      name: 'react-lib-icons-component',
      fileName: (format) => `react-lib-icons-component.${format}.js`
    }
  }
})