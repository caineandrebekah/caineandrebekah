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
    $("#app-canvas-outer").load("/views/view-" + viewName + ".html #app-canvas-inner", function (response, status, xhr) {
        if ( status == "error" ) {
            var msg = "Sorry but there was an error: ";
            alert(msg + xhr.status + " " + xhr.statusText);
        } else {
            console.log("View Loaded");
        }
    });
}

// Page Creator

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
        pageRouteRaw = $("#select-page-route-" + loc).val();
        pageRoute = pageRouteRaw.toLowerCase();
    } else if (met == "create") {
        pageRouteRaw = $("#route-field-" + loc).val();
        pageRoute = pageRouteRaw.toLowerCase();
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

var fullRoute = '';

function saveRoute() {
    if (routePart1 !== "" && routePart2 == "" && routePart3 == "") {
        fullRoute = ("/" + routePart1);
    } else if (routePart1 !== "" && routePart2 !== "" && routePart3 == "") {
        fullRoute = ("/" + routePart1 + "/" + routePart2);
    } else if (routePart1 !== "" && routePart2 !== "" && routePart3 !== "") {
        fullRoute = ("/" + routePart1 + "/" + routePart2 + "/" + routePart3);
    } else {
        console.error('THIS SHOULDNT EVER HAPPEN');
    }
    alert("Page Created at: " + fullRoute);
    console.log(fullRoute);
}

function writePageData() {

    var pageTitleRaw = $("#pageTitleField").val()
    var pageTitle = pageTitleRaw.toLowerCase();

    var hasHNav = $('#hasHNavField').prop('checked');
    var hasVNav = $('#hasVNavField').prop('checked');
    var hasFooter = $('#hasFooterField').prop('checked');

    var pageType = $("#pageTypeField").val();

    if(fullRoute !== '' && pageTitle !== '') {
        console.groupCollapsed("Form Data");
        console.log(fullRoute);
        console.log(pageTitle);
    
        console.log(hasHNav);
        console.log(hasVNav);
        console.log(hasFooter);

        console.log(pageType);
        console.groupEnd();

        finalGet = '/createPage?' + 'routeName=' + pageTitle + '&routePath=' + fullRoute + '&hasHNav=' + hasHNav + '&hasVNav=' + hasVNav + '&pageType=' + pageType + '&hasFooter=' + hasFooter;
        console.log(finalGet);

        $.get(finalGet);

        $("#signUpButton").val('Create another Page');

        $("#pageTitleField").val('');
    
        $("#hasHNavField").val('');
        $("#hasVNavField").val('');
        $("#hasFooterField").val('');

        $("#pageTypeField").val('');

        
    } else {
        $("#signUpButton").val('Error');
    }
};