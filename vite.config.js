import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import reactRefresh from '@vitejs/plugin-react-refresh'

module.exports = defineConfig((env) => ({
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
    plugins: [reactRefresh(),, WindiCSS()],
    // rollupOptions: {
    //   input: {
    //     'entry-point-a': path.resolve(__dirname, 'src/entry-point-a.tsx'),
    //     'entry-point-b': path.resolve(__dirname, 'src/entry-point-b.tsx'),
    //   },
    // }
  // })
}))
