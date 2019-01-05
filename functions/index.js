/////////////// Initial Variables
'use strict';

/////////////// Express Variables
const express = require('express');
const app = express();

/////////////// Firebase Variables
const functions = require('firebase-functions');

/////////////// Local Modules
var modules = require('./modules.js');

/////////////// Responder Core
exports.responder = functions.https.onRequest((req, res) => {
    console.info('responder::: ');
    requestLogger(req, res);
    var stringIndex = req.url.indexOf(".");
    console.log("String Index: " + stringIndex);
    if(stringIndex === -1) {
        modules.beginResponse.beginResponse(req, res);
    } else {
        console.error("Request included a file reference.");
    }
});

/////////////// Page Creator
exports.pageCreator = functions.https.onRequest((req,res) => {
    console.info('pageCreator::: ');
    requestLogger(req, res);
    modules.createPage.createPage(req, res);
});

function requestLogger(req, res) {
    console.log("Request Received");
    console.log("Request Method: " + req.method);
    console.log("Request URL: " + req.url);
    console.log("Request Host: " + req.hostName);
    console.log("Request Path: " + req.path);
    console.log("Request Queries: ");
    console.log(req.query);
}