/////////////// Initial Variables
'use strict';

const https = require('https');
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

/////////////// Firebase Variables
const functions = require('firebase-functions');

/////////////// Local Variables
var modules = require('./modules.js');

/////////////// Responder Core
exports.responder = functions.https.onRequest((req, res) => {
    var stringIndex = req.url.indexOf(".");
    console.log("String Index: " + stringIndex);
    if(stringIndex === -1) {
        modules.beginResponse.beginResponse(req, res);
    } else {
        console.error("Request included a file reference.");
    }
})