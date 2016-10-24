var express = require('express');
var app = express();

// from http://stackoverflow.com/a/12345876/5002858
function rawBody(req, res, next) {
  req.setEncoding('utf8');
  req.rawBody = '';
  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });
  req.on('end', function(){
    next();
  });
}

app.use(rawBody);

app.get('/', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.get('/*', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.post('/', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.post('/*', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.put('/', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.put('/*', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.patch('/', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.patch('/*', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.delete('/', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

app.delete('/*', function (req, res) {
    printRequestInfoAndSend200(req, res);
});

function printRequestInfoAndSend200(req, res) {
    console.log('url: ' + req.originalUrl);
    console.log('body: ' + req.rawBody);
    console.log('headers: ' + JSON.stringify(req.headers));
    console.log('');

    res.sendStatus(200);
}

var port = 3000;

app.listen(port, function () {
    console.log('listening on port ' + port);
});
