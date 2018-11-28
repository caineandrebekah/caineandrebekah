/////////////// Initial Variables

'use strict';

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

/////////////// Firebase Variables

const functions = require('firebase-functions');

/////////////// Express Variables

const express = require('express');
const app = express();

/////////////// Host and Port Variables

const hostname = '127.0.0.1';
const port1 = 1000;
const port2 = 2000;
const port3 = 3000;

/////////////// Express Host and Port Settings

//app.listen(port1, hostname, () => console.log(`Express Server running at http://${hostname}:${port1}/`));

/////////////// Express Routes

//app.get('/', function (req, res) {
    //responder(req, res);
//});

//app.get('/blog', function (req, res) {
    //responder(req, res);
//});

//app.get('/blog/:articleName', function (req, res) {
    //responder(req, res);
//});

//app.get('/gallery', function (req, res) {
    //(req, res);
//});

//app.get('/support', function (req, res) {
    //responder(req, res);
//});


exports.router = functions.https.onRequest((req, res) => {
    fs.readFile('routerinfo.html', function(_err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    console.log('Page Loaded');
});

/////////////// Responder Master Script

exports.responder = functions.https.onRequest((req, res) => {

    beginResponse(req, res);

});

/////////////// Responder Scripts

function beginResponse(req, res) {
    console.log("Response Initiated");

    res.type('html');
    pullHeader(req, res);
    pullContent(req, res);
    pullFooter(req, res);
    endResponse(req, res);
}

function pullHeader(req, res) {
    var headdata = fs.readFileSync('templates/header-template.html');
    res.write(headdata);

    console.log("Header Loaded");
}

function pullContent(req, res) {
    var check = (req.url + ".html");
    console.log(check);

    if(check === "/.html") {
        var contentdata = fs.readFileSync(`../public/routes/index.html`);
        res.write(contentdata);
    } else {
        var contentdata = fs.readFileSync(`../public/routes/${check}`);
        res.write(contentdata);
    }

    console.log("Content Loaded");
}

function pullFooter(req, res) {
    var footerdata = fs.readFileSync('templates/footer-template.html');
    res.write(footerdata);

    console.log("Footer Loaded");
}

function endResponse(req, res) {
    res.end();
    
    console.log("Response Ended");
}





