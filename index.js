"use strict" //Per obtenir compatibilitat amb les ultimes versions

const http = require('http');
var mongoose = require("mongoose");

try {
  mongoose.connect('mongodb://localhost:27017/curs_nodejs');
  console.log("La base de dades está funcionant correctamente");
} catch (error) {
  console.log("La base de dades no está funcionant correctamente" + error);
}

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mòn');
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});