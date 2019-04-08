const express = require('express');
const router = express.Router();

/** GET index page. */
router.get('/', function (req, res, next) {
  res.locals.description = "Напечатаю твои любимые стикеры из Telegram";
  res.render('pages/index');
});

/** GET faq page. */
router.get('/faq', function (req, res, next) {
  res.locals.description = "Отвечаем на популярные вопросы о проекте Stickerum";
  res.render('pages/faq');
});

module.exports = router;
