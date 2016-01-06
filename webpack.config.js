/**
 * Created by yanjing on 12/3/15.
 */

var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var base = [
    './comm/zepto.js',
    './comm/flexible.js',
    './comm/hairline.js'
];

module.exports = {
    context: path.resolve(__dirname, "src"), // 这里设置 webpack 的根目录,表示以下设置均根据这个上下文进行操作
    entry: { // 这里存放 page 级别的 js
        'home': base.concat([
            './pages/home.js'
        ])
    },
    output: {
        path: path.resolve(__dirname, "build"),// 编译好的文件目录
        filename: '[name].js', // 输出,[name] 为 entry 配置项的 keyname
        publicPath: "/res/"
    },
    resolve: {
        root: path.resolve(__dirname, "src")
    },
    module: {
        loaders: [
            { // 这里是 LESS-Loader
                test: /\.less$/,
                loader: "style!css!less"
            },{
                test: /\.jpg$/,
                loader: "file"
            },{
                test: /\.png$/,
                loader: "url?mimetype=image/png"
            },{
                test: /\.html/,
                loader: "html?minimize=true"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            name: "base",
            filename: "base.js"
        }) // 注意:这里的意思是把所有 Entry 里通用的东西抽出来打包成这个文件,比如 webpack 的 require 这些基础方法
    ]
};