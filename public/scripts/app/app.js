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