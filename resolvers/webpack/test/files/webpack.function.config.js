var path = require('path')
var pluginsTest = require('webpack-resolver-plugin-test')

module.exports = function() {
  return {
    resolve: {
      alias: {
        'foo': path.join(__dirname, 'some', 'goofy', 'path', 'foo.js'),
        'some-alias': path.join(__dirname, 'some'),
      },
      modules: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'fallback'),
        'node_modules',
        'bower_components',
      ],
    },

    externals: [
      { 'jquery': 'jQuery' },
      'bootstrap',
      function (context, request, callback) {
        if (request === 'underscore') {
          return callback(null, 'underscore')
        }
        callback()
      },
    ],

    plugins: [
      new pluginsTest.ResolverPlugin([
        new pluginsTest.SimpleResolver(
          path.join(__dirname, 'some', 'bar', 'bar.js'),
          path.join(__dirname, 'some', 'bar')
        ),
      ]),
    ],
  }
}
