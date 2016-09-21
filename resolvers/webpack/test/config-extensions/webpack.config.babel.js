import path from 'path'

export default {
  resolve: {
    alias: {
      'foo': path.join(__dirname, 'some', 'goofy', 'path', 'foo.js'),
    },
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
      'bower_components',
    ],
    fallback: path.join(__dirname, 'fallback'),
  },

  externals: [
    { 'jquery': 'jQuery' },
    'bootstrap',
  ],
}
