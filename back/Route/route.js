var express = require('express');

var fs = require('fs')

var rout = express.Router()

  rout.get('/', function(req, res){
    res.send("Bienvenue")
  })

  rout.get('/list', function(req, res) {
    var content=fs.readFileSync("./Route/note.json", "utf8");
    //var x= util.puts(JSON.parse(content));
        res.setHeader( 'Content-Type', 'text/plain');
        res.write(content);
        res.end();
        
  });

  rout.get('/test', function(req, res) {
    var content=fs.readFileSync("./Route/test.json", "utf8");
    //var x= util.puts(JSON.parse(content));
        res.setHeader('Content-Type', 'text/plain');
        
        res.write(content);
        res.end();
  });
  

module.exports = rout;
