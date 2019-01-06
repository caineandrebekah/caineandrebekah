const fs = require('fs');

exports.loadBoiler = function(req, res, localData) {
    loadPageHead(req, res, localData);
    loadPageContent(req, res, localData);
    loadPageFoot(req, res, localData);
}

function loadPageHead(req, res, localData) {
    loadPageHeadStart(req, res, localData); 
    loadPageHeadCharSet(req, res, localData);
    loadPageHeadViewPort(req, res, localData);
    loadPageHeadTitle(req, res, localData);
    loadPageHeadTags(req, res, localData);
    loadPageHeadRefresh(req, res, localData);
    loadPageHeadCustomTags(req, res, localData);
    loadPageHeadFavicons(req, res, localData);
    loadPageHeadGoogleFonts(req, res, localData);
    loadPageHeadGoogleIcons(req, res, localData);
    loadPageHeadFontAwesome(req, res, localData);
    loadPageHeadGoogleAnalytics(req, res, localData);
    loadPageHeadGoogleFirebase(req, res, localData);
    loadPageHeadStyleSheets(req, res, localData);
    loadPageHeadInternalStyles(req, res, localData);
    loadPageHeadGoogleJQuery(req, res, localData);
    loadPageHeadExternalJS(req, res, localData);
    loadPageHeadEnd(req, res, localData);
    console.log("Head Loaded");
}

function loadPageHeadStart(req, res, localData) {
    res.write(`<!DOCTYPE html>
    <html>
    <head>`);
}

function loadPageHeadCharSet(req, res, localData) {
    res.write(`<!--Character Set-->
    <meta charset="UTF-8"></meta>`);
}

function loadPageHeadViewPort(req, res, localData) {
    res.write(`<!--Typical Viewport Meta Tag-->
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>`);
}

function loadPageHeadTitle(req, res, localData) {
    res.write(`<!--Document Title-->
    <title>${localData.routeName} | Caine And Rebekah</title>`);
}

function loadPageHeadTags(req, res, localData) {
    res.write(`<!--Common Meta Tags-->
    <meta name="author" content="Caine J Nielsen">
    <meta name="description" content="description here">
    <meta name="keywords" content="website, caineandrebekah, caine, and, rebekah, blog, utah, nielsen, websites, web development">`);
}

function loadPageHeadRefresh(req, res, localData) {
    res.write(`<!--Document Refresh Rate-->
    <!--<meta http-equiv="refresh" content="30">-->`);
}

function loadPageHeadCustomTags(req, res, localData) {
    res.write(`<!--Tag Creation Scripts-->
    <script>document.createElement("customElement")</script>`);
}

function loadPageHeadFavicons(req, res, localData) {
    res.write(`<!--Document Favicons-->
    <link rel="icon" type="image/png" href="/resources/favicons/favicon-32x32.png" sizes="32x32" /><link rel="icon" type="image/png" href="/resources/favicons/favicon-16x16.png" sizes="16x16" />`);
}

function loadPageHeadGoogleFonts(req, res, localData) {
    res.write(`<!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Great+Vibes|Montserrat|Raleway|PT+Serif" rel="stylesheet"></link>`);
}

function loadPageHeadGoogleIcons(req, res, localData) {
    res.write(`<!--Google Icons-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`);
}

function loadPageHeadFontAwesome(req, res, localData) {
    res.write(`<!--Font Awesome-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">`);
}

function loadPageHeadGoogleAnalytics(req, res, localData) {
    res.write(`<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109532366-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-109532366-1');
    </script>`);
}

function loadPageHeadGoogleFirebase(req, res, localData) {
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

function loadPageHeadStyleSheets(req, res, localData) {
    res.write(`<!--External CSS Stylesheets-->
    <link rel="stylesheet" href="/styles/libraries/normalize.css" type="text/css">
    <link rel="stylesheet" href="/styles/libraries/dropzone.css" type="text/css">
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

function loadPageHeadInternalStyles(req, res, localData) {
    res.write(`<!--Embedded CSS Stylesheet-->
    <style type="text/css">
    </style>`);
}

function loadPageHeadGoogleJQuery(req, res, localData) {
    res.write(`<!--Import Google's hosted version of Jquery-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>`);
}

function loadPageHeadExternalJS(req, res, localData) {
    res.write(`<!--External JS Functions-->
    <script src="/scripts/presenter.js"></script>
    <script src="/scripts/navigation/navigation.js"></script>
    <script src="/scripts/navigation/prompt.js"></script>
    <script src="/scripts/navigation/dot.js"></script>
    <script src="/scripts/app/app.js"></script>
    <script src="/scripts/account/signup.js"></script>
    <script src="/scripts/libraries/dropzone.js"></script>`);
}

function loadPageHeadEnd(req, res, localData) {
    res.write(`</head>
    <body>
        <!--Start Of Content Body-->
        <main id="canvas-outer">`);
}

function loadPageContent(req, res, localData) {
    var contentData = './routes' + localData.routePath + '.html';
    if (contentData === './routes/.html') {
        contentData = './routes/index.html';   
    }
    var finishedData = fs.readFileSync(contentData);
    res.write(finishedData);
    console.log("Content Loaded");
}

function loadPageFoot(req, res, localData) {
    loadPageFootStart(req, res, localData);
    loadPageFootAccent(req, res, localData);
    loadPageFootEnd(req, res, localData);
    console.log("Foot Loaded");
}

function loadPageFootStart(req, res, localData) {
    res.write(`</main>
    <!--End Of Content Body-->`);
}

function loadPageFootAccent(req, res, localData) {
    if (localData.hasFooter === 'true') {
        var footerData = fs.readFileSync('./templates/footer-accent-template.html');
        res.write(footerData);
    }
}

function loadPageFootEnd(req, res, localData) {
    res.write(`<div id="prompt-loader"></div>
    <!--Only run Javascript once the page has fully finished loading.-->
    <script type="text/javascript">
        function autorun() {
            loadLogger();
        }
        if (window.addEventListener) window.addEventListener("load", autorun, false);
        else if (window.attachEvent) window.attachEvent("onload", autorun);
        else window.onload = autorun;
    </script>
    </body>
</html>`);
}