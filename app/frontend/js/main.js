module.exports = (() => {
  /**
   * Document ready function wrapper
   *
   * @param {function} f
   */
  const docReady = (f) => {
    return /in/.test(document.readyState) ? window.setTimeout(docReady, 9, f) : f();
  };

  docReady(() => {
    console.info('Mill is ready!');
  });
})();
