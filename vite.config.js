import babel from '@rollup/plugin-babel'

const path = require('path')
const { defineConfig } = require('vite')

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: '@yesc/lib',
      fileName: (format) => `@yesc/lib.${format}.js`
    }
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', 'ts'],
    })
  ]
})