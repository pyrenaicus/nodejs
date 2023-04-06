'use strict'

var Usuari = require("../models/usuari"); 

function uploadImages(req, res){
    var userId = req.params.id;
    var file_name = "No pujat...";

    //Anem a comprobar si rebem algo per les variables globals de la peticio "files"
    if(req.files){
        var file_path = req.files.image.path;
        var file_split = file_path.split("\\");
        var file_name = file_split[2];
        console.log(file_split); //Per provar
    } else {
        //Resposta per quan no rebem correctament l'arxiu
        res.status(200).send({message: "No has pujat ninguna imatge..."});
    }
}

module.exports = {
    uploadImages
};