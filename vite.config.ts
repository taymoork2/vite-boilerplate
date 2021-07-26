import { resolve } from 'path';

import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import copy from 'rollup-plugin-copy';

import { version } from './package.json';

export default defineConfig({
  root: resolve(__dirname, 'docs/examples'),
  envDir: resolve(__dirname),
  publicDir: false,
  plugins: [
    checker({ typescript: true }),
    copy({
      hook: 'writeBundle',
      targets: [
        {
          src: resolve(__dirname, 'dist/es/index.es.js'),
          dest: resolve(__dirname, 'docs/examples'),
          rename: 'library.es.js',
        },
        {
          src: resolve(__dirname, 'dist/es/index.es.js.map'),
          dest: resolve(__dirname, 'docs/examples'),
          rename: 'library.es.js.map',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '../library.es.js': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false, // Contains dist files outputted from `tsc`
    lib: {
      entry: resolve(__dirname, 'src'),
      name: 'Library',
      formats: ['es', 'cjs'],
      fileName: (format) => `${format}/index.${format}.js`,
    },
    terserOptions: {
      format: {
        preamble: `/*! Library v${process.env.VERSION || version} */`,
        comments: false,
      },
    },
    sourcemap: 'hidden',
  },
});
