const path = require('path');
module.exports = {
  stories: [
    "../src/**/*.stories.(js|jsx|ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.resolve.alias.Action = __dirname + "/../src/redux/actions";
    config.resolve.alias.Vars = __dirname + "/../src/assets/css";
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx|mdx)$/,
      loader: require.resolve('babel-loader'),
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src'),
    });
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.mdx', '.scss');
    return config;
  },
}