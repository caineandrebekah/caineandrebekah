/////////////// Initial Variables

'use strict';

const https = require('https');
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

/////////////// Responder Scripts

exports.beginResponse = function beginResponse(req, res) {
    console.log("Response Initiated");

    res.type('html');
    const headers = res.getHeaders();
    console.log(headers);
    pullHeader(req, res);
    pullContent(req, res);
    pullFooter(req, res);
    endResponse(req, res);
}

function pullHeader(req, res) {
    var headdata = fs.readFileSync('./templates/header-template.html');
    res.write(headdata);

    console.log("Header Loaded");
}

function pullContent(req, res) {
    var check = (req.url + ".html");
    console.log(check);
    var contentdata;

    if(check === "/.html") {
        contentdata = fs.readFileSync(`../public/routes/index.html`);
        res.write(contentdata);
    } else {
        contentdata = fs.readFileSync(`../public/routes/${check}`);
        res.write(contentdata);
    }

    console.log("Content Loaded");
}

function pullFooter(req, res) {
    var footerdata = fs.readFileSync('./templates/footer-template.html');
    res.write(footerdata);

    console.log("Footer Loaded");
}

function endResponse(req, res) {
    res.end();
    
    console.log("Response Ended");
}