const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    /*Recc'd by React docs*/
    optimization: {
        minimizer: [new TerserPlugin({ /* additional options here */ })],
    },
});

