var express = require('express');
var path = require('path')
var fs = require('fs')

var rout = express.Router()

  rout.get('/', function(req, res){
    res.send("Bienvenue")
  })

  rout.get('/list', function(req, res) {
    // var content=fs.readFileSync("./Route/note.json", "utf8");
    // //var x= util.puts(JSON.parse(content));
    //     res.
    
//     setHeader( 'Content-Type', 'text/plain');
    //     res.write(content);
    //     res.end();
    //   });


    try {
      var read = fs.readFileSync('./Route/note.json', 'utf8')
      var parser = JSON.parse(read)
      console.log (parser)
      for (let i = 0; i < parser.length; i++) {
           rout.get(parser[i].image, function (req, res) {
                try {
                     var iamageRouter = '.' + parser[i].image
                     var lireImageRouter = fs.readFileSync(iamageRouter)
                     console.log(lireImageRouter)
                     res.write(lireImageRouter)
                     res.end()

                } catch (e) {
                     console.log(e.stack);
                }
           })
      }
      res.write(read)
      res.end()
 } catch (ev) {
      console.log(ev.stack)
 }
        
  });

  rout.get('/test', function(req, res) {
    var content=fs.readFileSync("./Route/test.json", "utf8");
    //var x= util.puts(JSON.parse(content));
        res.setHeader('Content-Type', 'text/plain');
        
        res.write(content);
        res.end();
  });
  

module.exports = rout;
