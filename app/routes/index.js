const express = require('express');
const router = express.Router();

/** GET index page. */
router.get('/', function (req, res, next) {
  res.render('pages/index');
});

/** GET faq page. */
router.get('/faq', function (req, res, next) {
  res.render('pages/faq');
});

module.exports = router;
