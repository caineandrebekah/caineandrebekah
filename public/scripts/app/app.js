function changeView(view) {

    var viewName = "";

    switch(view) {
        case 1:
            viewName = "account-settings";
            console.log("View Selected: " + viewName);
            openView(viewName);
            break;
        case 2:
            viewName = "profile-editor";
            console.log("View Selected: " + viewName);
            openView(viewName);
            break;
        case 3:
            viewName = "website-theme";
            console.log("View Selected: " + viewName);
            openView(viewName);
            break;
        case 4:
            viewName = "blog-editor";
            console.log("View Selected: " + viewName);
            openView(viewName);
            break;
        case 5:
            viewName = "gallery-editor";
            console.log("View Selected: " + viewName);
            openView(viewName);
            break;
        default:
            break;
    }
}

function openView(viewName) {
    $("#app-canvas-outer").load("/routes/app/view-" + viewName + ".html #app-canvas-inner", function (response, status, xhr) {
        if ( status == "error" ) {
            var msg = "Sorry but there was an error: ";
            alert(msg + xhr.status + " " + xhr.statusText);
        } else {
            console.log("View Loaded");
        }
    });
}

// Page Creator

function writePageData(pageId, route, pageTitle, pageType) {
    var routeNameField = document.getElementById("FrouteName");
    var pageTitleField = document.getElementById("FpageTitle");

    var hasHNavField = document.getElementById("FhasHNav");
    var hasVNavField = document.getElementById("FhasVNav");
    var hasFooterField = document.getElementById("FhasFooter");
    var pageTypeField = document.getElementById("FpageType");

    var signUpButton = document.getElementById("signUpButton");

    var routeName = routeNameField.value;
    var pageTitle = pageTitleField.value;

    var hasHNav = hasHNavField.value;
    var hasVNav = hasVNavField.value;
    var hasFooter = hasFooterField.value;
    var pageType = pageTypeField.value;

    if(routeName != '', pageTitle !='') {
        console.groupCollapsed("Form Data");
        console.log(routeName);
        console.log(pageTitle);
    
        console.log(hasHNav);
        console.log(hasVNav);
        console.log(hasFooter);
        console.log(pageType);
        console.groupEnd();

        firebase.database().ref('Routes' + routeName).set({
            routeName: routeName,
            pageTitle: pageTitle,
            styles: {pageType: pageType, hasHNav: hasHNav, hasVNav: hasVNav, hasFooter: hasFooter}
        });
    
        routeNameField.value = "";
        pageTitleField.value = "";
    
        hasHNavField.value = "";
        hasVNavField.value = "";
        hasFooterField.value = "";
        pageTypeField.value = "";
        signupButton.innerHTML = "Create another Page";
    } else {
        signupButton.innerHTML = "Error";
    }
};












function chooseRoute(loc) {
    console.log("Existing 1 Opened");
    $("#route-menu-" + loc + "-a").hide();
    $("#route-menu-" + loc + "-b").show();
}

function createRoute(loc) {
    console.log("New 1 Opened");
    $("#route-menu-" + loc + "-a").hide();
    $("#route-menu-" + loc + "-c").show();
}

function closeRoute(loc) {
    $("#route-menu-" + loc + "-a").show();
    $("#route-menu-" + loc + "-b").hide();
    $("#route-menu-" + loc + "-c").hide();
}

var routePart1 = "";
var routePart2 = "";
var routePart3 = "";

function completeRoute(loc, met) {
    var pageRoute = "";
    if (met == "choose") {
        pageRoute = $("#select-page-route-" + loc).val();
    } else if (met == "create") {
        pageRoute = $("#route-field-" + loc).val();
    }
    console.log(pageRoute);
    if (pageRoute !== "") {
        $("#route-menu-" + loc + "-b").hide();
        $("#route-menu-" + loc + "-c").hide();
        $("#route-menu-" + loc + "-d").show();
        $("#route-menu-" + loc + "-d").html(pageRoute);
        if(loc == 1) {
            routePart1 = pageRoute;
            $("#route-builder-2").show();
        } else if (loc == 2) {
            routePart2 = pageRoute;
            $("#route-builder-3").show();
        } else if (loc == 3) {
            routePart3 = pageRoute;
            console.log("No more to open");
        }
        if (loc == 1 && met == "create") {
            $("#choose-2").hide();
            $("#route-menu-4").show();
        } else if (loc == 2 && met == "create") {
            $("#choose-3").hide();
            $("#route-menu-4").show();
        } else if (loc == 2 && met == "choose") {
            $("#route-menu-4").show();
        }
    } else {
        alert("Page Route Must not be Blank")
    }
}

function saveRoute() {
    var fullRoute = (routePart1 + "/" + routePart2 + "/" + routePart3);
    alert("Page Created at: " + fullRoute);
    console.log(fullRoute);
}























function readPageData(checkedRoute) {
  var db = firebase.database();
  var dbData = db.ref(checkedRoute);
  dbData.on('value', function(snapshot) {
    localData = snapshot.val();
    console.groupCollapsed("Firebase Database");
    console.info(localData);
    console.groupEnd();
    if(localData != null) {
      







        console.log("Render Nodes");






        
    } else {
      console.error("No Data Returned");
    }
  });
}