'use strict';

var ROOT = process.env.PWD;
var path = require('path');
var nodeModulesDir = path.resolve('node_modules');

var webpack = require('webpack');
var htmlWPPlugin = require('html-webpack-plugin');

var config = {
	devtool: 'cheap-source-map',
	devServer: {
		contentBase: './build',
		port: 8080,
		host: 'localhost',
		hot: true,
		stats: {
			colors: true
		},
	},
	entry: {
		app: [
			'webpack/hot/dev-server',
			path.resolve('./app/index.jsx')
		],
	},
	output: {
		path: path.resolve('build'),
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js'],
		root: path.resolve('app'),
		moduleDirectories: [nodeModulesDir]
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: true,
			__PROD__: false
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new htmlWPPlugin({
			template: 'app/index.html',
			dev: true
		})
	],
	module: {
		eslint: {
			configFile: './.eslintrc'
		},
		// preLoaders: [
		// 	{
		// 		test: /\.(js|jsx)$/,
		// 		exclude: nodeModulesDir,
		// 		include: /app/,
		// 		loader: 'eslint-loader'
		// 	}
		// ],
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['react-hot', 'babel?stage=0'],
				exclude: nodeModulesDir
			}
		]
	}
};

module.exports = config;
