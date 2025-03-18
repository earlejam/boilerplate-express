require('dotenv').config()

const INDEX_FILE_PATH = __dirname + '/views/index.html';
const STATIC_ASSETS_FILE_PATH = __dirname + '/public';
const UPPERCASE = "uppercase";

let express = require('express');
let app = express();

console.log('Hello World');

app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

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

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({"time": req.time});
});

































 module.exports = app;
