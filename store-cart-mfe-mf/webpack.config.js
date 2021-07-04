const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/bootstrap.tsx",
  output: {
    publicPath: "http://localhost:30003/",
  },

  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          terserOptions: {
                compress: {},
            }
        }).apply(compiler);
    },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 30003,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
  },
  cache: { type: "filesystem" },
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
      name: "CartComponent",
      library: { type: "var", name: "CartComponent" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./CartComponent":"./src/Components/CartComponent"
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] },
        "react-query": { singleton: true, eager: true, requiredVersion: deps["react-query"] },
        "styled-components": { singleton: true, eager: true, requiredVersion: deps["styled-components"] },
        "@material-ui/core": { singleton: true, eager: true, requiredVersion: deps["@material-ui/core"] },
        "@material-ui/icons": { singleton: true, eager: true, requiredVersion: deps["@material-ui/icons"] },
        "react-router-dom": { singleton: true, eager: true, requiredVersion: deps["react-router-dom"] }
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
