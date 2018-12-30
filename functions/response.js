/////////////// Initial Variables
'use strict';

const https = require('https');
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

/////////////// Responder Scripts
exports.beginResponse = function beginResponse(req, res) {
    
    locateData(req, res);
    
    console.log("Response Initiated");
}

/////////////// Databse Authentication
const admin = require("firebase-admin");
const serviceAccount = require("./caineandrebekah-firebase-adminsdk-k6r6u-6ff7566357.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://caineandrebekah.firebaseio.com"
});

/////////////// Databse Authentication
function locateData(req, res) {
    console.log("Request Method: " + req.method);
    console.log("Request URL: " + req.url);
    console.log("Request Host: " + req.hostName);
    console.log("Request Path: " + req.path);
    console.log("Request Queries: ");
    console.log(req.query);

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

function retreiveData(req, res, checkedRoute) {

    console.log("Retreiving Database Data");

    var db = admin.database();
    var dbData = db.ref(checkedRoute);
    var localData = {};
  
    dbData.on('value', function(snapshot) {
        localData = snapshot.val();
        console.info(localData);
        if(localData !== null) {
            pullHeader(req, res, localData);
            pullFooter(req, res);
            endResponse(req, res);
        } else {
        console.error("No Data Returned");
        }
    });
}

function loadBeginPageBoiler(req, res, localData) {
    res.write(`<!DOCTYPE html>
    <html>
    <head>`);
}

function loadPageCharSet(req, res, localData) {
    res.write(`<!--Character Set-->
    <meta charset="UTF-8"></meta>`);
}

function loadPageViewPort(req, res, localData) {
    res.write(`<!--Typical Viewport Meta Tag-->
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>`);
}

function loadPageTitle(req, res, localData) {
    res.write(`<!--Document Title-->
    <title>${localData.pageTitle} | Caine And Rebekah</title>`);
}

function loadPageTags(req, res, localData) {
    res.write(`<!--Common Meta Tags-->
    <meta name="author" content="Caine J Nielsen">
    <meta name="description" content="description here">
    <meta name="keywords" content="website, caineandrebekah, caine, and, rebekah, blog, utah, nielsen, websites, web development">`);
}

function loadPageRefresh(req, res, localData) {
    res.write(`<!--Document Refresh Rate-->
    <!--<meta http-equiv="refresh" content="30">-->`);
}

function loadPageCustomTags(req, res, localData) {
    res.write(`<!--Tag Creation Scripts-->
    <script>document.createElement("customElement")</script>`);
}

function loadPageFavicons(req, res, localData) {
    res.write(`<!--Document Favicons-->
    <link rel="icon" type="image/png" href="/resources/favicons/favicon-32x32.png" sizes="32x32" /><link rel="icon" type="image/png" href="/resources/favicons/favicon-16x16.png" sizes="16x16" />`);
}

function loadPageGoogleFonts(req, res, localData) {
    res.write(`<!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Great+Vibes|Montserrat|Raleway|PT+Serif" rel="stylesheet"></link>`);
}

function loadPageGoogleIcons(req, res, localData) {
    res.write(`<!--Google Icons-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`);
}

function loadPageFontAwesome(req, res, localData) {
    res.write(`<!--Font Awesome-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">`);
}

function loadPageGoogleAnalytics(req, res, localData) {
    res.write(`<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109532366-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-109532366-1');
    </script>`);
}

function loadPageGoogleFirebase(req, res, localData) {
    res.write(`<!--Google Firebase-->
    <script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-functions.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-database.js"></script>
    <!--<script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-messaging.js"></script>-->
    <!--<script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-firestore.js"></script>-->
    <!--<script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-storage.js"></script>-->
    <script>
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDIpAU8dgctcvpp_YmrR0xofpS4OLBL0mg",
            authDomain: "caineandrebekah.firebaseapp.com",
            databaseURL: "https://caineandrebekah.firebaseio.com",
            projectId: "caineandrebekah",
            storageBucket: "caineandrebekah.appspot.com",
            messagingSenderId: "692416682501"
        };
        firebase.initializeApp(config);
    </script>`);
}

function loadPageStyleSheets(req, res, localData) {
    res.write(`<!--External CSS Stylesheets-->
    <link rel="stylesheet" href="/styles/normalize.css" type="text/css">
    <link rel="stylesheet" href="/styles/index.css" type="text/css">
    <link rel="stylesheet" href="/styles/styles.css" type="text/css">
    <link rel="stylesheet" href="/styles/navigation/navigation.css" type="text/css">
    <link rel="stylesheet" href="/styles/navigation/prompt.css" type="text/css">
    <link rel="stylesheet" href="/styles/navigation/sections.css" type="text/css">
    <link rel="stylesheet" href="/styles/navigation/buttons.css" type="text/css">
    <link rel="stylesheet" href="/styles/navigation/buttons.css" type="text/css">
    <link rel="stylesheet" href="/styles/content/footer.css" type="text/css">
    <link rel="stylesheet" href="/styles/content/items.css" type="text/css">
    <link rel="stylesheet" href="/styles/content/home.css" type="text/css">
    <link rel="stylesheet" href="/styles/navigation/dot.css" type="text/css">
    <link rel="stylesheet" href="/styles/content/blocks.css" type="text/css">
    <link rel="stylesheet" href="/styles/content/cards.css" type="text/css">
    <link rel="stylesheet" href="/styles/content/nodes.css" type="text/css">
    <link rel="stylesheet" href="/styles/app/app.css" type="text/css">
    <!--<link rel="stylesheet" href="/styles/blog/poem.css" type="text/css">-->
    <!--<link rel="stylesheet" href="/styles/support/faq.css" type="text/css">-->
    <link rel="stylesheet" href="/styles/store/products.css" type="text/css">
    <link rel="stylesheet" href="/styles/dev/color-guide.css" type="text/css"></link>`);
}

function loadPageInternalStyles(req, res, localData) {
    res.write(`<!--Embedded CSS Stylesheet-->
    <style type="text/css">
    </style>`);
}

function loadPageGoogleJQuery(req, res, localData) {
    res.write(`<!--Import Google's hosted version of Jquery-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>`);
}

function loadPageExternalJS(req, res, localData) {
    res.write(`<!--External JS Functions-->
    <script src="/scripts/presenter.js"></script>
    <script src="/scripts/navigation/navigation.js"></script>
    <script src="/scripts/navigation/prompt.js"></script>
    <script src="/scripts/navigation/dot.js"></script>
    <script src="/scripts/store/products.js"></script>
    <script src="/scripts/app/app.js"></script>
    <script src="/scripts/account/signup.js"></script>`);
}

function loadEndPageBoiler(req, res, localData) {
    res.write(`</head>
    <body>
        <!--Start Of Content Body-->
        <main id="canvas-outer">`);
}

function pullHeader(req, res, localData) {

    /*
    var headdata = fs.readFileSync('./templates/header-template.html');
    res.write(headdata);
    */

    loadBeginPageBoiler(req, res, localData); 
    loadPageCharSet(req, res, localData);
    loadPageViewPort(req, res, localData);
    loadPageTitle(req, res, localData);
    loadPageTags(req, res, localData);
    loadPageRefresh(req, res, localData);
    loadPageCustomTags(req, res, localData);
    loadPageFavicons(req, res, localData);
    loadPageGoogleFonts(req, res, localData);
    loadPageGoogleIcons(req, res, localData);
    loadPageFontAwesome(req, res, localData);
    loadPageGoogleAnalytics(req, res, localData);
    loadPageGoogleFirebase(req, res, localData);
    loadPageStyleSheets(req, res, localData);
    loadPageInternalStyles(req, res, localData);
    loadPageGoogleJQuery(req, res, localData);
    loadPageExternalJS(req, res, localData);
    loadEndPageBoiler(req, res, localData);
    console.log("Header Loaded");
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
