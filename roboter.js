const roboter = require('roboter');

roboter.
  workOn('client').
  equipWith(task => {
    task('universal/analyze', {
      src: [
        '**/*.js',
        './src/**/*.jsx',
        '!node_modules/**/*.js',
        '!build/**/*.js'
      ],
      rules: '.eslintrc.json'
    });

    task('universal/shell', {
      styleguide: [ './node_modules/.bin/styleguidist server' ],
      build: [ 'NODE_ENV=production ./node_modules/.bin/webpack' ]
    });
  }).
  start();
