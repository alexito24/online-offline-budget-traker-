const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({

      filename: "manifest.json",

      inject: false,
      fingerprints: false,

      name: "Budget Traker",
      short_name: "Budget Traker",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      icons: [
        {
          src: path.resolve(__dirname,'./public/icons/icon-512x512.png'),
          sizes: [192, 512]
        }
      ]
    })
  ]
};

module.exports = config;
