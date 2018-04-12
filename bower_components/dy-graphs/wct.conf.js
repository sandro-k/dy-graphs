'use strict'

module.exports = {
  verbose: false,
  plugins: {
    local: {
      'browsers': ['chrome']
    },
    istanbub: {
      dir: './coverage',
      reporters: [
        'text-summary',
        'lcov'
      ],
      writeOnlyOnSuccess: false,
      include: [
        'dy-graphs.html'
      ],
      exclude: [
        '**/test/**',
        'bower_components/**'
      ],
      thresholds: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80
        }
      }
    }
  }
}