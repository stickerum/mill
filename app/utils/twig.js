/**
 * Twig extensions
 */
const twig = require('twig');
const path = require('path');
const fs = require('fs');

module.exports = (() => {
    // /**
    //  * Function for include svg on page
    //  *
    //  * @example svg('path/from/root/dir')
    //  * @param filename - name of icon
    //  * @returns {String} - svg code
    //  */
    // twig.extendFunction('svg', function (filename) {
    //     return fs.readFileSync(`${__dirname}/../frontend/svg/${filename}.svg`, 'utf-8');
    // });

    twig.extendFunction('filemtime', (filename) => {
        const stats = fs.statSync(path.join(global.config.STATIC_FILES_DIR, filename));

        return `${filename}?v=${stats.mtimeMs}`;
    });
})();
