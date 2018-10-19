const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyDIpAU8dgctcvpp_YmrR0xofpS4OLBL0mg',
    authDomain: 'caineandrebekah.firebaseapp.com',
    projectId: 'caineandrebekah.firebaseapp.com'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

function addRecord() {
    db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}
