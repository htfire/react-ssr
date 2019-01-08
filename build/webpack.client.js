const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.(less)$/;
const lessModuleRegex = /\.module\.less$/;
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const utils = require('./utils')

const clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../public')
    },
    module: {
        rules: [{
            test: cssRegex,
            exclude: cssModuleRegex,
            use: utils.getStyleLoaders({
                importLoaders: 1,
            }),
        },
        {
            test: lessRegex,
            exclude: lessModuleRegex,
            use: utils.getStyleLoaders({
                importLoaders: 2,
            }, 'less-loader'),
        },
        // Adds support for CSS Modules, but using less
        // using the extension .module.scss or .module.less
        {
            test: lessModuleRegex,
            use: utils.getStyleLoaders(
                {
                    importLoaders: 2,
                    modules: true,
                    // getLocalIdent: getCSSModuleLocalIdent,
                    // localIndentName: '[name]_[local]_[hash:base64:5]'
                },
                'less-loader'
            ),
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: '/static/img/[name].[hash:7].[ext]'
            }
        }]
    }
}

module.exports = merge(config, clientConfig)
