const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'),
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
    new CleanWebpackPlugin(),
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
