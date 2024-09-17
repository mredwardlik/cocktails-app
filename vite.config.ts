import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export const VITE_ENV_PREFIX = 'ENV_'

export default defineConfig((configEnv: ConfigEnv): UserConfig => {
  process.env = {
    ...process.env,
    ...loadEnv(configEnv.mode, process.cwd(), VITE_ENV_PREFIX),
  }

  return {
    plugins: [vue(), tsconfigPaths()],
    root: path.resolve(__dirname, 'src', 'app', 'entry'),
    envPrefix: VITE_ENV_PREFIX,
    server: {
      host: 'localhost',
      port: 8000,
    },
    build: {
      emptyOutDir: true,
      outDir: path.resolve(__dirname, 'dist'),
      rollupOptions: {
        input: path.resolve(__dirname, 'src', 'app', 'entry', 'index.html'),
      },
    },
  }
})
