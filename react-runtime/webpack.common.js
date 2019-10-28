const HtmlWebPackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: [/\.svg/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10,
                    name: 'static/media/[name].[hash:8].[ext]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: path.resolve('public/index.html')
        }),
        new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
            PUBLIC_URL: "/",
            // You can pass any key-value pairs, this was just an example.
            // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
        })
    ]
};