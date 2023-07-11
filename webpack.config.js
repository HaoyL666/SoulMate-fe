const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        src: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        // publicPath: '/',
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,  // /\.jsx?/,  // /.(js|jsx)$/
                exclude: /node_modules/,
                //loader: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }

            },

            {
                test: /.(css|scss)$/, // /\.s[ca]ss$/
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        // new MiniCssExtractPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV':JSON.stringify(process.emitWarning.NODE_ENV),
        // })
    ],

    devServer: {
        host: '127.0.0.1',
        port: 8080,
        hot: true,
        open: true,
        proxy: {
            "/api": "http://localhost:3000",
        },

        // pointing to what ought to be rendered immediately
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build'),
        }
    },


}