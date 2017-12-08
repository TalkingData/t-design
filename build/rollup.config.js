const rollup = require('rollup')
const vue = require('rollup-plugin-vue')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const componentInfo = require('../src/components/exports.js')
const uglify = require('rollup-plugin-uglify')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const commonjs = require('rollup-plugin-commonjs');

let pkg = []
const pkgTypeList = [
  { type: 'cjs', min: false, suffix: '.common.js' },
  { type: 'cjs', min: true, suffix: '.common.min.js' },
  { type: 'umd', min: false, suffix: '.js' },
  { type: 'umd', min: true, suffix: '.min.js' }
]

pkgTypeList.forEach(({ type, min, suffix }) => {
  Object.keys(componentInfo).forEach(name => {
    const { src, dist } = componentInfo[name]
    pkg.push({
      min,
      type,
      suffix,
      globalName: name,
      src,
      dist
    })
  })
})

// const addons = [
//   {
//     min: false,
//     type: 'es',
//     suffix: '.esm.js',
//     globalName: '',
//     src: 'src/index.es.js',
//     dist: 'lib/index'
//   }
// ]
// pkg = pkg.concat(addons)

pkg.forEach(item => { rollupFn(item) })

function rollupFn (item) {
  const vueSettings = item.min
    ? { css: `components/${item.globalName}/style.min.css`, postcss: [autoprefixer, cssnano] }
    : { css: `components/${item.globalName}/style.css`, postcss: [autoprefixer] }

  const plugins = [
    eslint({
      throwError: true,
      exclude: 'node_modules/**'
    }),
    vue(vueSettings),
    resolve({
      extensions: ['.js', '.vue']
    }),
    babel({
      babelrc: false,
      "presets": [
        ["env", {
          "modules": false
        }],
        "stage-2"
      ],
      "plugins": [
        "external-helpers",
        ["import", {
          "libraryName": "iview",
          "libraryDirectory": "src/components"
        }]
      ],
      runtimeHelpers: true,
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**', // Default: undefined
      // exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: ['.js'], // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false, // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false, // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      // namedExports: { './module.js': ['foo', 'bar' ] }, // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      // ignore: [ 'conditional-runtime-dependency' ]
    }),
  ]
  if (item.min) plugins.push(uglify())

  rollup.rollup({
    input: item.src,
    // external: id => /^iview/.test(id),
    plugins
  }).then(function (bundle) {
    const dest = item.dist + item.suffix

    bundle.write({
      format: item.type,
      // moduleName: item.globalName,
      name: item.globalName,
      // globals: {
      //   'iview/src/components/dropdown': 'Dropdown'
      // },
      file: dest
    })
  }).catch((e) => {
    console.log(e)
    process.exit(1)
  })
}
