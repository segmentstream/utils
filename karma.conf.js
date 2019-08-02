// eslint-disable-next-line
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function init (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    plugins: [
      'karma-*',
      'mocha'
    ],

    client: {
      mocha: {
        timeout: 7000
      }
    },

    files: [
      './build/tests.js'
    ],

    browsers: ['PhantomJS_custom'],

    // you can define custom flags
    customLaunchers: {
      PhantomJS_custom: {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          }
        },
        flags: ['--load-images=true'],
        debug: false
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    mochaReporter: {
      showDiff: true
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Increase timeout in case connection in CI is slow
    captureTimeout: 120000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: 1,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 10,
    browserNoActivityTimeout: 20000
  })
}
