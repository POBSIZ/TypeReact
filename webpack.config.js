const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { ESBuildMinifyPlugin } = require("esbuild-loader");

const port = 3000;
// const port = 8000;

module.exports = {
    mode: 'development',
    entry: [
        'babel-polyfill',
        './src/index.tsx'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
        publicPath: ''
    },
    resolve: {
        alias: {
            components: __dirname + '/src/components',
            'react-dom': '@hot-loader/react-dom',
            '@Actions': __dirname + '/src/redux/actions',
            '@Vars': __dirname + '/src/assets/css/vars.scss',
            '@Pages': __dirname + '/src/components/pages',
            '@Atoms': __dirname + '/src/components/UI/atoms',
            '@Molecules': __dirname + '/src/components/UI/molecules',
            '@Organisms': __dirname + '/src/components/UI/organisms',
            '@Hoc': __dirname + '/src/components/HOC',
            '@Utils': __dirname + '/src/utils',
        },
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.scss'],
    },
    module: {
        rules: [
            { // BABEL & TS LOADER
                test: /\.(ts|tsx|js|jsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            { // CSS LOADER
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            { // URL LOADER
                // test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)?$/,
                loader: 'url-loader',
                options: {
                    name: 'src/[name].[ext]',
                    fallback: 'file-loader',
                    limit: 10000,
                },
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new ForkTsCheckerWebpackPlugin({}),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
};