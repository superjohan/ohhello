#!/usr/bin/env node

var express = require('express');
var app = express();
app.use(rawBody);

configurePaths();

var port = process.argv[2];
if (!port) {
    console.log('Usage: ohhello PORT [STATUSCODE]')
    process.exit(1);
}

var statusCode = process.argv[3];
if (!statusCode) {
    statusCode = 200;
}

app.listen(port, function() {
    console.log('Oh, hello! Listening on port ' + port + ', sending HTTP ' + statusCode + ' to all requests.');
});

// from http://stackoverflow.com/a/12345876/5002858
function rawBody(req, res, next) {
    req.setEncoding('utf8');
    req.rawBody = '';
    req.on('data', function(chunk) {
        req.rawBody += chunk;
    });
    req.on('end', function() {
        next();
    });
}

function configurePaths() {
    ['/', '/*'].forEach(function(path) {
        app.get(path, function(req, res) {
            printRequestInfoAndSendStatusCode(req, res);
        })

        app.post(path, function(req, res) {
            printRequestInfoAndSendStatusCode(req, res);
        })

        app.put(path, function(req, res) {
            printRequestInfoAndSendStatusCode(req, res);
        })

        app.patch(path, function(req, res) {
            printRequestInfoAndSendStatusCode(req, res);
        })

        app.delete(path, function(req, res) {
            printRequestInfoAndSendStatusCode(req, res);
        })
    });
}

function printRequestInfoAndSendStatusCode(req, res) {
    console.log('url: ' + req.originalUrl);
    console.log('body: ' + req.rawBody);
    console.log('headers: ' + JSON.stringify(req.headers));
    console.log('');

    res.sendStatus(statusCode);
}
