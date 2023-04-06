'use strict'

var Usuari = require("../models/usuari"); 

function proves(req, res){
    res.status(200).send({
        message: "Provant una acció del controlador"
    });
}

function guardarUsuari(req, res){
    var usuari = new Usuari();
    var params = req.body; //recollim totes les dades que arriven en la peticio amb el metode post

    usuari.nom = params.nom;
    usuari.cognom = params.cognom;
    usuari.email = params.email;
    usuari.clau = params.clau;

    //console.log(params);

    if(usuari.nom != null && usuari.cognom != null && usuari.email != null && usuari.clau != null ){
        var nouUsuari = usuari.save();
            if(nouUsuari.err){
                res.status(500).send({message: "Error al guardar l'usuari"});
            } else {
                res.status(200).send({usuari: nouUsuari});
            }
    } else {
        res.status(402).send({message: "Indica totes les dades"});
    }
}

function veureUsuari(req, res){
    var params = req.body;

    var email = params.email;
    //var clau = params.clau;

    Usuari.findOne({email: email.toLowerCase()}) //Permet cercar un registre per una propietat i tenim que definirli una funció fletxa amb el error i l'objecte
    .then(usuariTrobat => {
        res.status(200).send({usuaris: usuariTrobat})
    })
    .catch(err => {res.status(500).send({message: "Error en la solicitud"})});  
}

function veureTotsUsuari(req, res){
    Usuari.find()
    //console.log(Usuari.find());
      .then(usuari => {
        const usuarisJSON = usuari.map(usuaris => usuaris.toObject());
        res.status(200).send({usuaris: usuarisJSON});
      })
      .catch(err => {res.status(500).send({message: "Error en la solicitud"})});  
}

module.exports = {
    proves,
    guardarUsuari,
    veureUsuari,
    veureTotsUsuari
};