const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader",
                    {
                        loader: "css-loader",
                        options: { modules: true },
                    }],
            },
        ]
    },
    resolve: { extensions: ["*", ".ts", ".tsx", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "public/"),
        publicPath: "/public/",
        filename: "bundle.js"
    },
};
