document.getElementById("faq-answer").style.display = "none";
document.getElementById("navigation-button-3").classList.add("button-clicked");
document.getElementById("faq-list-3").style.display = "block";

var questions = [
  {
    id: 0,
    articleId: 0,
    section: 1,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
    articleTitle: "How to download the Banyan Mobile App:",
    articleVideo: "F1B9Fk_SgI0",
    articleBody: "<h4>Where to find it?</h4><p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p><p>The Banyan Mobile App is not available on the Google Play Store yet, but we are working hard to build out on this platform. Thank you.</p>"
  },
  {
    id: 1,
    articleId: 1,
    section: 2,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
    articleTitle: "How to download the Banyan Mobile App:",
    articleVideo: "UnyLfqpyi94",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  },
  {
    id: 2,
    articleId: 2,
    section: 3,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
    articleTitle: "How to download the Banyan Mobile App:",
    articleVideo:"IPXIgEAGe4U",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  },
  {
    id: 3,
    articleId: 3,
    section: 4,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
    articleTitle: "How to download the Banyan Mobile App:",
    articleVideo: "BzbxacRr5Gk",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  },
  {
    id: 4,
    articleId: 4,
    section: 5,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
    articleTitle: "How to download the Banyan Mobile App:",
    articleVideo: "9sjWU5dGcGI",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  },
  {
    id: 5,
    articleId: 5,
    section: 1,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
     articleTitle: "How to download the Banyan Mobile App:",
    articleVideo:"",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  },
  {
    id: 6,
    articleId: 6,
    section: 2,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
     articleTitle: "How to download the Banyan Mobile App:",
    articleVideo:"",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  },
  {
    id: 7,
    articleId: 7,
    section: 3,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
    articleTitle: "How to download the Banyan Mobile App:",
    articleVideo:"",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  },
  {
    id: 8,
    articleId: 8,
    section: 4,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
    articleTitle: "How to download the Banyan Mobile App:",
    articleVideo:"",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  },
  {
    id: 9,
    articleId: 9,
    section: 5,
    clicks: 31,
    dateAdded: "8-28-18",
    question: "How do I download the Banyan Mobile App?",
    answer: "very easily",
    articleTitle: "How to download the Banyan Mobile App:",
    articleVideo:"",
    articleBody: "<p>Banyan's Mobile App can be found on the Apple App Store here. The Banyan Mobile App may update to provide more features and improved functions. Download it and log in with your Banyan Account to get the most of Banyan Social!</p>"
  }
];
var output1 = "",
  output2 = "",
  output3 = "",
  output4 = "",
  output5 = "";
