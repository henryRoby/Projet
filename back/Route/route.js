var express = require('express');
var contr = require('../Controleur/controle.js');
var rout = express.Router();

  rout.get('/', contr.acc);

  rout.get('/list', contr.getList);
  
  rout.post('/list', contr.postList);

  rout.put('/list', contr.putList);

  rout.delete('/list', contr.deleteList);
 
  rout.get('/test',contr.getTest);
  
module.exports = rout;
