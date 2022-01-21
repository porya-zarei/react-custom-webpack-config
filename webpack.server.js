const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    entry: "./server/main.ts",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve("server-build"),
        filename: "index.js",
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
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
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
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "src/styles/global.scss",
        }),
    ],
};
