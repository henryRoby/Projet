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
    var lecture = fs.readFileSync('./Modele/note.json', 'utf8');
    var convert;
    convert = JSON.parse(lecture);
    var id = parseInt(req.body.id)
    convert.push({"id": id, "nom":req.body.nom, "prenom":req.body.prenom});
    fs.writeFileSync('./Modele/note.json', JSON.stringify(convert));
    res.send(convert);
}

module.exports.putList =  (req, res) =>{
    console.log("Afficher requete:", req);
    var lecture = fs.readFileSync('./Modele/note.json', 'utf8');
    var convert;
    convert = JSON.parse(lecture);
    for(let i=0;i<convert.length;i++) {
         if(convert[i].id==req.body.id){
              if(req.body.nom){
                   convert[i].nom=req.body.nom;
              }
              if(req.body.prenom){
                   convert[i].prenom=req.body.prenom;
              }
         }
    }
    console.log(convert);
    fs.writeFileSync('./Modele/note.json', JSON.stringify(convert));
    res.send(convert);
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
    res.send(convert);
}

