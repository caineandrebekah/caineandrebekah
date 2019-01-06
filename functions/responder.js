/////////////// Initial Variables
'use strict';

/////////////// Local Modules
var dataBase = require('./database.js');
var boiler = require('./boiler.js');

/////////////// Responder Scripts
exports.beginResponse = function(req, res) {
    retreiveData(req, res, req.path);
}

/////////////// Database Data Retreival NEW
function retreiveData(req, res, checkedRoute) {
    console.log("Requesting Database Data");

    var check = {};
    check.field = 'routePath';
    check.arg = '==';
    check.check = checkedRoute

    dataBase.queryFireStoreData('routes', check, function(returnedData) {
        console.log('Returned Data: ');
        console.log(returnedData);

        console.log("Response Initiated");
            boiler.loadBoiler(req, res, returnedData);
            endResponse(req, res);
    });
}

/////////////// Ends the boiler response
function endResponse(req, res) {
    res.end();
    console.log("Response Ended");
}
