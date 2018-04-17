/**
 * Created by jiangjianming@bmkp.cn on 2018/4/16.
 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/js/main.js',
    output: {
        path: __dirname + '/build',
        filename:'bundle.js'
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,

    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            },{
                test: /(\.scss|\.sass)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },{
                test :/\.(png|jpg|gif)/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit:500000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname + '/app/index.tmpl.html' //new 一个这个插件的实例，并传入相关的参数
        })
    ]
}