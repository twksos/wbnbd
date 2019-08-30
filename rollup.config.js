import svelte from 'rollup-plugin-svelte';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  svelte(),
  nodeResolve({
    browser: true,
    dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
  }),
  commonjs(),
  // Watch the `public` directory and refresh the
  // browser on changes when not in production
  !production && livereload('public'),

  // If we're building for production (npm run build
  // instead of npm run dev), minify
  production && terser()
];

export default {
  input: 'src/app.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins,
  watch: {
    clearScreen: false
  }
};
