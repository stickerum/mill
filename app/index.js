global.config = require('./config');

const path = require('path');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const time = require('./utils/time');

const app = express();
const port = global.config.PORT;

/**
 * Parse POST data
 */
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

/**
 * Parse cookies
 */
app.use(cookieParser());

/**
 * View engine setup
 */
app.set('views', global.config.VIEWS_DIR);
app.set('view engine', 'twig');
require('./utils/twig');

/**
 * Define path to directory with static files
 */
app.use(express.static(global.config.STATIC_FILES_DIR, {
  /**
   * Cache time in ms
   */
  maxage: time.WEEK * 1000
}));

/** @todo add request logger middleware */

/**
 * Set global vars for Twig tempates
 */
app.use(function (req, res, next) {
  res.locals = {
    HOSTNAME: `${req.protocol}://${req.get('host')}`,
    TITLE: 'Stickerum'
  };
  next();
});

/**
 * Use list of routes
 */
app.use('/', routes);

/**
 * Catch 404
 */
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * Error handler
 */
app.use(function (err, req, res, next) {
  /** @todo log error */

  /** @todo catch error with a hawk.nodejs */

  /** for dev env show error text and stack */

  res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  /**
   * Render the error page
   */
  res.status(err.status || 500);
  res.render('pages/error');
});

/**
 * Run App
 */
app.listen(port, () => console.log(`App listening on port ${port}!`));