for (var i = 0; i < questions.length; i++) {
  document.getElementById("toast").style.display = "none";
  console.log(
    "Added Question: " +
      questions[i].articleId +
      " | '" +
      questions[i].question +
      "' into section: " +
      questions[i].section
  );
  switch (questions[i].section) {
    case 1:
      var faqlist1 = document.getElementById("faq-list-1");
      var count = faqlist1.getElementsByTagName("li");
      var listCount = count.length + 1;
      output1 +=
        '<li class="faq-list-item unselectable" id="faq-list-item-' + questions[i].articleId + '"><div class="module-text" onClick="openArticle(' +
        questions[i].articleId +
        ');"><h2 class="h2grey">' +
        listCount +     
        " &bullet;&nbsp;</h2>" +
        "<h2>" + questions[i].question +
        '</h2></div><div class="mod-menu"><span class="icon-pan" title="Bookmark"><svg class="icon" viewBox="-5 -5 35 35"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg></span><span class="icon-pan" title="Share"><svg class="icon" viewBox="-4 -5 35 35"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"</path></svg></span><span class="icon-pan" title="More..."><svg class="icon" viewBox="-5 -5 35 35"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path></svg></span></div></li>';
      document.getElementById("faq-list-1").innerHTML = output1;
      break;
    case 2:
      var faqlist2 = document.getElementById("faq-list-2");
      var count = faqlist2.getElementsByTagName("li");
      var listCount = count.length + 1;
      output2 +=
        '<li class="faq-list-item unselectable" id="faq-list-item-' + questions[i].articleId + '"><div class="module-text" onClick="openArticle(' +
        questions[i].articleId +
        ');"><h2 class="h2grey">' +
        listCount +     
        " &bullet;&nbsp;</h2>" +
        "<h2>" + questions[i].question +
        '</h2></div><div class="mod-menu"><span class="icon-pan" title="Bookmark"><svg class="icon" viewBox="-5 -5 35 35"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg></span><span class="icon-pan" title="Share"><svg class="icon" viewBox="-4 -5 35 35"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"</path></svg></span><span class="icon-pan" title="More..."><svg class="icon" viewBox="-5 -5 35 35"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path></svg></span></div></li>';
      document.getElementById("faq-list-2").innerHTML = output2;
      break;
    case 3:
      var faqlist3 = document.getElementById("faq-list-3");
      var count = faqlist3.getElementsByTagName("li");
      var listCount = count.length + 1;
      output3 +=
        '<li class="faq-list-item unselectable" id="faq-list-item-' + questions[i].articleId + '"><div class="module-text" onClick="openArticle(' +
        questions[i].articleId +
        ');"><h2 class="h2grey">' +
        listCount +     
        " &bullet;&nbsp;</h2>" +
        "<h2>" + questions[i].question +
        '</h2></div><div class="mod-menu"><span class="icon-pan" title="Bookmark"><svg class="icon" viewBox="-5 -5 35 35"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg></span><span class="icon-pan" title="Share"><svg class="icon" viewBox="-4 -5 35 35"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"</path></svg></span><span class="icon-pan" title="More..."><svg class="icon" viewBox="-5 -5 35 35"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path></svg></span></div></li>';
      document.getElementById("faq-list-3").innerHTML = output3;
      break;
    case 4:
      var faqlist4 = document.getElementById("faq-list-4");
      var count = faqlist4.getElementsByTagName("li");
      var listCount = count.length + 1;
      output4 +=
        '<li class="faq-list-item unselectable" id="faq-list-item-' + questions[i].articleId + '"><div class="module-text" onClick="openArticle(' +
        questions[i].articleId +
        ');"><h2 class="h2grey">' +
        listCount +     
        " &bullet;&nbsp;</h2>" +
        "<h2>" + questions[i].question +
        '</h2></div><div class="mod-menu"><span class="icon-pan" title="Bookmark"><svg class="icon" viewBox="-5 -5 35 35"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg></span><span class="icon-pan" title="Share"><svg class="icon" viewBox="-4 -5 35 35"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"</path></svg></span><span class="icon-pan" title="More..."><svg class="icon" viewBox="-5 -5 35 35"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path></svg></span></div></li>';
      document.getElementById("faq-list-4").innerHTML = output4;
      break;
    case 5:
      var faqlist5 = document.getElementById("faq-list-5");
      var count = faqlist5.getElementsByTagName("li");
      var listCount = count.length + 1;
      output5 +=
        '<li class="faq-list-item unselectable" id="faq-list-item-' + questions[i].articleId + '"><div class="module-text" onClick="openArticle(' +
        questions[i].articleId +
        ');"><h2 class="h2grey">' +
        listCount +     
        " &bullet;&nbsp;</h2>" +
        "<h2>" + questions[i].question +
        '</h2></div><div class="mod-menu"><span class="icon-pan" title="Bookmark"><svg class="icon" viewBox="-5 -5 35 35"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg></span><span class="icon-pan" title="Share"><svg class="icon" viewBox="-4 -5 35 35"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"</path></svg></span><span class="icon-pan" title="More..."><svg class="icon" viewBox="-5 -5 35 35"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path></svg></span></div></li>';
      document.getElementById("faq-list-5").innerHTML = output5;
      break;
    default:
      document.getElementById("toast").style.display = "block";
      document.getElementById("toast").innerHTML +=
        "<p>Error: Invalid Section: " + questions[i].section + "</p>";
      console.error(
        "Error: Invalid Section: " +
          questions[i].section +
          " on question: " +
          questions[i].id
      );
  }
}

//person = JSON.stringify(person);
//person = JSON.parse(person);

