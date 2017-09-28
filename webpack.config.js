const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  devtoo: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  }
}