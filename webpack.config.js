var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		app: './src/App.js'
	},
	output: {
		filename: 'public/build/bundle.js',
		sourceMapFilename: 'public/build/bundle.map'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
        		use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /.*\.(gif|png|jpe?g)$/i,
  				use: [
    				{
      					loader: 'image-webpack-loader'
    				}
  				]
			}
		]
	}
}