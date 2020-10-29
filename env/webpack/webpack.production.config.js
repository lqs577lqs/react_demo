/*
 * @Descripttion: webpack启动配置
 * @version: 
 * @Author: Leslie
 * @Date: 2020-10-09 15:57:58
 * @LastEditors: Leslie
 * @LastEditTime: 2020-10-13 10:40:35
 */
const webpack = require("webpack");
const path = require("path");
const WebpackMerge = require('webpack-merge');
const basicConfig = require("./webpack.basic");

module.exports = WebpackMerge.merge(basicConfig,{
    mode: 'production',
    devtool: 'cheap-module-source-map'
});