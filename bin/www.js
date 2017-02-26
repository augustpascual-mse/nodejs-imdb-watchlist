#!/usr/bin/env node

var http = require('http');
var app  = require('../app');

var port = 8000;

var server = http.createServer(app);

server.listen(port);
