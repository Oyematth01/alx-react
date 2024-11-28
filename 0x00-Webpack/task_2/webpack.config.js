const path = require('path');

module.exports = {
  mode: 'production',
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
  module: {
    rules: [
      {
        test: /\.css$/i, // Match CSS files
        use: ['style-loader', 'css-loader'], // Load and inject CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        type: 'asset/resource', // Copy images to the output folder
        generator: {
          filename: 'images/[name][hash][ext]', // Save images in an 'images/' folder
        },
      },
    ],
  },
};
