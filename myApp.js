require('dotenv').config();

const INDEX_FILE_PATH = __dirname + '/views/index.html';
const STATIC_ASSETS_FILE_PATH = __dirname + '/public';
const UPPERCASE = "uppercase";

let express = require('express');
let bodyParser = require('body-parser');
let app = express();

console.log('Hello World');

app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/:word/echo', function(req, res) {
    res.json({"echo": req.params.word});
});

app.get('/name', function(req, res) {
    res.json({"name": `${req.query.first} ${req.query.last}`});
});

app.post('/name', function(req, res) {
    res.json({"name": `${req.body.first} ${req.body.last}`});
});




























 module.exports = app;
