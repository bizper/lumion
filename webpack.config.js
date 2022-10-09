const path = require('path')
const Dotenv = require('dotenv-webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: "./index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                "test": /\.tsx?$/,
                "use": 'ts-loader',
                "exclude": /node_modules/
            }
        ]
    },
    plugins: [
        new Dotenv()
    ],
    resolve: {
        fallback: { "path": require.resolve("path-browserify") },
        extensions: ['.tsx', '.ts', '.js']
    }
};