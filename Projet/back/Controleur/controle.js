var fs = require('fs')

module.exports.acc =  (req, res)=>{
    res.end("Bienvenue")
}

module.exports.getTest =  (req, res) => {
    var content=fs.readFileSync("./Modele/test.json", "utf8");
        res.setHeader('Content-Type', 'text/plain');        
        res.write(content);
        res.end();
  }

module.exports.getList = (req, res) => {
    try {
        var read = fs.readFileSync('./Modele/note.json', 'utf8');
        var parser = JSON.parse(read);
        console.log ("Resultat parse:", parser);
        res.send(parser);
        res.end();
    } catch (ev) {
        console.log("Erreur:",ev.stack);
    }     
}

module.exports.postList = (req, res) => {
    if(req.body.nom && req.body.prenom){
        var lecture = fs.readFileSync('./Modele/note.json', 'utf8');
        var convert;
        convert = JSON.parse(lecture);
        var id;
        (convert.length==0)?id=1:id=convert[convert.length-1].id + 1;
        parseInt(id);
        convert.push({"id": id, "nom":req.body.nom, "prenom":req.body.prenom});
        fs.writeFileSync('./Modele/note.json', JSON.stringify(convert));
        //res.send(convert);
        res.redirect('http://localhost:3000/list');
        res.end();
    } else {
        res.redirect('http://localhost:3000/list');
        res.end();
    }
}

module.exports.putList =  (req, res) =>{
    console.log("Afficher requete:", req);
    var id = parseInt(req.body.id)
    var nom = req.body.nom
    var prenom = req.body.prenom
    var lecture = fs.readFileSync('./Modele/note.json', 'utf8');
    var convert;
    convert = JSON.parse(lecture);
    for(let i=0;i<convert.length;i++) {
         if(id==convert[i].id){
              if(nom){
                   convert[i].nom=nom;
              }
              if(prenom){
                   convert[i].prenom=prenom;
              }
         }
    }
    console.log(convert);
    fs.writeFileSync('./Modele/note.json', JSON.stringify(convert));
   //res.save(convert);
   res.redirect('http://localhost:3000/list')
   res.end()
}

module.exports.deleteList =  (req, res)=> {
    console.log("Afficher requete:",req);
    var lecture = fs.readFileSync('./Modele/note.json', 'utf8');
    var convert;
    convert = JSON.parse(lecture);
    for( let i=0; i<convert.length; i++){
         if(convert[i].id==req.body.id){
              convert.splice(i,1);
         }
    }
    console.log("resultat delete:", convert);
    fs.writeFileSync('./Modele/note.json', JSON.stringify(convert));
    res.redirect('http://localhost:3000/list');
}

