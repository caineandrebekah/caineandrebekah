function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demoDoc").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/content/content.txt", true);
  xhttp.send();
}

function loadRoute() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demoRoute").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://us-central1-caineandrebekah.cloudfunctions.net/router", true);
  xhttp.send();
}

$(function(){
  $("#footer").load("/templates/footer-snipit.html"); 
});

