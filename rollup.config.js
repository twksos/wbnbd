import svelte from 'rollup-plugin-svelte';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const plugins = [svelte(), nodeResolve(), commonjs()];
if (process.env.production) plugins.push(buble(), uglify());

export default {
    entry: 'src/app.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins,
    sourceMap: true
};