# Webpack App

### Description

This is a Webpack powered application that fetches daddy jokes and renders it on the web page

#### Me spittin' lines

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
        ...
    }
    ...
}
```

```js
{
    ...
    headers: {
                Accept: "application/json",
        },
};
```
