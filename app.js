"use strict"

const express = require('express');
var bodyParser = require("body-parser");

const app = express();

//Carregar rutes

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar capçaleres

//Rutes base
app.get("/get",(req,res) => {
    res.send("Soc un get");
})

app.post("/post",(req,res) => {
    //res.send("Soc un post")
    res.json(req.body) //Retornem en forma de Json el que ens hagin enviat
})

app.put("/put",(req,res) => {
    res.send("Soc un put");
})

app.delete("/delete",(req,res) => {
    res.send("Soc un delete");
})

module.exports = app;