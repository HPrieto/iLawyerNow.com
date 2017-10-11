// Module imports
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var localURL = 'mongodb://localhost/iLawyerNow';
var herokuURL = 'mongodb://<dbuser>:<dbpassword>@ds117485.mlab.com:17485/ilawyernowclient';
mongoose.connect(herokuURL, {
  useMongoClient: true
});

// Routes import
var index = require('./routes/index');
var api = require('./routes/api');

// Express instance variable
var app = express();

// view engine setup(hjs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// Middleware/Json Handler/Static Express Directory
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

// Set routes
app.use('/', index);
app.use('/api', api);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found' + req);
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

// DEFAULT PORT is 3000 unless specified by dotenv
const ENV = process.env.NODE_ENV || 'development';
const PORT = Number(JSON.stringify(process.env.PORT)) ?
    Number(JSON.stringify(process.env.PORT)) : 3000;
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running in ${ENV.toUpperCase()} mode`);
    console.log(`listening on Port ${PORT}`);
});

module.exports = app;
// express iLawyer --hogan