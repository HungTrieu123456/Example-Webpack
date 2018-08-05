const path = require('path');
const webpack= require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
                loader: 'file-loader?name=[name].[ext]'
            }
            
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: 'favicon.ico'
        })
    ],
    devServer,
    
}

module.exports = config;