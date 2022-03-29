import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default defineConfig((env) => ({
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/sdk.ts'),
  //     name: '@myjsblock/sdk',
  //     fileName: (format) => `myjsblock-sdk.${format}.js`
  //   },
  // },
  // ...(env.mode === 'development' && {
    extract: {
      include: ['src/**/*.{vue,html,jsx,tsx}', 'dev/**/*.{vue,html,jsx,tsx}'],
    },
    plugins: [reactRefresh(), WindiCSS()],
    rollupOptions: {
      input: {
        'dev': path.resolve(process.cwd(), 'dev/index.html'),
      },
    }
  // })
}))
