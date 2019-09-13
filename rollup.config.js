import babel from 'rollup-plugin-babel';
import { argv } from 'yargs';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';
import buble from 'rollup-plugin-buble';
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import svelte from 'rollup-plugin-svelte';

const isDev = argv.w;
const file = `docs/dist/image-masonry-${argv.environment}.js`;
const sourcemap = isDev;
const plugins = [
  resolve(),
  commonjs()
];

let globals = {};
let input = '';

if (argv.environment === 'vue') {
  input = 'docs/src/vue/index.vue';
  plugins.push(
    vue({
      needMap: false,
      compileTemplate: true,
      css: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  );
}

if (argv.environment === 'react') {
  input = 'docs/src/react/Index.jsx';
  globals = {
    'prop-types': 'PropTypes',
    'react-dom': 'ReactDOM',
    'react': 'React'
  };
  plugins.push(
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['styled-jsx/babel']
    }),
    terser()
  );
}

if (argv.environment === 'svelte') {
  input = 'docs/src/svelte/main.js';
  plugins.push(
    svelte(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser()
  );
}

if (argv.environment === 'litelement') {
  input = 'docs/src/litelement/index.js';
  plugins.push(
    babel({
      exclude: 'node_modules/**',
    }),
    terser()
  );
}

if (argv.environment === 'angular') {
  input = 'docs/src/angular/main.ts';
  plugins.push(
    angular(),
    typescript(),
    buble({
      objectAssign: 'Object.assign',
      exclude: 'node_modules/**'
    }),
    uglify()
  );
}

export default {
  input,
  output: {
    file,
    format: 'umd',
    name: 'ImageMasonryExample',
    sourcemap,
    globals
  },
  external: Object.keys(globals),
  plugins
};
