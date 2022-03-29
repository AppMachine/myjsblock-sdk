import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default defineConfig((env) => ({
  ...(env.mode === 'development' && {
    root: 'dev'
  }),
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['ts', 'tsx'], // also enabled scanning for js/ts
      },
    }),
    reactRefresh(),
  ],
  build: {
    sourcemap: true,
  },
}))
