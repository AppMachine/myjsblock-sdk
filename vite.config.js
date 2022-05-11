import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

import React from '@vitejs/plugin-react'

import { readFile } from 'fs/promises';
import path from 'path';

export default defineConfig(async (env) => ({
  root: env.mode === 'production' || process.env['DEV_APP'] ? 'dev/App': 'dev',
  ...(process.env['DEV_APP'] && {
    server: {
      host: true,
      hmr: {
        clientPort: 443,
      },
    },
  }),
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['ts', 'tsx'], // also enabled scanning for js/ts
      },
    }),
    React()
  ],
  define: {
    __packageVersion: await readFile(
      path.resolve('./package.json')
    ).then(JSON.parse).then(pkg => JSON.stringify(pkg.version))
  },
  build: {
    sourcemap: true,
  },
  test: {
    // setupFiles: 'test/stubs',
    globals: {
      window: {}
    },
  }
}))
