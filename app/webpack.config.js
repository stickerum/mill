const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const sourceDir = path.resolve(__dirname, 'frontend');

module.exports = {
  /**
   * Define entry points
   */
  entry: {
    /**
     * Main JS bundle
     */
    app: path.resolve(sourceDir, 'entry.js'),

    /**
     * hawk.javascript library
     */
    hawk: path.resolve(sourceDir, 'js', 'modules', 'hawk.js')
  },

  /**
   * Set bundle params
   */
  output: {
    library: '[name]',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js?h=[hash]',
    path: path.resolve(__dirname, 'public', 'build')
  },

  /**
   * Loaders are used to transform certain types of modules
   */
  module: {
    rules: [
      /**
       * Process js files
       */
      {
        test: /\.js$/,
        exclude: [ /node_modules/ ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [ '@babel/preset-env' ],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ]
      },

      /**
       * Process css files
       */
      {
        test: /\.(pcss|css)$/,
        exclude: [ /node_modules/ ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },

      /**
       * Load assets files
       */
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[path][name].[ext]',
      //       }
      //     }
      //   ]
      // }
    ]
  },

  /**
   * Adding plugins to configuration
   */
  plugins: [
    /** Build separated styles bundle */
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  /**
   * Optimization params
   */
  optimization: {
    noEmitOnErrors: true
  }
};
