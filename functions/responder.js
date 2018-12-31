/////////////// Initial Variables
'use strict';

/////////////// Local Modules
var dataBase = require('./database.js');
var boiler = require('./boiler.js');

/////////////// Responder Scripts
exports.beginResponse = function(req, res) {
    locateData(req, res);
}

/////////////// Database Query Generator
function locateData(req, res) {

    var dataRoute = 'Routes' + req.path + `/`;

    if(req.path === "/") {
        dataRoute = 'Routes/index/';
        console.info('dataRoute: ' + dataRoute);
        retreiveData(req, res, dataRoute);
    } else {
        console.info('dataRoute: ' + dataRoute);
        retreiveData(req, res, dataRoute);
    }
}

/////////////// Database Data Retreival
function retreiveData(req, res, checkedRoute) {

    console.log("Retreiving Database Data");

    var dbData = dataBase.realTime.ref(checkedRoute);
    var localData = {};
  
    dbData.on('value', function(snapshot) {
        localData = snapshot.val();
        console.info(localData);
        if(localData !== null) {
            console.log("Response Initiated");
            boiler.loadBoiler(req, res, localData);
            endResponse(req, res);
        } else {
        console.error("No Data Returned");
        }
    });
}

/////////////// Ends the boiler response
function endResponse(req, res) {
    res.end();
    console.log("Response Ended");
}
