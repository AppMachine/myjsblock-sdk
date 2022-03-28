/* eslint-disable */
import babel from '@rollup/plugin-babel';
import bundleSize from '@atomico/rollup-plugin-sizes';
import visualizer from 'rollup-plugin-visualizer';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import { terser } from 'rollup-plugin-terser';
import license from 'rollup-plugin-license';
// import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import pkg from './package.json';

const outputFileName = 'myjsblock-sdk';
const outputDir = 'dist';
const inputs = ['src/sdk.ts'];
const bundles = [
  {
    format: 'umd',
    inputs,
    outputDir,
    minify: true,
  },
  {
    format: 'umd',
    inputs,
    outputDir,
  },
  {
    format: 'cjs',
    inputs,
    outputDir,
  },
  {
    format: 'es',
    inputs,
    outputDir,
  },
];

const configs = bundles
  .map(({ inputs, outputDir, format, minify }) =>
    inputs.map(input => ({
      input,
      plugins: [
        typescript(),
        // resolve(),
        commonJS({
          include: 'node_modules/**',
        }),
        babel({
          babelHelpers: 'bundled',
        }),
        // The two minifiers together seem to procude a smaller bundle 🤷‍♂️
        minify && compiler(),
        minify && terser(),
        license({
          banner: `${pkg.name} v${pkg.version} - ${pkg.license}`,
        }),
        bundleSize(),
        visualizer({
          sourcemap: true,
          filename: `stats/${pkg.name}${minify ? '-min' : ''}.html`,
        }),
      ].filter(Boolean),
      output: {
        name: outputFileName,
        file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
        format,
        sourcemap: true,
      },
    })),
  )
  .flat();

const typesFileConfig = {
  input: 'src/sdk.ts',
  output: [{ file: `${outputDir}/${outputFileName}.d.ts`, format: "es" }],
  plugins: [dts()],
};

export default [...configs, typesFileConfig];
