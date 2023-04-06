'use strict'

var Usuari = require("../models/usuari"); 
var Imatge = require("../models/imatge")

function uploadImages(req, res){
    var imatge = new Imatge(); //Instanciem l'objecte de la col·lecció imatge
    var userId = req.params.id;
    var file_name = "No pujat...";

    //Anem a comprobar si rebem algo per les variables globals de la peticio "files"
    if(req.files){ //recollim totes les dades que arriven en la peticio amb el metode post
        var file_path = req.files.image.path;
        var file_split = file_path.split("\\");
        var file_name = file_split[2];
        imatge.arxiu = file_name; //Poblem l'objecte amb el nom d'arxiu
        imatge.usuari = userId; //Poblem l'objecte amb el id d'usuari

        var ext_split = file_path.split("\.");
        var file_ext = ext_split[1]; //Per obtenir l'extensió de l'arxiu

        //Comprovem si l'extensió és de les autoritzades
        if(file_ext == "png" || file_ext == "jpg" || file_ext == "gif"){
            var imatgeGuardada = imatge.save();
            if(imatgeGuardada.err){
                res.status(500).send({message: "Error al guardar la imatge"});
            } else {
                res.status(200).send({imatge: imatgeGuardada});
            }
        } else  {
            res.status(403).send({message: "Extensió de l'arxiu no vàlida"});
        }
        //console.log(file_split); //Per provar
    } else {
        //Resposta per quan no rebem correctament l'arxiu
        res.status(402).send({message: "No has pujat ninguna imatge..."});
    }
}

function veureImatgeUsuari(req, res){
    var idUsuari = req.params.id;

    Imatge.find({usuari: idUsuari}) //Permet cercar un registre per una propietat i tenim que definirli una funció fletxa amb el error i l'objecte
    .then(imatgesTrobades => {
        const imatgesJSON = imatgesTrobades.map(imatges => imatges.toObject());
        res.status(200).send({imatges: imatgesJSON});
    })
    .catch(err => {res.status(500).send({message: "Error en la solicitud"})});
}

module.exports = {
    uploadImages,
    veureImatgeUsuari
};