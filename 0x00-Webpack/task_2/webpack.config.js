const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', // Optimize for production
  entry: './js/dashboard_main.js', // Entry point
  output: {
    filename: 'bundle.js', // Bundle name
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Load and inject CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Match image files
        type: 'asset/resource', // Copy images to the output folder
        generator: {
          filename: 'images/[name][hash][ext]', // Save images in an 'images/' folder
        },
      },
    ],
  },
  optimization: {
    minimize: true, // Enable minimization
    minimizer: [
      '...', // Retain existing minimizers (e.g., Terser for JS)
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['mozjpeg', { quality: 70 }], // Compress JPEG images
              ['pngquant', { quality: [0.65, 0.8] }], // Compress PNG images
            ],
          },
        },
      }),
    ],
  },
};
