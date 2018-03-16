/** @format */
/**
 **** WARNING: No ES6 modules here. Not transpiled! ****
 */
/* eslint-disable import/no-nodejs-modules */

/**
 * External dependencies
 */
const path = require( 'path' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );

const webpackConfig = {
	entry: 'index.js',
	devtool: false,
	output: {
		path: path.join( __dirname, 'public' ),
		filename: '[name].[chunkhash].min.js',
		chunkFilename: '[name].[chunkhash].min.js',
		devtoolModuleFilenameTemplate: 'app:///[resource-path]',
	},
	module: {
		rules: [],
	},
	resolve: {
		extensions: [ '.js' ],
		//modules: [ path.join( __dirname, 'client' ), 'node_modules' ],
	},
	plugins: [
		new UglifyJsPlugin( {
			cache: false,
			exclude: /[\/\\]node_modules[\/\\]debug[\/\\]/,
			parallel: true,
			sourceMap: false,
			uglifyOptions: { ecma: 5 },
		} ),
	],
};

module.exports = webpackConfig;
