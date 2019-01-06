/////////////// Initial Variables
'use strict';

/////////////// Local Modules
var dataBase = require('./database.js');

/////////////// Built in Modules
var fs = require('fs');

/////////////// Create a new page
exports.createPage = function(req, res) {
    var queryData = req.query;
    if (typeof queryData.routeName !== 'undefined' && typeof queryData.routePath !== 'undefined') {
        console.log('Data Received');

        dataBase.setFireStoreData('routes', queryData.routeName, queryData, true);
        
        var fileCheck = './routes' + queryData.routePath + '.html';
        var fileNotice = 'This file was created by the create page function';

        if (fs.existsSync(fileCheck)) {
            console.log('File already exists, system will use that file.');
        } else {
            console.log('File doesn\'t exist, writing new file.');
            fs.writeFileSync(fileCheck, fileNotice);
        }

    } else {
        console.error('Not enough data!');
        res.write('<h1>Not Enough Data</h1>');
        res.end();
    }
}