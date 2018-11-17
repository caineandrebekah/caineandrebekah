window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navItem = document.getElementsByClassName("navigation-item");
  var navItemText = document.getElementsByClassName("navigation-item-text");
  var navNoAccent = document.getElementById("no-accent-nav-bar");
  var navAccent = document.getElementById("accent-nav-bar");
  var UpArrow = document.getElementById("dot-pagetop");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    if (document.body.contains(UpArrow)) {
    UpArrow.style.display = "block";
    }
    if (document.body.contains(navAccent)) {
      navAccent.style.backgroundColor = "white";
      navAccent.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    } else if (document.body.contains(navNoAccent)) {
      navNoAccent.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    }
    for (var i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "#212121";
    }
  } else {
    if (document.body.contains(UpArrow)) {
      UpArrow.style.display = "none";
    }
    if (document.body.contains(navAccent)) {
      navAccent.style.backgroundColor = "";
      navAccent.style.boxShadow = "";
      for (var i = 0; i < navItem.length; i++) {
        navItem[i].style.color = "white";
      }
    } else if (document.body.contains(navNoAccent)) {
      navNoAccent.style.boxShadow = "";
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


      
