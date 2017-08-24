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
  }).
  start();
