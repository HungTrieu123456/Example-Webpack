const path = require('path');
const webpack= require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    "jquery",
    "react",
    "react-dom"
];
const devServer = {
    port: 3000,
    open: true,
    inline: true,
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
};

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/dist') 
    },
    module: {
        rules: [
            {
                use : 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
            
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer,
    
}

module.exports = config;