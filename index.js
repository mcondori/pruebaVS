const { Console } = require("console");
const http = require("http");

http
  .createServer(function (req, res) {
    res.end("HOLA MUNDO");
  }).listen(3000, () => console.log("server en el puerto 3000"));
