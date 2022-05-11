import { defineConfig } from 'vite'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import react from '@vitejs/plugin-react'
import package_ from './package.json'

export default defineConfig(({ mode }) => {
  return {
    build: {
      sourcemap: 'hidden',
      target: 'esnext',
      lib: {
        entry: path.resolve(__dirname, 'src/index.tsx'),
        formats: ['es', 'cjs'],
        fileName: 'index'
      },
      rollupOptions: {
        external: [
          ...Object.keys(package_.dependencies),
          ...Object.keys(package_.peerDependencies)
        ],
        plugins: [
          typescript({
            tsconfig: 'tsconfig.json'
          })
        ]
      }
    },
    plugins: [react()]
  }
})
