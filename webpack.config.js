const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader"
            }
            ]
        },
        {
            test: /\.pug$/,
            use: [{
              loader: 'pug-loader',
            }],
        },
        {
            test: /\.(png|jpg|gif|woff2|woff|ttf|eot|pdf)$/,
            use: [
            'image-webpack-loader',
            {
                loader: 'file-loader',
                options: {
                outputPath: 'assets/',
                },
            }],
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.pug",
        }),
        new CopyPlugin([
            { from: './manifest.json', to: './manifest.json' },
            { from: './src/common/assets/images/favicon.ico', to: './favicon.ico' },
        ]),
    ]
};