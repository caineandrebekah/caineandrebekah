const href = window.location.href;
const hostName = window.location.hostname;
const pathName = window.location.pathname;
const protocol = window.location.protocol;

console.log("href: " + href);
console.log("hostName: " + hostName);
console.log("pathName: " + pathName, );
console.log("protocol: " + protocol);


function loadDoc() {
  window.location.assign("");
}

function loadContent() {

  if(pathName === "/") {
    $("#canvas-outer").load("/routes/index.html #canvas-inner", function (response, status, xhr) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
      } else {
        console.log("Content Loaded");
      }
    });
  } else {
    $("#canvas-outer").load("/routes" + pathName + ".html #canvas-inner", function (response, status, xhr) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        alert( msg + xhr.status + " " + xhr.statusText );
      } else {
        console.log("Content Loaded");
      }
    });
  }

}