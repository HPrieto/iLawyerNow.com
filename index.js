// Module imports
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Routes import
var index = require('./routes/index');
var api = require('./routes/api');

// Express instance variable
var app = express();