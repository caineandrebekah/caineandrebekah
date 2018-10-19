window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navItem = document.getElementsByClassName("navigation-item");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navigation-bar-index").style.backgroundColor = "white";
    document.getElementById("navigation-bar-index").style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";

    for (var i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "black";
    }
  } else {
    document.getElementById("navigation-bar-index").style.backgroundColor = "";
    document.getElementById("navigation-bar-index").style.boxShadow = "";

    for (var i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "white";
    }
  }
}

function hoverTrigger(section) {
  switch (section) {
    case home:
      document.getElementById("section-1").style.borderTop = "5px solid";
      document.getElementById("section-2").style.borderTop = "";
      document.getElementById("section-3").style.borderTop = "";
      document.getElementById("section-4").style.borderTop = "";
      document.getElementById("section-5").style.borderTop = "";
      break;
    case about:
      document.getElementById("section-1").style.borderTop = "";
      document.getElementById("section-2").style.borderTop = "5px solid";
      document.getElementById("section-3").style.borderTop = "";
      document.getElementById("section-4").style.borderTop = "";
      document.getElementById("section-5").style.borderTop = "";
      break;
    case blog:
      document.getElementById("section-1").style.borderTop = "";
      document.getElementById("section-2").style.borderTop = "";
      document.getElementById("section-3").style.borderTop = "5px solid";
      document.getElementById("section-4").style.borderTop = "";
      document.getElementById("section-5").style.borderTop = "";
      break;
    case gallery:
      document.getElementById("section-1").style.borderTop = "";
      document.getElementById("section-2").style.borderTop = "";
      document.getElementById("section-3").style.borderTop = "";
      document.getElementById("section-4").style.borderTop = "5px solid";
      document.getElementById("section-5").style.borderTop = "";
      break;  
    case contact:
      document.getElementById("section-1").style.borderTop = "";
      document.getElementById("section-2").style.borderTop = "";
      document.getElementById("section-3").style.borderTop = "";
      document.getElementById("section-4").style.borderTop = "";
      document.getElementById("section-5").style.borderTop = "5px solid";
      break;
    default:
      document.getElementById("section-1").style.borderTop = "";
      document.getElementById("section-2").style.borderTop = "";
      document.getElementById("section-3").style.borderTop = "";
      document.getElementById("section-4").style.borderTop = "";
      document.getElementById("section-5").style.borderTop = "";
      break;
  }
}


      
