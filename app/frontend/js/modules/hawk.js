module.exports = (() => {
  /**
   * Hawk Catcher for JavaScript client errors
   */
  const hawk = require('hawk.javascript');

  if (process.env.HAWK_TOKEN) {
    hawk.init(process.env.HAWK_TOKEN);
  }
})();
