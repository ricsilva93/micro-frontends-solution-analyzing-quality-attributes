const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/bootstrap.tsx",
  output: {
    publicPath: "http://localhost:30001/",
  },
  optimization: {
    minimize: false,
  },

  devtool: "source-map",

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 30001,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    historyApiFallback: true,
  },
 cache: { type: "filesystem" },
 cache: false,
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      library: { type: "var", name: "host" },
      remotes: {
        Catalog: "Catalog",
        Navbar: "Navbar",
        CartComponent: "CartComponent",
        Purchases: "Purchases"
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] },
        "react-query": { singleton: true, eager: true, requiredVersion: deps["react-query"] },
        "styled-components": { singleton: true, eager: true, requiredVersion: deps["styled-components"] },
        "@material-ui/core": { singleton: true, eager: true, requiredVersion: deps["@material-ui/core"] },
        "@material-ui/icons": { singleton: true, eager: true, requiredVersion: deps["@material-ui/icons"] },
        "react-router-dom": { singleton: true, eager: true, requiredVersion: deps["react-router-dom"] },
        "react-error-boundary": { singleton: true, eager: true, requiredVersion: deps["react-error-boundary"] }
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      CatalogRemoteEntry: "http://localhost:30000/remoteEntry.js",
      NavbarRemoteEntry: "http://localhost:30002/remoteEntry.js",
      CartRemoteEntry: "http://localhost:30003/remoteEntry.js",
      PurchasesRemoteEntry: "http://localhost:30004/remoteEntry.js",
    }),
  ],
};