/////////////// Initial Variables
'use strict';

const https = require('https');
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');


/////////////// Express Variables
const express = require('express');
const app = express();

/////////////// Firebase Variables
const functions = require('firebase-functions');

/////////////// Local Modules
var modules = require('./modules.js');
var fireStore = require('./database.js');

/////////////// Responder Scripts
exports.createPage = function(req, res) {
    var queryData = req.query;
    if (typeof queryData.routeName !== 'undefined') {
        console.log('Data Received');
        addDbData('routes', queryData.routeName, queryData);
        res.redirect('http://www.caineandrebekah.com');
    } else {
        console.error('Not enough data!');
        res.write('<h1>Not Enough Data</h1>');
    }
}


function addDbData(collection, doc, data) {
    var docRef = fireStore.fireStore.collection(collection).doc(doc);
    docRef.set(data);
    console.log('Data Stored');
}

