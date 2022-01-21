const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isEnvProduction = false;
const useTypeScript = true;

module.exports = {
    mode: "development",
    cache: false,
    entry: {
        app: "./src/index.client.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.?(js|jsx|ts|tsx)$/,
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin(
            Object.assign(
                {},
                {
                    inject: true,
                    template: path.resolve(__dirname, "public/index.html"),
                },
                isEnvProduction
                    ? {
                          minify: {
                              removeComments: true,
                              collapseWhitespace: true,
                              removeRedundantAttributes: true,
                              useShortDoctype: true,
                              removeEmptyAttributes: true,
                              removeStyleLinkTypeAttributes: true,
                              keepClosingSlash: true,
                              minifyJS: true,
                              minifyCSS: true,
                              minifyURLs: true,
                          },
                      }
                    : undefined,
            ),
        ),
        new MiniCssExtractPlugin({
            filename:"css/styles.css",
        })
    ],
};
