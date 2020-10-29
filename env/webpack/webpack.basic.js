/*
 * @Descripttion: webpack公共配置
 * @version: 
 * @Author: Leslie
 * @Date: 2020-10-09 15:57:58
 * @LastEditors: Leslie
 * @LastEditTime: 2020-10-13 10:31:11
 */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const path = require("path");
const devConf = {
    host: '0.0.0.0',
    port: 8081
}
const openHost = `http://localhost:${devConf.port}`

module.exports = {
    entry: {
        app: path.resolve(__dirname, "../../", "src/index.tsx")
    },
    output: {
        path: path.resolve(__dirname, "../../", "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /mode_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        }
                    }
                ]
            },
            {
              test: /\.less$/,
              use: [
                'style-loader',
                'css-loader',
                'less-loader'
              ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "env/template/index.html",
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
              messages: [`项目启动成功 : ${openHost}`]
            },
            onErrors: undefined,
            clearConsole: true
        })
    ]
}