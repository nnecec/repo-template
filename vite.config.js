import { defineConfig } from 'vite'
import { resolve } from 'path'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      external: pkg?.dependencies ? Object.keys(pkg.dependencies) : {},
      plugins: [
        typescript({
          tsconfig: 'tsconfig.json'
        })
      ]
    }
  }
})
