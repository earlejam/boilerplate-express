const INDEX_FILE_PATH = __dirname + '/views/index.html';
const STATIC_ASSETS_FILE_PATH = __dirname + '/public';

let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public', express.static(STATIC_ASSETS_FILE_PATH));

app.get('/', function(req, res) {
    res.sendFile(INDEX_FILE_PATH);
});



































 module.exports = app;
