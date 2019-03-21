const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const Dotenv = require('dotenv-webpack');
const path = require('path');

const sourceDir = path.resolve(__dirname, 'frontend');

module.exports = {
  /**
   * Define entry points
   */
  entry: {
    main: [
      path.resolve(sourceDir, 'js', 'main.js'),
      path.resolve(sourceDir, 'css', 'main.pcss'),
    ],

    /**
     * Landing page
     */
    landingPage: [
      path.resolve(sourceDir, 'js', 'landing-page', '_index.js'),
      path.resolve(sourceDir, 'css', 'landing-page', '_index.pcss'),
    ],

    /**
     * hawk.javascript library
     */
    hawk: path.resolve(sourceDir, 'js', 'modules', 'hawk.js')
  },

  /**
   * Set bundle params
   * https://webpack.js.org/configuration/output
   */
  output: {
    /**
     * Name of each output bundle
     * https://webpack.js.org/configuration/output#outputfilename
     */
    filename: '[name].bundle.js',

    /**
     * The output directory as an absolute path.
     * https://webpack.js.org/configuration/output#outputpath
     */
    path: path.resolve(__dirname, 'public', 'build'),

    /**
     * This option determines the name of non-entry chunk files
     * https://webpack.js.org/configuration/output#outputchunkfilename
     */
    // chunkFilename: '[name].bundle.js?h=[hash]',

    /**
     * Name of variable to be used for holding module
     * Depends on the value of the libraryTarget (default 'var')
     * https://webpack.js.org/configuration/output#outputlibrary
     */
    // library: '[name]'
  },

  /**
   * Loaders are used to transform certain types of modules
   * https://webpack.js.org/configuration/module
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
   * https://webpack.js.org/configuration/plugins
   */
  plugins: [
    /**
     * Supports dotenv environment variables
     * https://github.com/mrsteele/dotenv-webpack
     */
    new Dotenv(),

    /**
     * Remove empty js files created by webpack for CSS entries
     * https://github.com/fqborges/webpack-fix-style-only-entries
     */
    new FixStyleOnlyEntriesPlugin({
      extensions:['pcss']
    }),

    /**
     * Build separated styles bundle
     * https://github.com/webpack-contrib/mini-css-extract-plugin
     */
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    })
  ],

  /**
   * Optimization params
   * https://webpack.js.org/configuration/optimization
   */
  optimization: {
    /**
     * Skip the emitting phase whenever there are errors while compiling
     * https://webpack.js.org/configuration/optimization/#optimizationnoemitonerrors
     */
    noEmitOnErrors: true
  }
};
