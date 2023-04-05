"use strict" //Per obtenir compatibilitat amb les ultimes versions

const express = require('express');
var mongoose = require("mongoose");

try {
  mongoose.connect('mongodb://localhost:27017/curs_nodejs');
  console.log("La base de dades está funcionant correctamente");
} catch (error) {
  console.log("La base de dades no está funcionant correctamente" + error);
}

const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("Hola mòn");
})

app.listen(port, () => {
  console.log("Exemple d'app escoltant");
});