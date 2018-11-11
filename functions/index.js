const functions = require('firebase-functions');


exports.router = functions.https.onRequest((req, res) => {
    res.status(200).send(`<!doctype html>
    <html>
        <head>
            <title>Sweet</title>    
        </head>
        <body>
            <p>Server Returned:</p>
            <ul>
                <li><b>req.hostname: </b>` + req.hostname + `</li>
                <li><b>req.ip: </b>` + req.ip + `</li>
                <li><b>req.originalUrl: </b>` + req.originalUrl + `</li>
                <li><b>req.params.name: </b>` + req.params.name + `</li>
                <li><b>req.path: </b>` + req.path + `</li>
                <li><b>req.protocol: </b>` + req.protocol + `</li>
                <li><b>req.query.exampleQuery: </b>` + req.query.exampleQuery + `</li>
                <li><b>req.subdomains: </b>` + req.subdomains + `</li>
            </ul>
        </body>
    </html>`);

    console.log('Page Loaded');
});