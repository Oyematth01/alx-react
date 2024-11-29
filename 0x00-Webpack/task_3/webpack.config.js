const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: { 
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
		maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
	},
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(), // Cleans the public folder before each build
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for the HTML file
      filename: 'index.html', // Output HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Match CSS files
        use: ['style-loader', 'css-loader'], // Load and inject CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        use: [
          'file-loader', {
            loader: 'image-webpack-loader',
            Options: {
              bypassOnDebug: true,
              disable: true,
            }
          }
        ],
        type: 'asset/resource', // Copy images to the output folder
        generator: {
          filename: 'images/[name][hash][ext]', // Save images in an 'images/' folder
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, './public'),
    port: 8564, // Set the development server's port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
};
