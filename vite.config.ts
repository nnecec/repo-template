import { defineConfig, UserConfig } from 'vite'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import package_ from './package.json'

export default defineConfig(({ mode }): UserConfig => {
  const isProduction = mode === 'production'
  return {
    build: {
      sourcemap: isProduction ? 'hidden' : 'inline',
      target: 'esnext',
      lib: {
        entry: path.resolve(__dirname, 'src/index.tsx'),
        formats: ['es', 'cjs'],
        fileName: 'index'
      },
      rollupOptions: {
        external: package_.dependencies ? Object.keys(package_.dependencies) : undefined,
        plugins: [
          typescript({
            tsconfig: 'tsconfig.json'
          })
        ]
      }
    }
  }
})
