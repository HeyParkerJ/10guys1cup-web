module.exports = {
  "presets": [
    ["@babel/env", { "targets": { "esmodules": true } }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
  ]
}
