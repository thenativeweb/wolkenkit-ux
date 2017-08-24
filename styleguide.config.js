const webpackConfig = require('./webpack.config');

module.exports = {
  title: 'wolkenkit UX',
  skipComponentsWithoutExample: true,
  components: 'src/components/**/*.jsx',
  showCode: true,
  webpackConfig
};
