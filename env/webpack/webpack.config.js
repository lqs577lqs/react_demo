/*
 * @Descripttion: webpack启动配置
 * @version: 
 * @Author: Leslie
 * @Date: 2020-10-09 15:57:58
 * @LastEditors: Leslie
 * @LastEditTime: 2020-10-13 10:40:48
 */
const webpack = require("webpack");
const basicConfig = require("./webpack.basic");
const WebpackMerge = require('webpack-merge');
const path = require("path");
const devConf = {
    host: '0.0.0.0',
    port: 8081
}
const openHost = `http://localhost:${devConf.port}`

module.exports = WebpackMerge.merge(basicConfig,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "../../", "dist"),
        historyApiFallback: true,
        inline: true,
        quiet: true,
        overlay: true,
        hot: true,
        open: true,
        openPage: openHost,
        ...devConf
    }
});