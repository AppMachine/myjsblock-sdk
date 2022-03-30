import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

import React from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig((env) => ({
  root: env.mode === 'production' || process.env['DEV_APP'] ? 'dev/App': 'dev',
  server: {
    host: true,
    hmr: {
      clientPort: 443,
    },
  },
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['ts', 'tsx'], // also enabled scanning for js/ts
      },
    }),
    React()
  ],
  build: {
    sourcemap: true,
  },
}))
