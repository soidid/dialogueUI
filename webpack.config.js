var path = require('path');
var webpack = require('webpack');
var plugins = [];
var entries = [ './src/index' ];
var loaders = [ 'babel?stage=0' ];
if (/production/.test(process.env.NODE_ENV)) {
    plugins = [ new webpack.optimize.UglifyJsPlugin() ];
}
else {
    plugins = [ new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin() ];
    entries.push('webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server');
    loaders.unshift('react-hot');

}
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
