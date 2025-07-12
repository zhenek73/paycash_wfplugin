import typescript from 'rollup-plugin-typescript2';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
    external: [
      '@wharfkit/session',
    ],
  },
  {
    input: 'src/testapp.ts',
    output: {
      dir: 'public',
      format: 'esm',
      sourcemap: true,
      entryFileNames: 'testapp.js',
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
]; 