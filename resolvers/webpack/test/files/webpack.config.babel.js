import path from 'path'

export default {
  resolve: {
    alias: {
      'foo': path.join(__dirname, 'some', 'goofy', 'path', 'foo.js'),
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
  ],
}
