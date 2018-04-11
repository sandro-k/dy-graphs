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
        '**/*.html',
        '*.html'
      ],
      exclude: [
        '**/test/**'
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