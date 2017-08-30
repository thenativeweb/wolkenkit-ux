const path = require('path');

const webpackConfig = require('./webpack.config');

module.exports = {
  title: 'wolkenkit UX',
  skipComponentsWithoutExample: true,
  showCode: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Components',
      components: 'src/components/**/*.jsx'
    }
  ],
  webpackConfig,

  require: [
    path.join(__dirname, 'src', 'setup', 'auto')
  ]
};
