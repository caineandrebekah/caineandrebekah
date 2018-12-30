const protocol = window.location.protocol;
const href = window.location.href;
const hostName = window.location.hostname;
const pathName = window.location.pathname;

console.groupCollapsed("Window Location");
console.info("protocol: " + protocol);
console.info("href: " + href);
console.info("hostName: " + hostName);
console.info("pathName: " + pathName);
console.groupEnd();

var dataRoute = 'Routes' + pathName + '/styles/';
console.info('dataRoute: ' + dataRoute);

var localData = {};

function loadContent() {
  if(pathName === "/") {
    retreiveData('Routes/index/styles/');
  } else {
    retreiveData(dataRoute);
  }
}

function retreiveData(checkedRoute) {
  var db = firebase.database();
  var dbData = db.ref(checkedRoute);
  dbData.on('value', function(snapshot) {
    localData = snapshot.val();
    console.groupCollapsed("Firebase Database");
    console.info(localData);
    console.groupEnd();
    if(localData != null) {
      renderBoiler();
    } else {
      console.error("No Data Returned");
    }
  });
}

function renderBoiler() {
  if(pathName === "/") {
    $("#canvas-outer").load("/routes/index.html #canvas-inner", function (response, status, xhr) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
      } else {
        console.log("Boilerplates Loaded");
        renderFooter();
      }
    });
  } else {
    $("#canvas-outer").load("/routes" + pathName + ".html #canvas-inner", function (response, status, xhr) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        alert( msg + xhr.status + " " + xhr.statusText );
      } else {
        console.log("Boilerplates Loaded");
        renderFooter();
      }
    });
  }
}

function renderFooter() {
  if (localData.hasFooter === "true") {
    $("#footer-canvas-outer").load("/templates/footer/footer.html #footer-canvas-inner", function (response, status, xhr) {
      if ( status == "error" ) {
          var msg = "Sorry but there was an error: ";
          alert(msg + xhr.status + " " + xhr.statusText);
      } else {
          console.log("Footer Loaded");
      }
  });
  } else {
    console.log("Skipped Footer");
  }
}