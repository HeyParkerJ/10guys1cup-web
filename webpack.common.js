const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            // css-modules config
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-modules-typescript-loader" },  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
                    { loader: "css-loader", options: { modules: true }, }
                ]
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" },
        ]
    },
    resolve: { extensions: ["*", ".ts", ".tsx", ".js", ".jsx"] },
    devtool: "inline-source-map",
    output: {
        // path: path.resolve(__dirname, "public/"),
        // Path found on webpack's example docs
        path: path.resolve(__dirname, 'dist/assets'),
        filename: "bundle.js"
    },
};
