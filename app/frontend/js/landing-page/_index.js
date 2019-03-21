/**
 * Main script
 */
module.exports = (() => {
  /**
   * Define modules
   */
  const deeplinker = require('@codexteam/deeplinker');
  const instagram = require('./instagram');

  deeplinker.init();
  instagram.init();
})();
