global.config = require('./config');

const path = require('path');
const express = require('express');
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

/**
 * Use list of routes
 */
app.use('/', routes);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });
//
// // error handler
// app.use(function (err, req, res, next) {
//     // res.locals.message = err.message;
//     // res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

/**
 * Run App
 */
app.listen(port, () => console.log(`App listening on port ${port}!`));
