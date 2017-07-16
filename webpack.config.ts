import webpack from 'webpack';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: webpack.Configuration = {
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx',
    ],

    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve('dist'),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    devtool: 'source-map',

    module: {
        rules: [{
            test: /.tsx?$/,
            include: path.resolve('src'),
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'awesome-typescript-loader',
            ],
        }],
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/index.html',
        }]),
    ],

    devServer: {
        port: 8080,
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist/'),
    },
};

module.exports = config;
