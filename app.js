"use strict"

const express = require('express');
var bodyParser = require("body-parser");

const app = express();

//Carregar rutes

//Middlewares o tasques que s'han de realitzar abans de rebre la petició
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const testFunction = () => {
    //console.log("Log from the testFunction")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        },3000)
    })
}

app.use( async (req, res, next) => {
    //setTimeout(() => {
        //console.log("middleware 1");
        const resProm = await testFunction();
        console.log("promise res", resProm);
        next();
    //},2000)
})

app.use((req, res, next) => {
    console.log("middleware 2");
    next();
})

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