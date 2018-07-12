const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        path.resolve(__dirname, "src/index.js"),
        path.resolve(__dirname, "src/assets/index.scss")
    ],
    output: {
        path: path.resolve(__dirname, "public/"),
        filename: "js/app.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'env', 'es2015', 'react', 'stage-2' ]
                    }
                }
            },
            {
                test: /worker\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        inline: true,
                        fallback: false
                    }
                }
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract([
                    { loader: 'css-loader', options: { minimize: true } },
                    'sass-loader'
                ])
            },
            {
                test: /\.(json)$/,
                include: [path.resolve(__dirname, 'src/data')],
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/bundle-[chunkhash:6].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}