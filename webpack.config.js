const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[hash].js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};
