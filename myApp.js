const INDEX_FILE_PATH = __dirname + "/views/index.html"

let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req, res) {
    res.sendFile(INDEX_FILE_PATH);
});



































 module.exports = app;
