// rollup.config.js

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

// Determine if it's a production build
const isProduction = process.env.NODE_ENV === 'production';

export default {
  // Your project's main entry point.
  // This could be index.ts, main.ts, etc.
  input: 'src/index.ts',

  output: {
    // The file to write the bundled code to
    file: 'dist/bundle.js',
    // The format of the output file
    format: 'esm', // Use 'iife' for scripts that run directly in a <script> tag
    // Sourcemaps help with debugging
    sourcemap: true,
  },

  plugins: [
    // Helps Rollup find modules in node_modules
    resolve(),

    // Converts CommonJS modules to ES6, so they can be included in a Rollup bundle
    commonjs(),

    // Compiles TypeScript files to JavaScript
    typescript({
      tsconfig: './tsconfig.json' // Ensure you have a tsconfig.json file
    }),

    // Minify the output in production for smaller file sizes
    isProduction && terser()
  ]
};