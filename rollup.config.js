import babel from 'rollup-plugin-babel';
import { argv } from 'yargs';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue'
import minify from 'rollup-plugin-babel-minify';

//import istanbul from 'rollup-plugin-istanbul';

const isDev = argv.w;
const file = `docs/dist/image-masonry-${argv.environment}.js`;
const sourcemap = isDev;
const plugins = [
  resolve(),
  commonjs(),
  minify({
    comments: false
  })
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
    })
  );
}

if (argv.environment === 'react') {
  input = 'docs/src/react/Index.jsx';
  globals = {
    'prop-types': 'PropTypes',
    'react-dom': 'ReactDOM',
    'react': 'React'
  };
  plugins.push(babel({
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['styled-jsx/babel']
  }));
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
