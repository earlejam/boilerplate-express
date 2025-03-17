require('dotenv').config()

const INDEX_FILE_PATH = __dirname + '/views/index.html';
const STATIC_ASSETS_FILE_PATH = __dirname + '/public';
const UPPERCASE = "uppercase";

let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public', express.static(STATIC_ASSETS_FILE_PATH));

app.get('/', function(req, res) {
    res.sendFile(INDEX_FILE_PATH);
});

app.get('/json', function(req, res) {
    var message = "Hello json";

    if (UPPERCASE === process.env.MESSAGE_STYLE) {
        message = message.toUpperCase();
    }

    res.json({"message": message});
});


































 module.exports = app;
