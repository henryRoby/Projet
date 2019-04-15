var express = require('express');
var cors = require('cors');
var app = express();
var rout = require('./Route/route.js');

var bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8080);

console.log('Server demarer');

app.use('/',rout);