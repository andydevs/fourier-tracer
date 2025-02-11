'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        host: '0.0.0.0'
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin({ patterns: [
            path.resolve(__dirname, 'index.html')
        ] })
    ]
};
