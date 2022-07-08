const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "infralabs",
    projectName: "safy",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
        rules: [
            {
              test: /\.(woff|woff2)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192
                  }
                }
              ]
            }
        ]
    },
  });
};
