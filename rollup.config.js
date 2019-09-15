import babel from 'rollup-plugin-babel';
import { argv } from 'yargs';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';
import svelte from 'rollup-plugin-svelte';
import postcss from 'rollup-plugin-postcss';

const env = argv.environment;
const file = `docs/dist/image-masonry-${env}.js`;
const sourcemap = true;
const plugins = [
  resolve(),
  commonjs()
];

let globals = {};
let input = '';

if (env === 'vue' || env === 'vue-advanced') {
  input = `docs/src/vue/${ env === 'vue' ? 'basic' : 'advanced' }.vue`;
  plugins.push(
    vue({
      needMap: false,
      compileTemplate: true,
      css: true
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [ '@babel/preset-env'],
      extensions: ['.js', '.vue']
    }),
    uglify()
  );
}

if (env === 'react' || env === 'react-advanced') {
  input = `docs/src/react/${ env === 'react' ? 'basic' : 'advanced' }.jsx`;
  globals = {
    'prop-types': 'PropTypes',
    'react-dom': 'ReactDOM',
    'react': 'React'
  };
  plugins.push(
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['styled-jsx/babel']
    }),
    uglify()
  );
}


if (env === 'svelte' || env === 'svelte-advanced') {
  input = `docs/src/svelte/${ env === 'svelte' ? 'basic' : 'advanced' }.js`;
  plugins.push(
    svelte(),
    babel({
      presets: [ '@babel/preset-env'],
      extensions: ['.js', '.mjs', '.html', '.svelte' ]
    }),
    uglify()
  );
}

if (env === 'litelement') {
  input = 'docs/src/litelement/index.js';
  plugins.push(
    postcss({
      inject: false
    }),
    terser()
  );
}

if (env === 'angular') {
  input = 'docs/src/angular/main.ts';
  plugins.push(
    angular(),
    typescript(),
    babel({
      presets: [ '@babel/preset-env'],
      exclude: 'node_modules/**',
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
