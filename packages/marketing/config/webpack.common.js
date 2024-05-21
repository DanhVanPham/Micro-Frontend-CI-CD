const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // resolve: {
    //     extensions: [".ts", ".js"]
    // },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /.node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-modules-commonjs']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}