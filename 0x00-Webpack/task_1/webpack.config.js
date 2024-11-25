const path = require('path');

module.exports = {
  mode: 'production', // Set Webpack to production mode
  entry: './js/dashboard_main.js', // Entry file
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'public'), // Output directory
  }
};
