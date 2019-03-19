const path = require('path');

module.exports = {
  /**
   * App web port
   */
  PORT: 3000,

  /**
   * Path to parent for 'public' dir with static files
   */
  STATIC_FILES_DIR: path.join(__dirname, 'public'),

  /**
   * Path to 'views' directory
   */
  VIEWS_DIR: path.join(__dirname, 'views')
};
