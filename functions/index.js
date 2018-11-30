'use strict';

/////////////// Firebase Variables
const functions = require('firebase-functions');

var modules = require('./modules.js');


exports.responder = functions.https.onRequest((req, res) => {
    modules.beginResponse.beginResponse(req, res);

})