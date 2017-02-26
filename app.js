var express = require('express');
var routes  = require('./routes/index');
var path    = require('path');

var app = express();

app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

module.exports = app;