function openSection(x) {
  console.log("Question List Switched to Section: " + x);
  switch (x) {
    case 0:
      if(document.getElementById("navigation-drop").classList.contains("button-clicked")) {
        document.getElementById("navigation-drop").classList.remove("button-clicked");
         } else {
        document.getElementById("navigation-drop").classList.add("button-clicked");
         }
      break;
    case 1:
      document
        .getElementById("navigation-button-1")
        .classList.add("button-clicked");
      document
        .getElementById("navigation-button-2")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-3")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-4")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-5")
        .classList.remove("button-clicked");
      document.getElementById("faq-list-1").style.display = "block";
      document.getElementById("faq-list-2").style.display = "none";
      document.getElementById("faq-list-3").style.display = "none";
      document.getElementById("faq-list-4").style.display = "none";
      document.getElementById("faq-list-5").style.display = "none";
      break;
    case 2:
      document
        .getElementById("navigation-button-1")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-2")
        .classList.add("button-clicked");
      document
        .getElementById("navigation-button-3")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-4")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-5")
        .classList.remove("button-clicked");
      document.getElementById("faq-list-1").style.display = "none";
      document.getElementById("faq-list-2").style.display = "block";
      document.getElementById("faq-list-3").style.display = "none";
      document.getElementById("faq-list-4").style.display = "none";
      document.getElementById("faq-list-5").style.display = "none";
      break;
    case 3:
      document
        .getElementById("navigation-button-1")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-2")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-3")
        .classList.add("button-clicked");
      document
        .getElementById("navigation-button-4")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-5")
        .classList.remove("button-clicked");
      document.getElementById("faq-list-1").style.display = "none";
      document.getElementById("faq-list-2").style.display = "none";
      document.getElementById("faq-list-3").style.display = "block";
      document.getElementById("faq-list-4").style.display = "none";
      document.getElementById("faq-list-5").style.display = "none";
      break;
    case 4:
      document
        .getElementById("navigation-button-1")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-2")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-3")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-4")
        .classList.add("button-clicked");
      document
        .getElementById("navigation-button-5")
        .classList.remove("button-clicked");
      document.getElementById("faq-list-1").style.display = "none";
      document.getElementById("faq-list-2").style.display = "none";
      document.getElementById("faq-list-3").style.display = "none";
      document.getElementById("faq-list-4").style.display = "block";
      document.getElementById("faq-list-5").style.display = "none";
      break;
    case 5:
      document
        .getElementById("navigation-button-1")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-2")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-3")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-4")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-5")
        .classList.add("button-clicked");
      document.getElementById("faq-list-1").style.display = "none";
      document.getElementById("faq-list-2").style.display = "none";
      document.getElementById("faq-list-3").style.display = "none";
      document.getElementById("faq-list-4").style.display = "none";
      document.getElementById("faq-list-5").style.display = "block";
      break;
    default:
      document
        .getElementById("navigation-button-1")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-2")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-3")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-4")
        .classList.remove("button-clicked");
      document
        .getElementById("navigation-button-5")
        .classList.remove("button-clicked");
      document.getElementById("faq-list-1").style.display = "none";
      document.getElementById("faq-list-2").style.display = "none";
      document.getElementById("faq-list-3").style.display = "none";
      document.getElementById("faq-list-4").style.display = "none";
      document.getElementById("faq-list-5").style.display = "none";
  }
}

function openArticle(x) {
  console.log("Question: " + x + " Selected");
  
  /*var y = x.toString();
  var elementId = ("faq-list-item-" + y);
  console.log(elementId);
  document.getElementById("faq-list-item-clicked").Id = ("faq-list-item-" + y);
  document.getElementById(elementId).Id = "faq-list-item-clicked";*/
  
  var articleState = document.getElementById("faq-answer").style.display;
  document.getElementById("faq-question").style.width = "50%";
  document.getElementById("faq-answer").style.width = "50%";
  document.getElementById("faq-question").style.boxShadow = "5px 0px 15px 3px #DDDDDD";
  switch (articleState) {
    case "none":
      console.log("Article Model Opened");
      document.getElementById("faq-answer").style.display = "block";
      break;
    case "block":
      console.log("Article Model Already Open");
      break;
    default:
  }
  if (questions[x].articleTitle !== "") {
    console.log("Article Title Selected: " + questions[x].articleTitle);
    document.getElementById("article-title-container").innerHTML =
      "<h2 id=|Raleway|Montserrat"article-title|Raleway|Montserrat" class=|Raleway|Montserrat"unselectable|Raleway|Montserrat">&bullet; " + questions[x].articleTitle + "</h2>";
  } else {
    document.getElementById("article-title-container").innerHTML =
      "<p>The Title Could Not Be Loaded</p>";
  }
  if (questions[x].articleVideo !== "") {
    console.log("Article Video Selected: " + questions[x].articleTitle);
    document.getElementById("article-video").style.display = "block";
    document.getElementById("article-video").src = "https://www.youtube.com/embed/" + questions[x].articleVideo + "?rel=0&amp;showinfo=0";
  } else {
    document.getElementById("article-video").style.display = "none";
  }
  if (questions[x].articleBody !== "") {
    console.log("Article Body: " + questions[x].articleTitle);
    document.getElementById("article-body-container").innerHTML =
      "<div id=|Raleway|Montserrat"article-body|Raleway|Montserrat">" + questions[x].articleBody + "</div>";
  } else {
    document.getElementById("article-body").innerHTML =
      "<p id=|Raleway|Montserrat"article-body|Raleway|Montserrat">The Body Could Not Be Loaded</p>";
  }
}

function closeArticle() {
  console.log("Article Model Closed");
  document.getElementById("faq-question").style.width = "50%";
  document.getElementById("faq-answer").style.display = "none";
  document.getElementById("faq-question").style.boxShadow = "0px 0px 0px 0px";
}

function closeToast() {
  console.log("Toast Model Closed");
  document.getElementById("toast").style.display = "none";
}

var wrapper = document.getElementByClassName("navigation-button"),
  child = document.getElementByTagName("h3");

wrapper.addEventListener("overflow", dropDown);

function dropDown() {
  alert("Droping");
}

wrapper.addEventListener("underflow", popUp);

function dropDown() {
  alert("popUp");
}
