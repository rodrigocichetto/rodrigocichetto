const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'env',
							{
								modules: false
							}
						]
					]
				},

				test: /\.js$/,
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',

						options: {
							sourceMap: true,
							outputStyle: 'compressed'
						}
					}
				]
			},
			{
				test: /.*fontawesome.*\.(ttf|woff|woff2|eot|svg)$/i,
				use: {
					loader: 'url-loader'
				}
			},
			{
				test: /^((?!fontawesome).)*\.(jpg|jpe?g|png|gif|svg|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							useRelativePath: true,
							publicPath: '../assets/',
							name: `[name].[ext]`
						}
					}
				]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist'], {
			// dry: true,
			beforeEmit :  true
		}),
		new HtmlWebpackPlugin({ template: 'src/index.html' }),
		new MiniCssExtractPlugin({
			filename: `styles/build.css`
		}),
		new CopyWebpackPlugin([
			{
				from: 'src/assets/',
				to: `assets/`
			}, 
			{
				from: 'src/CNAME', 
				to: '.'
			}
		]),
		new ImageminPlugin({ 
			test: /\.(jpg|jpe?g|png|gif|svg|ico)$/i,
			plugins: [
				imageminMozjpeg({
					quality: 70,
					progressive: true
				})
			],
			pngquant: {
				quality: '80'
			}
		})
	],

	mode: 'production',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: false
		}
	}
};
