"use strict" //Per obtenir compatibilitat amb les ultimes versions

var mongoose = require("mongoose");

/* Versiò antiga amb callback
mongoose.connect("mongodb://localhost:27017/curs_nodejs",(err, res) =>{
if(err){
throw err;
}else{
  console.log("La base de dades está funcionant correctamente");
  app.listen(port, () => {
    console.log("Exemple d'app escoltant");
  })
}
});*/

try {
  mongoose.connect('mongodb://localhost:27017/curs_nodejs');
  console.log("La base de dades está funcionant correctamente");
} catch (error) {
  console.log("La base de dades no está funcionant correctamente" + error);
}

//console.log("Hola mòn");
