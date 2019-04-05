var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())

var rout = require('./Route/route.js')


app.listen(8080);

console.log('Server demarer')

app.use('/',rout)