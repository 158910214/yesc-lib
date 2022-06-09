import babel from '@rollup/plugin-babel'

const path = require('path')
const { defineConfig } = require('vite')

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'YOUR_LIBRARY_NAME',
      fileName: (format) => `YOUR_LIBRARY_NAME.${format}.js`
    }
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', 'ts'],
    })
  ]
})