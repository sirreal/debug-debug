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
		path: path.join( __dirname, 'dist' ),
		filename: 'script.min.js',
		chunkFilename: 'script.min.js',
		devtoolModuleFilenameTemplate: 'app:///[resource-path]',
	},
	module: {
		rules: [],
	},
	resolve: {
		extensions: [ '.js' ],
		modules: [ path.join( __dirname, 'src' ), 'node_modules' ],
	},
	plugins: [
		new UglifyJsPlugin( {
			uglifyOptions: {
				// Set `compress: false` and the bug disappears
				compress: true,
			},
		} ),
	],
};

module.exports = webpackConfig;
