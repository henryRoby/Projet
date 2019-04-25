var express = require('express');
var cors = require('cors');
var app = express();
var rout = require('./Route/route.js');
var methodOverride = require('method-override')

var bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.listen(8080);

console.log('Server demarer');

app.use('/',rout);